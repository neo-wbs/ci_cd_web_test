import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
    base: command === 'build' ? '/ci_cd_web_test/' : '/',
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      minify: 'esbuild',
      sourcemap: false,
      rollupOptions: {
        input: 'index.html',   // ← Vite liest index.html und findet app.js automatisch
        output: {
          assetFileNames: 'assets/[name]-[hash][extname]',
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js'
        }
      }
    }
  }));