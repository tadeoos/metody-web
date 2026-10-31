import { defineMiddleware } from 'astro:middleware';

// Polish typesetting: one-letter words (a, i, o, u, w, z) must not hang at the
// end of a line, and a dash must not start one. Every page's text gets
// non-breaking spaces in those places, so the content files can stay plain.
const NBSP = ' ';
const oneLetter = /(?<=^|[\s („"])([aiouwzAIOUWZ])\s+(?=\S)/g;
const dash = /\s+(–|—)(?=\s)/g;

const fixText = (text: string) => text.replace(oneLetter, `$1${NBSP}`).replace(dash, `${NBSP}$1`);

// Only text between tags is touched; attributes, scripts and styles are left alone.
const fixHtml = (html: string) => {
  let skip = false;
  return html
    .split(/(<[^>]*>)/)
    .map((part) => {
      if (part.startsWith('<')) {
        if (/^<(script|style)\b/i.test(part)) skip = true;
        else if (/^<\/(script|style)>/i.test(part)) skip = false;
        return part;
      }
      return skip ? part : fixText(part);
    })
    .join('');
};

export const onRequest = defineMiddleware(async (_context, next) => {
  const response = await next();
  if (!response.headers.get('content-type')?.includes('text/html')) return response;
  const html = await response.text();
  return new Response(fixHtml(html), response);
});
