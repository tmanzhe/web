import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/tmanzhe.web/', // Keep the leading slash
  plugins: [react()],
  assetsInclude: ['**/*.JPG', '**/*.jpg'], // Include both uppercase and lowercase

});
