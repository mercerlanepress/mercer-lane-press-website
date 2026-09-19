import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';

const root=resolve(import.meta.dirname,'..');
execFileSync('npm',['run','build'],{cwd:root,stdio:'inherit'});
execFileSync('git',['diff','--check'],{cwd:root,stdio:'inherit'});
const dist=join(root,'dist');
const html=[]; walk(dist,file=>file.endsWith('.html')&&html.push(file));
const metadata=new Set();
for(const file of html){const source=readFileSync(file,'utf8');const title=source.match(/<title>(.*?)<\/title>/)?.[1];const description=source.match(/<meta name="description" content="([^"]*)"/)?.[1];if(!title||!description) throw new Error(`Missing title/description: ${file}`);const key=`${title}|${description}`;if(metadata.has(key))throw new Error(`Duplicate page metadata: ${title}`);metadata.add(key);for(const href of source.matchAll(/href="(\/[^"#?]*)/g)){let path=href[1];if(path.startsWith('/images/')||path.includes('.')){if(!existsSync(join(dist,path)))throw new Error(`Broken internal link ${path} in ${file}`);}else{const target=join(dist,path,'index.html');if(!existsSync(target))throw new Error(`Broken internal link ${path} in ${file}`);}}for(const image of source.matchAll(/<img[^>]+src="(\/[^"?]+)"[^>]*>/g)){if(!existsSync(join(dist,image[1])))throw new Error(`Missing image ${image[1]} in ${file}`);if(!/\salt="[^"]+"/.test(image[0]))throw new Error(`Image without useful alt text in ${file}`);}}
const bookData=readFileSync(join(root,'src/data/books.ts'),'utf8');
for(const value of bookData.matchAll(/"?purchaseUrl"?:\s*["']([^"']*)/g))if(!value[1])throw new Error('A published book has an empty purchase URL.');
for(const value of bookData.matchAll(/"?cover"?:\s*["']([^"']+)/g))if(!existsSync(join(root,'public',value[1])))throw new Error(`Referenced cover does not exist: ${value[1]}`);
const sitemap=readFileSync(join(dist,'sitemap.xml'),'utf8');if(!sitemap.startsWith('<?xml')||!sitemap.includes('https://mercerlanepress.com/'))throw new Error('Sitemap is missing or invalid.');
const robots=readFileSync(join(dist,'robots.txt'),'utf8');if(!/Sitemap:\s*https:\/\/mercerlanepress\.com\/sitemap\.xml/i.test(robots))throw new Error('robots.txt does not identify the canonical sitemap.');
for(const file of html){const source=readFileSync(file,'utf8');for(const url of source.matchAll(/<link rel="canonical" href="([^"]+)"/g))if(!url[1].startsWith('https://mercerlanepress.com/'))throw new Error(`Bad canonical URL in ${file}`);}
console.log(`Site checks passed for ${html.length} HTML pages: build, whitespace, links, images/alt text, purchase URLs, sitemap, robots, canonicals, and unique metadata.`);
function walk(dir,visit){for(const name of readdirSync(dir)){const path=join(dir,name);statSync(path).isDirectory()?walk(path,visit):visit(path)}}
