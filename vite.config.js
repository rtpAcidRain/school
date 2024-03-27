import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";

export default {
  build: {
    cssMinify: false,
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src/partials"),
    }),
  ],
};
