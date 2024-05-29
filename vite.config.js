import { defineConfig } from "vite";

export default defineConfig({
  plugins: [],
  build: {
    rollupOptions: {
      // assetsInclude: ["**/*.svg"],
      input: {
        index: "index.html",
      },
    },
  },
});
