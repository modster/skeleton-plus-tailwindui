import { purgeCss } from "vite-plugin-tailwind-purgecss";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit(), purgeCss()],
  server: { port: 8080, host: true },
  ssr: {
    noExternal: ["three"],
  },
});
