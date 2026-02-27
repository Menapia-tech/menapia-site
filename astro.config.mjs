// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://menapia-tech.github.io',
  base: '/menapia-site',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
