import {adapter} from '@sveltejs/adapter-auto';
import preprocess from'svelte-preprocss';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter({
			autoDeploy: true,
		})

	}
};

export default config;
   