import { sveltekit } from '@sveltejs/kit/vite';

/**@type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'./runtimeConfig': './runtimeConfig.brower'
		}
	}
	build: {sourcemap: true}
};

export default config;
