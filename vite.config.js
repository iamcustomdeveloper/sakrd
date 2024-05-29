import { defineConfig } from "vite";

export default defineConfig({
  base: "/sakrd/", // Set the base path for your project
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
