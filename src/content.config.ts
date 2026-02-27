import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    programme: z.string(),
    role: z.string(),
    status: z.enum(['active', 'completed', 'planned']),
    summary: z.string(),
    externalUrl: z.string().url().optional(),
    tags: z.array(z.string()),
    order: z.number(),
  }),
});

const partners = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/partners' }),
  schema: z.object({
    title: z.string(),
    public: z.boolean(),
    status: z.enum(['exploring', 'pilot', 'operational']),
    formats: z.array(z.string()),
    focusTags: z.array(z.string()),
    summary: z.string(),
    order: z.number(),
  }),
});

export const collections = { projects, partners };
