import { defineCollection, z } from "astro:content";

const posts = defineCollection({
    type: "content",
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        tags: z.string().array().optional(),
        heroImage: image().refine((img) => img.width >= 1080, {
            message: "Cover image must be at least 1080 pixels wide!",
        }),
        pubDate: z.coerce.date(),
        modDate: z.coerce.date().optional(),
    }),
});

export const collections = { posts };
