import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";

/**@type {import('eslint').Linter.FlatConfig} */
export default [
  {
    languageOptions: {
      globals: { ...globals.jest, ...globals.node, ...globals.commonjs },
    },
  },
  {
    files: ["**/*.{js,mjs,jsx,vue}"],
    ignores: ["**/dist/**", "**/dist-ssr/**", "**/coverage/**"],
    rules: {
      semi: 2,
      quotes: ["error", "double"],
    },
  },
  js.configs.recommended,
  ...pluginVue.configs["flat/essential"],
];
