import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import { initFlowbite } from 'flowbite';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()]
});