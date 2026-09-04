import { defineConfig } from "oxfmt";

export default defineConfig({
  printWidth: 120,
  sortImports: {
    customGroups: [
      {
        groupName: "repo",
        elementNamePattern: ["@repo/**"],
      },
    ],
    newlinesBetween: true,
    groups: [["builtin", "external"], "repo", ["parent", "sibling", "index", "unknown"]],
  },
});
