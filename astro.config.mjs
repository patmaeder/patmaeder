import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import alpinejs from '@astrojs/alpinejs';
import mdx from '@astrojs/mdx';
import sectionize from "@hbsnow/rehype-sectionize";
import { addIntersectionObserverToSections } from "./src/plugins/addIntersectionObserverToSections.ts";
import { hideIntroductionHeadline } from "./src/plugins/hideIntroductionHeadline.ts";

// https://astro.build/config
export default defineConfig({
  site: 'https://patmaeder.com',
  integrations: [tailwind(), sitemap(), alpinejs({ entrypoint: '/src/alpine' }), mdx()],
  markdown: {
    rehypePlugins: [sectionize, addIntersectionObserverToSections, hideIntroductionHeadline],
  },
});