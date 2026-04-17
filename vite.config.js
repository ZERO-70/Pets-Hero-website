import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  build: {
    // Improve Core Web Vitals via granular chunk splitting
    // Each chunk gets a content hash — enables long-term browser caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Isolate large vendor libs so they cache independently
          'react-vendor': ['react', 'react-dom'],
          'motion-vendor': ['framer-motion'],
          'icons-vendor': ['lucide-react'],
          'scroll-vendor': ['react-scroll'],
        },
        // Content-hash in filenames for immutable caching
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
    // Warn on chunks > 500kb (helps identify performance regressions)
    chunkSizeWarningLimit: 500,
    // Generate source maps for debugging in production
    sourcemap: false,
  },
})

