import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/tmanzhe.github.io/', // Note the leading slash
  plugins: [react()],
  assetsInclude: ['**/*.JPG'],
});
