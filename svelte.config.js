import {adapter} from '@sveltejs/adapter-auto';
import preprocess from'svelte-preprocss';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter({
			autoDeploy: true,
			FQDN: 'https://main.d3nseqw8ub68d6.amplifyapp.com/',
			stackName:'470-backend'

		})

	}
};

export default config;
   