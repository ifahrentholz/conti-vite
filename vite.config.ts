const { resolve } = require('path')
import { defineConfig } from 'vite'
import { baseUrl } from "rollup-plugin-base-url";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: {
        element1: resolve(__dirname, "src/my-element.ts"),
        element2: resolve(__dirname, "src/my-second-element.ts"),
      },
    },
  },
});
