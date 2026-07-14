import path from 'node:path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const envRoot = path.resolve(process.cwd(), '..');
  const env = loadEnv(mode, envRoot, '');
  const base = env.VITE_BASE_PATH || '/';

  return {
    envDir: envRoot,
    base,
    plugins: [react()],
    server: {
      port: 5173,
      proxy: {
        '/api': {
          target: env.VITE_API_URL || 'http://localhost:4000',
          changeOrigin: true,
        },
      },
    },
    build: {
      sourcemap: true,
    },
  };
});
