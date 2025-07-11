import { resolve } from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "@demono/info",
      fileName: (format) => `index.${format}.js`,
      formats: ["es", "umd"],
    },
    assetsDir: ".",
    outDir: "dist",
  },
});
