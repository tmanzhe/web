import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: 'tmanzhe.github.io',
  plugins: [react()],
  assetsInclude: ['**/*.JPG'],
});
