import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/cvrec-studios",
  server: {
    host: '0.0.0.0',
  },
})
