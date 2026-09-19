export interface Book {
  slug: string; title: string; subtitle: string; author: string; authorSlug: string;
  publisher: string; description: string; cover: string; coverReady: boolean;
  purchaseUrl: string; intendedReader?: string; problems?: string[]; topics?: string[];
  outcomes?: string[]; themes?: string[];
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
  purchaseUrl: 'https://www.amazon.com/dp/B0HK2743CQ'
}];

export const featuredBook = books[0];
