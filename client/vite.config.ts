import { copyFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

function normalizeBase(value: string): string {
  const withLeadingSlash = value.startsWith('/') ? value : `/${value}`;
  return withLeadingSlash.endsWith('/') ? withLeadingSlash : `${withLeadingSlash}/`;
}

function githubPagesFallback(): Plugin {
  return {
    name: 'github-pages-spa-fallback',
    apply: 'build',
    async closeBundle() {
      const outputDirectory = path.resolve(process.cwd(), 'dist');
      await copyFile(path.join(outputDirectory, 'index.html'), path.join(outputDirectory, '404.html'));
      await writeFile(path.join(outputDirectory, '.nojekyll'), '', 'utf8');
    },
  };
}

export default defineConfig(({ mode }) => {
  const projectRoot = path.resolve(process.cwd(), '..');
  const env = loadEnv(mode, projectRoot, '');
  const base = normalizeBase(env.VITE_BASE_PATH || (mode === 'production' ? '/diamondsalonocala/' : '/'));

  return {
    envDir: projectRoot,
    base,
    plugins: [react(), githubPagesFallback()],
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
      outDir: 'dist',
      sourcemap: false,
      assetsInlineLimit: 4096,
    },
  };
});
