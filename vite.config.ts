import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        // javascriptEnabled: true,
<<<<<<< HEAD
        additionalData: `@import "@/assets/global.less";`,
=======
        // additionalData: `@import "@/assets/global.less"`,
>>>>>>> 491e43be5e3aae3bcc439ccea6fe0451e6bba70e
        javascriptEnabled: true,
      },
    },
  }
})
