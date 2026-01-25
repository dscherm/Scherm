import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/teacher-module-builder/',
  server: {
    port: 3002,
    open: true
  }
})
