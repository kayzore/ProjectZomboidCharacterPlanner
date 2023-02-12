import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
	resolve: {
    alias: {
			'@': path.resolve(__dirname, 'src'),
			'@translation': path.resolve(__dirname, 'src/Translation'),
			'@core': path.resolve(__dirname, 'src/Core'),
			'@mock': path.resolve(__dirname, 'src/Mock'),
			'@shared': path.resolve(__dirname, 'src/Shared'),
			'@trait': path.resolve(__dirname, 'src/Trait')
		}
  },
});
