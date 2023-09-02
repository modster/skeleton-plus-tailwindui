import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ".svx"],
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	preprocess: [
		vitePreprocess(),
		// tell svelte to handle mdsvex files
		mdsvex(),
	],
	vitePlugin: {
		inspector: true,
	},
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		adapter: adapter()
	}
};
export default config;