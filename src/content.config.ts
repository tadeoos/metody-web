import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Each project ("realizacja") is a folder in src/content/realizacje/<slug>/
// holding an index.md (texts) and its photos.
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
      // Credits, shown as small lines under the description.
      projekt: z.string().optional(),
      zdjecia: z.string().optional(),
      // Optional photo for the home page tile; defaults to the cover.
      tile: image().optional(),
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
