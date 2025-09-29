import { fileURLToPath, URL } from 'node:url';

import react from '@vitejs/plugin-react';
import wyw from '@wyw-in-js/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react(),
    wyw({
      include: ['**/*.{ts,tsx}'],
      babelOptions: {
        presets: ['@babel/preset-typescript', '@babel/preset-react'],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/widgets', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
      '@entities': fileURLToPath(new URL('./src/entities', import.meta.url)),
      '@shared': fileURLToPath(new URL('./src/shared', import.meta.url)),
      '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
    },
  },
  build: {
    target: 'esnext',
    cssCodeSplit: false,
  },
  define: {
    global: 'globalThis',
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./setupTests.ts'],
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    coverage: {
      reporter: ['text', 'lcov'],
      reportsDirectory: './coverage',
    },
  },
});
