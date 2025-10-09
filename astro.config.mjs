// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://bugged-code.github.io",
  base: "/campus",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});