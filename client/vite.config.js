import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  server: {
    proxy: {
      '/api': 'http://localhost:3000'
    },
    port: 3000,
  },
  preview: {
    allowedHosts: ['healthcare-appointment-2.onrender.com'],
  },
})
