import globals from "globals";
import pluginJs from "@eslint/js";



/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: { globals: globals.node }},
  stylistic.configs.recommended,
  pluginJs.configs.recommended,
];