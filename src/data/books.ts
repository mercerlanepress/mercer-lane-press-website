export interface Book {
  slug: string; title: string; subtitle: string; author: string; authorSlug: string;
  publisher: string; description: string; cover: string; coverReady: boolean;
  purchaseUrl: string; intendedReader?: string; problems?: string[]; topics?: string[];
  outcomes?: string[]; themes?: string[]; hubSlug?: string; hubLabel?: string;
}

export const books: Book[] = [{
  slug: 'the-5g-home-internet-troubleshooting-manual',
  title: 'The 5G Home Internet Troubleshooting Manual',
  subtitle: 'A Provider-Neutral System for Diagnosing Weak Signal, Unstable Speeds, Wi-Fi Dead Zones, Latency, and Gateway Problems',
  author: 'Mercer Lane', authorSlug: 'mercer-lane',
  publisher: 'Mercer Lane Press',
  description: 'A practical, provider-neutral manual for finding where a 5G home internet problem begins, testing one variable at a time, and choosing the next useful step.',
  cover: '/images/books/5G_Home_Internet_Front_Cover.jpg',
  coverReady: true,
  purchaseUrl: 'https://www.amazon.com/dp/B0HK2743CQ',
  hubSlug: '5g-home-internet',
  hubLabel: '5G home internet troubleshooting guides'
},{
  slug: 'get-your-local-business-recommended-by-ai',
  title: 'Get Your Local Business Recommended by AI',
  subtitle: "The 30-Day Owner's System for Visibility in ChatGPT, Google AI, Gemini, and Perplexity - for Local Service Businesses",
  author: 'Mercer Lane', authorSlug: 'mercer-lane',
  publisher: 'Mercer Lane Press',
  description: 'A practical 30-day system for local service businesses to improve the public evidence that AI and search systems can discover, understand, corroborate, and evaluate.',
  cover: '/images/books/Get_Your_Local_Business_Recommended_by_AI_front_cover.jpg',
  coverReady: true,
  purchaseUrl: 'https://www.amazon.com/dp/B0HJSRBQYF',
  intendedReader: 'Owners and marketing leads at local service businesses who want a practical way to improve and measure AI-assisted visibility without relying on hype or guaranteed-ranking claims.',
  problems: [
    'Conflicting business facts across websites, profiles, and directories',
    'Service and location pages that do not clearly explain fit',
    'Unclear evidence about why a business is or is not surfaced in AI answers'
  ],
  topics: [
    'Business identity and canonical facts',
    'Service and location clarity',
    'Reviews and proof',
    'Third-party corroboration',
    'Crawlability and structured data',
    'Repeatable AI visibility testing'
  ],
  outcomes: [
    'A cleaner, more consistent public business footprint',
    'Stronger service pages built around real customer decisions',
    'A defensible testing and measurement routine'
  ],
  themes: ['identity','relevance','proof','corroboration','access and freshness'],
  hubSlug: 'local-business-ai',
  hubLabel: 'Local business AI visibility guides'
}];

export const featuredBook = books[0];
