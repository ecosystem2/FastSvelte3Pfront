import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()]
},
  {
    server: {
      proxy: {
        '/': 'http://localhost:8000',
        '/': 'https://open3p.ecosystem2.co.uk',
        '/': 'https://open3p.rovolis.co.uk',
      },
    },
  });