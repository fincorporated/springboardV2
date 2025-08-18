import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { dirname, resolve } from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        walkthrough: resolve(__dirname, 'walkthrough.html'),
      },
    },
  },
})
