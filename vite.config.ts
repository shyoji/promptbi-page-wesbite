import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
  },
  build: {
    target: 'es2015',
    minify: 'esbuild',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'supabase-vendor': ['@supabase/supabase-js'],
          'lucide-vendor': ['lucide-react'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    commonjsOptions: {
      include: [/lucide-react/, /node_modules/],
      transformMixedEsModules: true,
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', '@supabase/supabase-js', 'lucide-react'],
    esbuildOptions: {
      target: 'es2015',
    },
  },
  resolve: {
    dedupe: ['react', 'react-dom', 'lucide-react'],
  },
});
