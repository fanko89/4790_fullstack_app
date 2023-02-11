import adapter from '@sveltejs/adapter-auto';
import preprocess from'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter({
			autoDeploy: true,
			FQDN: 'https://main.d14fmke5xkadk4.amplifyapp.com',
			stackName:'470_backend'

		})

	}
};

export default config;
   