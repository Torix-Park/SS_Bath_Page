import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@components', replacement: '/src/components' },
      { find: '@hooks', replacement: '/src/hooks' },
      { find: '@routes', replacement: '/src/routes' },
      { find: '@stories', replacement: '/src/stories' },
      { find: '@styles', replacement: '/src/styles' },
    ],
  },
  server: {
    proxy: {
      api: 'url',
    },
  },
});
