import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Quiz-app/',
  publicDir: 'public',
  server: {
    port: 5174,
    host: true,
    open: true,
  },
});
