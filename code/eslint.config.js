import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginVitest from "eslint-plugin-vitest";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Base JS config
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    extends: [js.configs.recommended],
    plugins: {
      react: pluginReact,
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
    },
  },

  // Vitest config for test files
  {
    files: ["**/*.test.{js,jsx,ts,tsx}"],
    plugins: {
      vitest: pluginVitest,
    },
    rules: {
      ...pluginVitest.configs.recommended.rules,
    },
    languageOptions: {
      globals: {
        ...globals.node,
        ...pluginVitest.environments.env.globals,
      },
    },
  },
]);
