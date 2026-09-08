import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Lets the dev server accept requests coming through a Cloudflare quick
    // tunnel, whose hostname is a random *.trycloudflare.com subdomain each
    // time it's started - Vite blocks unrecognized Host headers by default.
   allowedHosts: ['trackmarg-interface.onrender.com'],
  },
})
