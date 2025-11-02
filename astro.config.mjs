import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://realmind.solutions', // Update with your actual domain
  integrations: [
    react(), // Enable React for interactive components (islands)
    tailwind({
      // Disable Astro's default Tailwind injection, use existing config
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
  output: 'static', // Static Site Generation
  vite: {
    envPrefix: 'VITE_', // Keep compatibility with existing .env variables
  },
});
