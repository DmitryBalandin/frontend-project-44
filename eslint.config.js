import globals from "globals";
import pluginJs from "@eslint/js";

// import globals from "globals";

// import path from "path";
// import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc";
// import pluginJs from "@eslint/js";
/** @type {import('eslint').Linter.Config[]} */



// mimic CommonJS variables -- not needed if using CommonJS
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const compat = new FlatCompat({baseDirectory: __dirname, recommendedConfig: pluginJs.configs.recommended});

// export default [
//   {languageOptions: { globals: globals.node }},
//   ...compat.extends("airbnb-base"),
// ];
export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
];