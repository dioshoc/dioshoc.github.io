import { defineConfig } from 'vite';
import * as path from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },

  resolve: {
    alias: [
      { find: '@app', replacement: path.resolve(__dirname, 'src/app') },
      { find: '@shared', replacement: path.resolve(__dirname, 'src/shared') },
      {
        find: '@assets',
        replacement: path.resolve(__dirname, 'src/shared/assets'),
      },
      {
        find: '@entities',
        replacement: path.resolve(__dirname, 'src/entities'),
      },
    ],
  },
});
