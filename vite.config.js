import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx',   // 👈 allow JSX in .js files
    include: /src\/.*\.js?$/,
    exclude: [],
  },
   resolve: {
    extensions: ['.js', '.jsx'],  // 👈 so imports work without extension mismatch
  },
})
