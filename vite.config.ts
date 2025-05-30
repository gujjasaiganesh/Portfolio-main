import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // 
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    assetsDir: '.',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          return `[name][extname]`;
        },
      },
    },
  },
});

