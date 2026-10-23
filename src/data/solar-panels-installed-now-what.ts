import type { Book } from './books';

export const solarPanelsInstalledNowWhat: Book = {
  slug: 'solar-panels-installed-now-what',
  title: 'Solar Panels Installed — Now What?',
  subtitle: 'The UK Homeowner’s Guide to Understanding Your Solar System, Export Payments, Electricity Bills and Everyday Performance',
  author: 'Gareth Fenwick',
  authorSlug: 'gareth-fenwick',
  publisher: 'Mercer Lane Press',
  description: 'A practical UK homeowner’s operating guide for understanding an installed domestic solar PV system. Organize handover documents, distinguish generation from import and export readings, follow up export-payment registration, check electricity bills, compare performance fairly, and report possible faults with useful evidence. Includes a 30-day owner system, worked examples, checklists, and record-keeping pages.',
  cover: '/images/books/solar-panels-installed-now-what-front-cover.jpg',
  // Kept false until the owner uploads the exact supplied cover to the branch.
  // Do not set true while the image file is missing: the site verifies every rendered image.
  coverReady: false,
  purchaseUrl: 'https://www.amazon.com/dp/B0HMS4KNVQ',
  intendedReader: 'UK homeowners who have recently had grid-connected rooftop solar panels installed, or who have acquired a home with existing panels and want to understand the records, metering, payments, bills and everyday performance without attempting electrical work.',
  problems: [
    'The installer has left, but the owner is unsure which documents, equipment details, warranties and network records should be retained.',
    'An inverter app reports generation, yet the electricity bill and smart meter appear to show different figures.',
    'The system may be exporting electricity, but the status of the export MPAN, SEG application or first payment is unclear.',
    'A high bill, a disconnected app or unexpectedly low output raises concerns without establishing the cause.',
    'Old Feed-in Tariff arrangements or a property purchase make ownership and export rights harder to untangle.'
  ],
  topics: [
    'A safe first-hour checklist and 30-day solar owner system',
    'Solar equipment, handover certificates, commissioning and DNO records',
    'Understanding kW, kWh, kWp and measurement boundaries',
    'Matching solar-app figures with generation, import and export meter readings',
    'Great Britain’s Smart Export Guarantee, export MPANs and historic FIT arrangements',
    'Bill checking, tariff comparison, self-use and export decisions',
    'Seasonal performance comparisons and symptom-first troubleshooting',
    'Owner records, template messages, monthly reviews and a source directory'
  ],
  outcomes: [
    'Create an organized owner file and identify missing installation or export documentation.',
    'Recognize which reading answers which question and record matched meter periods.',
    'Check the key arithmetic of import bills and export statements without confusing generation with savings.',
    'Ask an installer or electricity supplier a precise, evidence-supported question when something appears wrong.',
    'Develop a monthly and annual monitoring routine that respects the limits of owner-level work.'
  ],
  themes: ['UK solar PV owners','solar export payments','Smart Export Guarantee','export MPAN','solar electricity bill','solar generation monitoring','solar handover','Feed-in Tariffs','solar troubleshooting'],
  hubSlug: 'solar-panel-owners',
  hubLabel: 'Solar panel owner guides'
};
