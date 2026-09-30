// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Reemplaza 'valeria-interactive' por el nombre exacto de tu repositorio en GitHub
export default defineConfig({
  plugins: [react()],
  base: '/valeria-interactive/', 
})