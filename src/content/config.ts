import { defineCollection, z } from 'astro:content';

export const collections = {
  blog: defineCollection({
    schema: z
      .object({
        title: z.string().max(100),
        date: z.date(),
        categories: z.array(z.enum(['one', 'two', 'three'])).default([]),
        summary: z.string(),
      })
      .strict(),
  }),
};
