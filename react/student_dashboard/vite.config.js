// vite.config.js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',   // or '0.0.0.0'
    port: 3001,          // your custom port
    strictPort: true     // fail if port is already used
  }
})

