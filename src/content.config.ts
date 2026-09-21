import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guideSchema = z.object({
  title: z.string(), description: z.string(), published: z.coerce.date(),
  summary: z.string(), order: z.number(), related: z.array(z.string())
});

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: guideSchema
});

const localBusinessAiGuides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/local-business-ai' }),
  schema: guideSchema
});

const aiScamDefenceGuides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ai-scam-defence' }),
  schema: guideSchema
});

const reactiveDogWalkingGuides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reactive-dog-walking' }),
  schema: guideSchema
});

const dogEnrichmentGuides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/dog-enrichment' }),
  schema: guideSchema
});

const heatPumpOwnerGuides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/heat-pump-owners' }),
  schema: guideSchema
});

const powerAutomateGuides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/power-automate' }),
  schema: guideSchema
});

export const collections = { guides, localBusinessAiGuides, aiScamDefenceGuides, reactiveDogWalkingGuides, dogEnrichmentGuides, heatPumpOwnerGuides, powerAutomateGuides };
