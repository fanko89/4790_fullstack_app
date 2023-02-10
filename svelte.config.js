import adapter from '@sveltejs/adapter-auto';
import preprocess from'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter({
			autoDeploy: true,
			FQDN: 'https://main.d1z0zvj4ln2924.amplifyapp.com',
			stackName:'470-backend'

		})

	}
};

export default config;
   