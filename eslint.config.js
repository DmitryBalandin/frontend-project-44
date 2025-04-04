import globals from 'globals'
import pluginJs from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
// import { Linter } from 'eslint'

export default [
  stylistic.configs.recommended,
  pluginJs.configs.recommended,

  {
    files: [
      '**/*.{js}',
    ],
  },
  {
    ignores: ['dist/'],
  },
  {
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },

  },
]

// import globals from "globals";
// import pluginJs from "@eslint/js";

// /** @type {import('eslint').Linter.Config[]} */
// export default [
//   {languageOptions: { globals: globals.node }},
//   pluginJs.configs.recommended,
// ];
