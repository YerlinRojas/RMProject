import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import { initFlowbite } from 'flowbite';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()]
});