import { sveltekit } from '@sveltejs/kit/vite';

/**@type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  resolve: {
    alias: {
      "./runtimeConfig": "./runtimeConfig.browser"
    }
  },
  build: {
    rollupOptions: {
      external: ['+page.server']
    }
  }
};

export default config;