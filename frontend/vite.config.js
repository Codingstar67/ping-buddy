import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/v1/api": {
        target: "http://localhost:8080", 
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/v1\/api/, ""),
        secure: false, 
        ws: true,
      },
    },
  },
  build: {
    outDir: "dist", 
  },
});
