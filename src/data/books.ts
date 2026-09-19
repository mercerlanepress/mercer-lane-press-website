export const books = [{
  slug: 'the-5g-home-internet-troubleshooting-manual',
  title: 'The 5G Home Internet Troubleshooting Manual',
  subtitle: 'A Provider-Neutral System for Diagnosing Weak Signal, Unstable Speeds, Wi-Fi Dead Zones, Latency, and Gateway Problems',
  author: 'Mercer Lane', authorSlug: 'mercer-lane',
  publisher: 'Mercer Lane Press',
  description: 'A practical, provider-neutral manual for finding where a 5G home internet problem begins, testing one variable at a time, and choosing the next useful step.',
  cover: '/images/books/5g-home-internet-troubleshooting-manual-cover.webp',
  // OWNER: paste the complete Amazon.com product URL between the quotes when available.
  purchaseUrl: ''
}] as const;

export const featuredBook = books[0];
