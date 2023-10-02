import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts(), vue()],
  build: {
    lib: {
      entry: path.resolve("/src/index.ts"),
      name: "moduleX",
      formats: ["es", "umd", "cjs", "iife"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        exports: "named",
        globals: {
          vue: "Vue",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
