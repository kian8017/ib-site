import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  buildOptions: {
    site: "https://indexbrain.org/"
  },
  projectRoot: ".",
  integrations: [tailwind({
    config: {
      path: './tailwind.config.cjs',
      applyBaseStyles: false,
    },
  })]
});
