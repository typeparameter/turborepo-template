import { defineConfig } from "oxlint";

export default defineConfig({
  plugins: ["typescript", "oxc"],
  categories: {
    correctness: "error",
    suspicious: "error",
    pedantic: "warn",
  },
  options: {
    typeAware: true,
  },
});
