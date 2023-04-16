import { defineConfig } from 'vitest/config';
import { ConfigEnv, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import GithubActionsReporter from 'vitest-github-actions-reporter';

// https://vitejs.dev/config/
// https://vitest.dev/config/
export default defineConfig((configEnv: ConfigEnv) => {
  const { mode } = configEnv;
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: env.VITE_BASE_PATH,
    plugins: [react()],
    resolve: {
      alias: {
        '@app': path.resolve(__dirname, 'src'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@layout': path.resolve(__dirname, 'src/layout'),
        '@mock': path.resolve(__dirname, 'src/mock'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@shared': path.resolve(__dirname, 'src/shared'),
      },
    },
    test: {
      coverage: {
        // Coverage by default is disabled here and enabled by cli flag
        // All default values behind can be overwritten by cli flags (--coverage.[key]=[value])
        // @see https://vitest.dev/guide/coverage.html
        all: true,
        provider: "istanbul",
        reporter: "html",
        exclude: ["*.cjs", "src/main.tsx"]
      },
      environment: 'jsdom',
      reporters: env.GITHUB_ACTIONS
        ? new GithubActionsReporter()
        : 'default'
    },
  };
});
