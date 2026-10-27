import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base を './' にしているため、サーバーのルート直下でもサブディレクトリでも動作します。
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    target: 'es2020',
    sourcemap: false,
  },
});
