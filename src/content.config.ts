import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(), description: z.string(), published: z.coerce.date(),
    summary: z.string(), order: z.number(), related: z.array(z.string())
  })
});
export const collections = { guides };
