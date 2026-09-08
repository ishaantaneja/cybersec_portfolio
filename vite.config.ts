import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages project site: https://ishaantaneja.github.io/cybersec_portfolio/
// For a user site (ishaantaneja.github.io) or custom domain, set base to '/'
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/cybersec_portfolio/',
})
