import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Cambia 'Los-Viajeros-de-Arcadia' por el nombre exacto de tu repositorio en GitHub.
// Si usas dominio personalizado, cambia base a '/'.
export default defineConfig({
  plugins: [react()],
  base: '/Los-Viajeros-de-Arcadia/',
})
