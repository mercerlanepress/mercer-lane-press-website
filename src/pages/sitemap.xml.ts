import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { books } from '../data/books';
import { authors } from '../data/authors';

export const GET: APIRoute = async () => {
  const guides = await getCollection('guides');
  const paths = ['/', '/books/', '/authors/', '/5g-home-internet/', '/about/', '/privacy/', ...books.map(({ slug }) => `/books/${slug}/`), ...authors.map(({ slug }) => `/authors/${slug}/`), ...guides.map(({ id }) => `/5g-home-internet/${id}/`)];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(path => `\n  <url><loc>https://mercerlanepress.com${path}</loc></url>`).join('')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
