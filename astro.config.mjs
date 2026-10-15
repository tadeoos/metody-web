// @ts-check
import { defineConfig } from 'astro/config';

// Defaults are for the production domain. A preview build (e.g. on
// <user>.github.io/<repo>/ before the domain is connected) overrides them
// with the SITE_URL and BASE_PATH environment variables.
export default defineConfig({
  site: process.env.SITE_URL || 'https://pracowniametody.pl',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
  image: {
    // Responsive images: Astro generates srcset variants at build time.
    layout: 'constrained',
  },
});
