import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/js-pro13-reactjs-shopping-cart/',
  build: {
    outDir: './build'
  }
})
