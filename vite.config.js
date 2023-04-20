import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import express from 'express';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    middlewareMode: true,
    setupMiddleware: (app) => {
      app.use(express.json());
    },
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Replace with your MongoDB URL
        changeOrigin: true,
      },
    },
  },
})
