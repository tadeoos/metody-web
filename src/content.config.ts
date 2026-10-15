import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Each project ("realizacja") is a folder in src/content/realizacje/<slug>/
// holding an index.md (texts + metryczka) and its photos.
const realizacje = defineCollection({
  loader: glob({
    pattern: '*/index.md',
    base: './src/content/realizacje',
    generateId: ({ entry }) => entry.split('/')[0],
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      // Lower numbers are shown first on the home page.
      order: z.number(),
      metryczka: z
        .object({
          projekt: z.string().optional(),
          wykonanie: z.string().optional(),
          inwestor: z.string().optional(),
          zdjecia: z.string().optional(),
          rok: z.union([z.string(), z.number()]).optional(),
          materialy: z.string().optional(),
          wymiary: z.string().optional(),
        })
        .default({}),
      // The first photo is the cover (home page tile + top of the project page).
      photos: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
            caption: z.string().optional(),
          }),
        )
        .min(1),
    }),
});

export const collections = { realizacje };
