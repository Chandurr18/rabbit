import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    tailwindcss(),
  ],

  // 👇 ADD THIS
  server: {
    host: true,          // exposes your dev server to the local network
    port: 5173,          // optional: force a specific port
    strictPort: true,    // optional: avoid random ports
  },
})