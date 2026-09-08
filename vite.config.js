import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { ajnamApiPlugin } from './server/middleware.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), ajnamApiPlugin()],
})

