/*import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  //plugins: [react()],
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
*
import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import legacy from "@vitejs/plugin-legacy"
import path from "path"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    legacy({
      targets: "defaults and fully supports es6-module, maintained node versions, >0%, not dead, not op_mini all, ios_saf >= 8, safari >= 8, chrome >= 49, android >= 4.4, edge >= 12, firefox >= 45, opera >= 36, samsung >= 4",
      // Adds polyfills only when needed
      renderLegacyChunks: true,
      modernPolyfills: true,
    }),
  ],
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true
  },
  // eslint-disable-next-line no-constant-binary-expression
  base: process.env.VITE_BASE_PATH || "./" || "/vite_shadcn"  // VERY important for Vercel, keeps paths correct

})*/

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import path from "path"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "dist/modern",
    target: "esnext", // modern ES6+
    manifest: true, // ✅ generate manifest
    rollupOptions: {
      input: "./index.html",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  base: "/modern/",
})

