import type { BookSeoEntry } from './book-seo';

// First-party Search Console refinements. These overrides keep broad book-level
// intent separate from the exact long-tail queries already being won by guides.
export const bookSeoSearchConsoleOverrides: Partial<Record<string, BookSeoEntry>> = {
  'the-5g-home-internet-troubleshooting-manual': {
    seoTitle: '5G Home Internet Troubleshooting Guide',
    metaDescription: 'A practical 5G home internet troubleshooting guide for disconnects, slow speeds, gateway placement, weak signal, Wi-Fi and latency problems.',
    heading: '5G home internet troubleshooting for recurring connection problems',
    intro: '5G home internet problems can come from the mobile network, gateway placement, weak signal or local Wi-Fi. This guide brings those causes into one troubleshooting system so you can isolate the fault before changing several things at once.',
    questions: [
      'How do I troubleshoot 5G home internet problems systematically?',
      'How can I tell whether the problem is the 5G network, gateway placement or Wi-Fi?',
      'What should I check when 5G home internet disconnects or slows down?'
    ],
    keywords: [
      '5G home internet troubleshooting',
      '5G internet problems',
      '5G home internet guide',
      '5G gateway troubleshooting',
      '5G internet connection problems'
    ]
  }
};
