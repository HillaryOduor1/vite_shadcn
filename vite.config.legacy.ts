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

})*
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import path from "path"
import babel from "vite-plugin-babel"

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    babel({
      filter: /\.(jsx?|tsx?)$/, // what files Babel runs on
      babelConfig: {
        presets: [
          // 👇 transpile TypeScript → plain JS
          ["@babel/preset-typescript", { isTSX: true, allExtensions: true }],
          [
            "@babel/preset-env",
            {
              targets: "defaults, IE 11",
              useBuiltIns: "usage",
              corejs: 3,
              modules: false,
            },
          ],
        ],
      },
    }),
  ],
  build: {
    outDir: "dist/legacy",
    target: "es2015",
    manifest: true,
    minify: "terser",
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  base: "/",
})*/
// vite.config.legacy.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import babel from "vite-plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import path from "path"

export default defineConfig({
  build: {
    target: ["es2015"], // keep consistent
    outDir: "dist/legacy",
    manifest: true, // so loader can map hashed names
    rollupOptions: {
      input: "index.html",
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    babel({
      filter: /\.([jt]sx?)$/, // apply only to JS/TS/TSX/JSX
      babelConfig: {
        presets: [
          [
            "@babel/preset-env",
            {
              targets: "> 0.25%, not dead", // browsers you want for legacy
              useBuiltIns: "usage",
              corejs: 3,
            },
          ],
          "@babel/preset-typescript",
          [
            "@babel/preset-react",
            {
              runtime: "automatic",
            },
          ],
        ],
        plugins: [
          [
            "@babel/plugin-transform-runtime",
            {
              corejs: false, // polyfills handled by preset-env
              helpers: true,
              regenerator: true,
            },
          ],
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  base: "/assets/legacy/",
});

