import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['bootstrap']
        }
      }
    }
  },
  server: {
    port: 3000,
  },
  preview: {
    allowedHosts: ['healthcare-appointment-2.onrender.com'],
  },
})
