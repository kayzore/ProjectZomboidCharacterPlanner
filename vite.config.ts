import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

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
      '@assets': path.resolve(__dirname, 'src/assets'),
		},
  },
  test: {
    coverage: {
      // Coverage by default is disabled here and enabled by cli flag
      // All default values behind can be overwritten by cli flags (--coverage.[key]=[value])
      all: true,
      provider: "istanbul",
      reporter: "html",
      exclude: ["*.cjs", "src/main.tsx"]
    },
    environment: 'jsdom',
  },
});
