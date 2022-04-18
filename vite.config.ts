import { defineConfig } from 'vite'
import { ViteAliases } from 'vite-aliases'
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
        svelte({ preprocess: require('svelte-preprocess') }),
        ViteAliases()
    ],
  publicDir: './assets/',
  build: {
    outDir: './public/'
  },
  optimizeDeps: { exclude: ["@roxi/routify", "@urql/svelte"] },
})
