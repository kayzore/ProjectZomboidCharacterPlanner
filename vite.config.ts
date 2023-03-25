import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
// https://vitest.dev/config/
export default defineConfig({
  plugins: [react()],
	resolve: {
    alias: {
			'@app': path.resolve(__dirname, 'src'),
			'@shared': path.resolve(__dirname, 'src/shared'),
			'@pages': path.resolve(__dirname, 'src/pages'),
      '@layout': path.resolve(__dirname, 'src/layout'),
      '@appTypes': path.resolve(__dirname, 'src/types'),
      '@assets': path.resolve(__dirname, 'src/assets')
		}
  },
  test: {
    environment: 'jsdom',
  }
});
