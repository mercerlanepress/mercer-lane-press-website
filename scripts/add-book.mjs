#!/usr/bin/env node
import { execFileSync, spawnSync } from 'node:child_process';
import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { basename, extname, join, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const args = process.argv.slice(2);
const noGit = args.includes('--no-git');
const requested = args.find(arg => !arg.startsWith('--'));
const incoming = resolve(root, 'book-intake/incoming');
const folders = existsSync(incoming) ? readdirSync(incoming, { withFileTypes: true }).filter(entry => entry.isDirectory() && !entry.name.startsWith('.')) : [];
const intake = requested ? resolve(root, requested) : folders.length === 1 ? join(incoming, folders[0].name) : null;
if (!intake || !existsSync(intake)) fail('Pass one intake folder, or leave exactly one folder in book-intake/incoming/.');

const files = readdirSync(intake).filter(name => !name.startsWith('.'));
const metadataFile = files.find(name => /^metadata\.ya?ml$/i.test(name));
if (!metadataFile) fail('The intake folder needs metadata.yml (copy the example template).');
const metadata = parseMetadata(readFileSync(join(intake, metadataFile), 'utf8'));
const manuscriptName = one(files.filter(name => ['.pdf','.docx','.md','.txt'].includes(extname(name).toLowerCase())), 'manuscript PDF, DOCX, Markdown, or text file');
const coverName = one(files.filter(name => ['.jpg','.jpeg','.png','.webp'].includes(extname(name).toLowerCase())), 'cover JPG, PNG, or WebP');
const manuscript = extractManuscript(join(intake, manuscriptName));

metadata.title ||= deriveTitle(manuscript);
for (const field of ['title','author','amazonUrl']) if (!metadata[field]?.trim()) fail(`metadata.yml field “${field}” is required.`);
validateAmazon(metadata.amazonUrl);
if (manuscript.replace(/\s/g, '').length < 500) fail('The manuscript contains too little extractable text (minimum 500 non-space characters).');

const slug = slugify(metadata.title);
const authorSlug = slugify(metadata.author);
if (!slug || !authorSlug) fail('Could not create a safe slug from the title or author.');
const booksPath = join(root, 'src/data/books.ts');
const authorsPath = join(root, 'src/data/authors.ts');
const booksSource = readFileSync(booksPath, 'utf8');
const authorsSource = readFileSync(authorsPath, 'utf8');
if (booksSource.includes(`slug: '${slug}'`) || booksSource.includes(`"slug": "${slug}"`)) fail(`A book with slug “${slug}” already exists.`);
const authorExists = hasAuthor(authorsSource, metadata.author);
if (!authorExists && hasSlug(authorsSource, authorSlug)) fail(`Author slug “${authorSlug}” is already used by a different author. Choose a distinct author name/slug before continuing.`);

const dimensions = imageDimensions(join(intake, coverName));
const ratio = dimensions.width / dimensions.height;
if (dimensions.width < 600 || dimensions.height < 900) fail(`Cover is only ${dimensions.width}×${dimensions.height}px. Supply at least 600×900px; 1600px or more on the long edge is recommended.`);
if (dimensions.height < 1600) console.warn(`WARNING: ${dimensions.width}×${dimensions.height}px will work, but a cover at least 1600px tall is recommended.`);
if (ratio < .5 || ratio > .85) console.warn(`WARNING: unusual cover aspect ratio (${ratio.toFixed(2)}). Confirm that this is the uncropped front cover.`);

if (!noGit) prepareBranch(slug);
const extension = extname(coverName).toLowerCase() === '.jpeg' ? '.jpg' : extname(coverName).toLowerCase();
const coverFile = `${slug}-cover${extension}`;
mkdirSync(join(root, 'public/images/books'), { recursive: true });
copyFileSync(join(intake, coverName), join(root, 'public/images/books', coverFile));

const themes = deriveThemes(manuscript);
const category = metadata.category || themes[0] || 'practical nonfiction';
const book = {
  slug, title: metadata.title, subtitle: metadata.subtitle || '', author: metadata.author, authorSlug,
  publisher: 'Mercer Lane Press',
  description: `${metadata.title} is a practical guide to ${lowerFirst(category)}, with a clear focus on the subjects developed in the book.`,
  cover: `/images/books/${coverFile}`, coverReady: true, purchaseUrl: metadata.amazonUrl,
  intendedReader: `Readers who want a practical, structured introduction to ${lowerFirst(category)}.`,
  problems: themes.slice(0, 3).map(theme => `Understanding and working through ${lowerFirst(theme)}`),
  topics: themes.slice(0, 6),
  outcomes: themes.slice(0, 3).map(theme => `A clearer framework for ${lowerFirst(theme)}`), themes
};
writeFileSync(booksPath, insertRecord(booksSource, book), 'utf8');
if (!authorExists) {
  const bio = metadata.authorBio || `${metadata.author} is the author of ${metadata.title}, published by Mercer Lane Press.`;
  writeFileSync(authorsPath, insertRecord(authorsSource, { slug: authorSlug, name: metadata.author, bio }), 'utf8');
}

console.log(`Added “${metadata.title}” (${dimensions.width}×${dimensions.height}px cover).`);
console.log(`Book page: https://mercerlanepress.com/books/${slug}/`);
if (metadata.optionalNotes) console.log(`Owner notes retained in the intake folder: ${metadata.optionalNotes}`);
if (!noGit) {
  run('npm', ['run', 'check']);
  run('git', ['add', 'src/data/books.ts','src/data/authors.ts',`public/images/books/${coverFile}`]);
  assertNoStagedIntake();
  run('git', ['commit','-m',`Add ${metadata.title}`]);
  console.log('\nCommitted on book/' + slug + '. Push this branch and open a pull request.');
  console.log('Cloudflare will report the preview deployment in the pull-request checks. STOP and wait for owner approval; never merge automatically.');
} else console.log('Skipped branch, checks, and commit because --no-git was supplied.');

function parseMetadata(source) {
  const result = {};
  for (const raw of source.split(/\r?\n/)) {
    if (!raw.trim() || raw.trimStart().startsWith('#')) continue;
    const match = raw.match(/^([A-Za-z][A-Za-z0-9]*):\s*(.*)$/);
    if (!match) fail(`Invalid metadata line: ${raw}`);
    result[match[1]] = match[2].trim().replace(/^(['"])(.*)\1$/, '$2');
  }
  return result;
}
function one(matches, label) { if (matches.length !== 1) fail(`Expected exactly one ${label}; found ${matches.length}.`); return matches[0]; }
function validateAmazon(url) { let parsed; try { parsed = new URL(url); } catch { fail('amazonUrl must be a complete URL.'); } if (parsed.protocol !== 'https:' || !/(^|\.)amazon\.com$/i.test(parsed.hostname) || !/(\/dp\/|\/gp\/product\/|\/[^/]+\/dp\/)[A-Z0-9]{10}(?:[/?]|$)/i.test(parsed.pathname + parsed.search)) fail('amazonUrl must be an HTTPS amazon.com book/product URL containing a 10-character ASIN. The supplied URL is never changed or guessed.'); }
function slugify(value) { return value.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/&/g,' and ').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,80).replace(/-$/,''); }
function deriveTitle(text) { return text.split(/\r?\n/).map(line=>line.trim()).find(line => line.length >= 3 && line.length <= 140) || ''; }
function deriveThemes(text) { const stop = new Set('about after again against also among because being between book chapter could every first from have into more most other over reader should some such than that their them then there these they this through under using very what when where which while will with would your'.split(' ')); const headings = text.split(/\r?\n/).map(x=>x.replace(/^#+\s*/, '').trim()).filter(x=>x.length>3&&x.length<80&&!/[.!?]$/.test(x)).slice(0,50); const counts=new Map(); for(const line of headings) for(const word of line.toLowerCase().match(/[a-z][a-z'-]{3,}/g)||[]) if(!stop.has(word)) counts.set(word,(counts.get(word)||0)+1); const words=[...counts].sort((a,b)=>b[1]-a[1]).slice(0,6).map(([word])=>word[0].toUpperCase()+word.slice(1)); return words.length ? words : ['the central ideas presented in the manuscript']; }
function lowerFirst(value) { return value.charAt(0).toLowerCase()+value.slice(1); }
function insertRecord(source, record) { const marker = '}];'; const index=source.lastIndexOf(marker); if(index<0) fail('Could not locate the data list terminator.'); const encoded=JSON.stringify(record,null,2).split('\n').map((line,i)=>i?'  '+line:line).join('\n'); return source.slice(0,index+1)+',\n'+encoded+source.slice(index+1); }
function hasAuthor(source,name) { return source.includes(`name: '${name.replaceAll("'","\\'")}'`) || source.includes(`"name": "${name.replaceAll('"','\\"')}"`); }
function hasSlug(source,slug) { return source.includes(`slug: '${slug.replaceAll("'","\\'")}'`) || source.includes(`"slug": "${slug.replaceAll('"','\\"')}"`); }
function extractManuscript(path) { const ext=extname(path).toLowerCase(); if(ext==='.md'||ext==='.txt') return readFileSync(path,'utf8'); if(ext==='.pdf') { const result=spawnSync('pdftotext',['-layout',path,'-'],{encoding:'utf8'}); if(result.error?.code==='ENOENT') fail('PDF intake needs the free “pdftotext” command installed. Alternatively supply Markdown or text.'); if(result.status!==0) fail('Could not extract text from the PDF: '+result.stderr); return result.stdout; } const result=spawnSync('unzip',['-p',path,'word/document.xml'],{encoding:'utf8'}); if(result.error?.code==='ENOENT') fail('DOCX intake needs the “unzip” command installed. Alternatively supply Markdown or text.'); if(result.status!==0) fail('Could not extract word/document.xml from the DOCX.'); return result.stdout.replace(/<w:tab\/?\s*>/g,'\t').replace(/<\/w:p>/g,'\n').replace(/<[^>]+>/g,' ').replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>'); }
function imageDimensions(path) { const b=readFileSync(path); if(b.toString('ascii',1,4)==='PNG') return {width:b.readUInt32BE(16),height:b.readUInt32BE(20)}; if(b[0]===0xff&&b[1]===0xd8){let p=2;while(p<b.length){if(b[p]!==0xff){p++;continue}const marker=b[p+1],len=b.readUInt16BE(p+2);if([0xc0,0xc1,0xc2,0xc3,0xc5,0xc6,0xc7,0xc9,0xca,0xcb,0xcd,0xce,0xcf].includes(marker))return {height:b.readUInt16BE(p+5),width:b.readUInt16BE(p+7)};p+=2+len}} if(b.toString('ascii',0,4)==='RIFF'&&b.toString('ascii',8,12)==='WEBP'){const type=b.toString('ascii',12,16);if(type==='VP8X')return {width:1+b.readUIntLE(24,3),height:1+b.readUIntLE(27,3)};if(type==='VP8 ' )return {width:b.readUInt16LE(26)&0x3fff,height:b.readUInt16LE(28)&0x3fff};if(type==='VP8L'){const bits=b.readUInt32LE(21);return {width:(bits&0x3fff)+1,height:((bits>>14)&0x3fff)+1}}} fail(`Could not read dimensions from ${basename(path)}. Save the cover as a standard JPG, PNG, or WebP.`); }
function prepareBranch(slug) {
  const status=execFileSync('git',['status','--porcelain','--untracked-files=no'],{cwd:root,encoding:'utf8'});
  if(status.trim()) fail('Tracked files must be clean before add-book starts. Commit or discard those changes first.');
  try {
    run('git',['fetch','origin','main']);
    run('git',['switch','main']);
    run('git',['merge','--ff-only','origin/main']);
  } catch {
    fail('Could not safely update local main to the latest origin/main with a fast-forward. Resolve the local branch state, then run add-book again. No forced reset was performed.');
  }
  run('git',['switch','-c',`book/${slug}`]);
}
function assertNoStagedIntake() {
  const staged=execFileSync('git',['diff','--cached','--name-only','--','book-intake/incoming'],{cwd:root,encoding:'utf8'}).trim();
  if(staged) fail(`Refusing to commit private intake files. Unstage these paths first:\n${staged}`);
}
function run(command, commandArgs) { execFileSync(command,commandArgs,{cwd:root,stdio:'inherit'}); }
function fail(message) { console.error(`ERROR: ${message}`); process.exit(1); }
