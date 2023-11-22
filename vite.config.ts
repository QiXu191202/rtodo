/*
 * @Author: Jason
 * @Date: 2023-11-10 09:24:00
 * @LastEditTime: 2023-11-10 17:57:23
 * @LastEditors: Jason
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
