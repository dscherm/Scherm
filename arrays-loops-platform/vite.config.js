import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Scherm/arrays-loops-platform/',
  server: {
    port: 3001
  }
})
