// import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/kit/vite";
import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import adapter from "svelte-adapter-deno";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md"],

  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],

  vitePlugin: {
    inspector: true,
  },

  kit: {
    adapter: adapter({
      out: "build",
      precompress: false,
      envPrefix: "PROD_",
      deps: "../deps.ts", // (relative to adapter-deno package)
    }),
  },
};

export default config;
