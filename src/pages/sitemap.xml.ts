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
  const localAiGuides = await getCollection('localAiGuides');
  const beginnerTelescopeObservingGuides = await getCollection('beginnerTelescopeObservingGuides');
  const deepSkyAstrophotographyGuides = await getCollection('deepSkyAstrophotographyGuides');
  const constructionEstimatingGuides = await getCollection('constructionEstimatingGuides');
  const landscapeContractorEstimatingGuides = await getCollection('landscapeContractorEstimatingGuides');
  const homeAssistantMatterThreadGuides = await getCollection('homeAssistantMatterThreadGuides');
  const genealogyBrickWallGuides = await getCollection('genealogyBrickWallGuides');
  const powerAutomateGuides = await getCollection('powerAutomateGuides');
  const pickleballDoublesGuides = await getCollection('pickleballDoublesGuides');
  const youthSoccerCoachingGuides = await getCollection('youthSoccerCoachingGuides');
  const hamRadioTechnicianExamGuides = await getCollection('hamRadioTechnicianExamGuides');
  const epa608UniversalExamGuides = await getCollection('epa608UniversalExamGuides');
  const firstYearHomeownerGuides = await getCollection('firstYearHomeownerGuides');
  const propertyManagerAiGuides = await getCollection('propertyManagerAiGuides');
  const maintenancePlanningGuides = await getCollection('maintenancePlanningGuides');
  const aquariumTroubleshootingGuides = await getCollection('aquariumTroubleshootingGuides');
  const homeInspectionReportingGuides = await getCollection('homeInspectionReportingGuides');
  const paths = [
    '/', '/books/', '/authors/', '/guides/', '/dog-guides/', '/5g-home-internet/', '/local-business-ai/', '/ai-scam-defence/', '/reactive-dog-walking/', '/dog-enrichment/', '/cooperative-care/', '/rescue-dog-first-90-days/', '/heat-pump-owners/', '/local-ai/', '/beginner-telescope-observing/', '/deep-sky-astrophotography/', '/construction-estimating/', '/landscape-contractor-estimating/', '/home-assistant-matter-thread/', '/genealogy-brick-walls/', '/power-automate/', '/pickleball-doubles/', '/youth-soccer-coaching/', '/ham-radio-technician-exam/', '/epa-608-universal-exam/', '/first-year-homeowner/', '/property-manager-ai/', '/maintenance-planning/', '/aquarium-troubleshooting/', '/home-inspection-reporting/', '/about/', '/contact/', '/privacy/',
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
    ...localAiGuides.map(({ id }) => '/local-ai/' + id + '/'),
    ...beginnerTelescopeObservingGuides.map(({ id }) => '/beginner-telescope-observing/' + id + '/'),
    ...deepSkyAstrophotographyGuides.map(({ id }) => '/deep-sky-astrophotography/' + id + '/'),
    ...constructionEstimatingGuides.map(({ id }) => '/construction-estimating/' + id + '/'),
    ...landscapeContractorEstimatingGuides.map(({ id }) => '/landscape-contractor-estimating/' + id + '/'),
    ...homeAssistantMatterThreadGuides.map(({ id }) => '/home-assistant-matter-thread/' + id + '/'),
    ...genealogyBrickWallGuides.map(({ id }) => '/genealogy-brick-walls/' + id + '/'),
    ...powerAutomateGuides.map(({ id }) => '/power-automate/' + id + '/'),
    ...pickleballDoublesGuides.map(({ id }) => '/pickleball-doubles/' + id + '/'),
    ...youthSoccerCoachingGuides.map(({ id }) => '/youth-soccer-coaching/' + id + '/'),
    ...hamRadioTechnicianExamGuides.map(({ id }) => '/ham-radio-technician-exam/' + id + '/'),
    ...epa608UniversalExamGuides.map(({ id }) => '/epa-608-universal-exam/' + id + '/'),
    ...firstYearHomeownerGuides.map(({ id }) => '/first-year-homeowner/' + id + '/'),
    ...propertyManagerAiGuides.map(({ id }) => '/property-manager-ai/' + id + '/'),
    ...maintenancePlanningGuides.map(({ id }) => '/maintenance-planning/' + id + '/'),
    ...aquariumTroubleshootingGuides.map(({ id }) => '/aquarium-troubleshooting/' + id + '/'),
    ...homeInspectionReportingGuides.map(({ id }) => '/home-inspection-reporting/' + id + '/')
  ];
  const body = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + paths.map(path => '\n  <url><loc>https://mercerlanepress.com' + path + '</loc></url>').join('') + '\n</urlset>\n';
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
