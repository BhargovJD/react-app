import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Online github repo name
  base: 'react-app', 
  plugins: [react()],
})
