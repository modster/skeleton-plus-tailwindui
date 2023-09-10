import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/kit/vite";
import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
// import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */

const config = {
  extensions: [".svelte", ".md"],

  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],

  vitePlugin: {
    inspector: true,
  },

  kit: {
    adapter: adapter()
  },
};

export default config;
