import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { books } from '../data/books';
import { authors } from '../data/authors';

export const GET: APIRoute = async () => {
  const guides = await getCollection('guides');
  const localBusinessAiGuides = await getCollection('localBusinessAiGuides');
  const aiScamDefenceGuides = await getCollection('aiScamDefenceGuides');
  const reactiveDogWalkingGuides = await getCollection('reactiveDogWalkingGuides');
  const dogEnrichmentGuides = await getCollection('dogEnrichmentGuides');
  const cooperativeCareGuides = await getCollection('cooperativeCareGuides');
  const rescueDogFirst90DaysGuides = await getCollection('rescueDogFirst90DaysGuides');
  const heatPumpOwnerGuides = await getCollection('heatPumpOwnerGuides');
  const powerAutomateGuides = await getCollection('powerAutomateGuides');
  const paths = [
    '/', '/books/', '/authors/', '/guides/', '/5g-home-internet/', '/local-business-ai/', '/ai-scam-defence/', '/reactive-dog-walking/', '/dog-enrichment/', '/cooperative-care/', '/rescue-dog-first-90-days/', '/heat-pump-owners/', '/power-automate/', '/about/', '/contact/', '/privacy/',
    ...books.map(({ slug }) => '/books/' + slug + '/'),
    ...authors.map(({ slug }) => '/authors/' + slug + '/'),
    ...guides.map(({ id }) => '/5g-home-internet/' + id + '/'),
    ...localBusinessAiGuides.map(({ id }) => '/local-business-ai/' + id + '/'),
    ...aiScamDefenceGuides.map(({ id }) => '/ai-scam-defence/' + id + '/'),
    ...reactiveDogWalkingGuides.map(({ id }) => '/reactive-dog-walking/' + id + '/'),
    ...dogEnrichmentGuides.map(({ id }) => '/dog-enrichment/' + id + '/'),
    ...cooperativeCareGuides.map(({ id }) => '/cooperative-care/' + id + '/'),
    ...rescueDogFirst90DaysGuides.map(({ id }) => '/rescue-dog-first-90-days/' + id + '/'),
    ...heatPumpOwnerGuides.map(({ id }) => '/heat-pump-owners/' + id + '/'),
    ...powerAutomateGuides.map(({ id }) => '/power-automate/' + id + '/')
  ];
  const body = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + paths.map(path => '\n  <url><loc>https://mercerlanepress.com' + path + '</loc></url>').join('') + '\n</urlset>\n';
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
