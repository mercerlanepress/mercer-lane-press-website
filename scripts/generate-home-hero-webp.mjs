// Build-time, deterministic optimisation of the existing approved homepage cover.
// Never change the original book-cover JPEG or its metadata/print asset.
import sharp from 'sharp';
import { mkdir, stat } from 'node:fs/promises';
import { join, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const coverDir = join(root, 'public', 'images', 'books');
const source = join(coverDir, 'The_Small_Fleet_Maintenance_Front_Cover.jpg');
const base = 'The_Small_Fleet_Maintenance_Front_Cover';
const widths = [480, 800];

const sourceStat = await stat(source);
const metadata = await sharp(source).metadata();
if (metadata.width !== 1049 || metadata.height !== 1499) {
  throw new Error(`Homepage source cover changed (${metadata.width}×${metadata.height}); inspect new source before updating the responsive variants.`);
}
await mkdir(coverDir, { recursive: true });

for (const width of widths) {
  const destination = join(coverDir, `${base}-${width}.webp`);
  const info = await sharp(source)
    .rotate()
    .resize({ width, withoutEnlargement: true, fit: 'inside' })
    .webp({ quality: 86, effort: 6 })
    .toFile(destination);
  if (info.width !== width || !info.height || info.size <= 0) {
    throw new Error(`Unexpected WebP output dimensions for ${destination}`);
  }
  const ratio = info.size / sourceStat.size;
  if (ratio >= 0.8) {
    throw new Error(`Optimised cover is unexpectedly large: ${info.size} bytes (${Math.round(ratio * 100)}% of source)`);
  }
  console.log(`Generated ${base}-${width}.webp: ${info.width}×${info.height}, ${(info.size / 1024).toFixed(1)} KiB`);
}
