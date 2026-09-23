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

const cooperativeCareGuides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cooperative-care' }),
  schema: guideSchema
});

const rescueDogFirst90DaysGuides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/rescue-dog-first-90-days' }),
  schema: guideSchema
});

const heatPumpOwnerGuides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/heat-pump-owners' }),
  schema: guideSchema
});


const localAiGuides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/local-ai' }),
  schema: guideSchema
});

const beginnerTelescopeObservingGuides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/beginner-telescope-observing' }),
  schema: guideSchema
});

const deepSkyAstrophotographyGuides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/deep-sky-astrophotography' }),
  schema: guideSchema
});

const constructionEstimatingGuides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/construction-estimating' }),
  schema: guideSchema
});

const landscapeContractorEstimatingGuides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/landscape-contractor-estimating' }),
  schema: guideSchema
});


const homeAssistantMatterThreadGuides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/home-assistant-matter-thread' }),
  schema: guideSchema
});

const genealogyBrickWallGuides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/genealogy-brick-walls' }),
  schema: guideSchema
});

const powerAutomateGuides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/power-automate' }),
  schema: guideSchema
});


const pickleballDoublesGuides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pickleball-doubles' }),
  schema: guideSchema
});

const youthSoccerCoachingGuides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/youth-soccer-coaching' }),
  schema: guideSchema
});


export const collections = { guides, localBusinessAiGuides, aiScamDefenceGuides, reactiveDogWalkingGuides, dogEnrichmentGuides, cooperativeCareGuides, rescueDogFirst90DaysGuides, heatPumpOwnerGuides, localAiGuides, beginnerTelescopeObservingGuides, deepSkyAstrophotographyGuides, constructionEstimatingGuides, landscapeContractorEstimatingGuides, homeAssistantMatterThreadGuides, genealogyBrickWallGuides, powerAutomateGuides, pickleballDoublesGuides, youthSoccerCoachingGuides };
