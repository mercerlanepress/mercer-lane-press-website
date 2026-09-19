export interface Author { slug: string; name: string; bio: string; sameAs?: string }
export const authors: Author[] = [
  { slug: 'mercer-lane', name: 'Mercer Lane', bio: 'Mercer Lane is the author name used for practical Mercer Lane Press guides where appropriate. The guides emphasize clear systems, careful observation, and useful next steps.' },
  { slug: 'rebecca-tolland', name: 'Rebecca Tolland', bio: 'Rebecca Tolland is the author of AI Scam Defence for Families, published by Mercer Lane Press.', sameAs: 'https://www.amazon.com/s/ref=dp_byline_sr_book_1?ie=UTF8&field-author=Rebecca+Tolland&text=Rebecca+Tolland&sort=relevancerank&search-alias=books' }
];
