import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},

	preprocess: preprocess({
		scss: {
			// prepend all src/styles SCSS files to each component
			prependData: `@use 'src/styles' as *;`
		}
	}),
};

export default config;
