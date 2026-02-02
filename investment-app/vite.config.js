import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Use '/' for Netlify, '/investment-app/' for local dev in monorepo
  base: process.env.NETLIFY ? '/' : '/investment-app/',
  server: {
    port: 3003,
    open: true
  }
})
