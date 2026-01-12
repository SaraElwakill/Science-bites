import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/Science-bites/',
  root: 'public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  plugins: [react()],
})
