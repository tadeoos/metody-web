import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { url } from '../data/site';

export const GET: APIRoute = async ({ site }) => {
  const projects = await getCollection('realizacje');
  const paths = ['/', ...projects.map((p) => `/realizacje/${p.id}/`)];
  const urls = paths.map((p) => `  <url><loc>${new URL(url(p), site)}</loc></url>`).join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
