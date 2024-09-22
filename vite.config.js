import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/tmanzhe.github.io/' : '/',
  plugins: [react()],
  assetsInclude: ['**/*.JPG'],
});
