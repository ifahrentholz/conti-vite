const { resolve } = require('path')
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    assetsDir: "resources",
    rollupOptions: {
      input: {
          element1: resolve(__dirname, 'src/my-element.ts'),
          element2: resolve(__dirname, 'src/my-second-element.ts')
      }
    }
  }
})
