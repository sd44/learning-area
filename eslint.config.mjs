import globals from "globals";
import pluginJs from "@eslint/js";
// import pluginReact from "eslint-plugin-react";

// https://html-eslint.org/
// npm install --save-dev eslint @html-eslint/parser @html-eslint/eslint-plugin eslint-config-prettier
import htmles from "@html-eslint/eslint-plugin";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  eslintConfigPrettier,
  {
    // recommended configuration included in the plugin
    ...htmles.configs["flat/recommended"],
    files: ["**/*.{htm,html}"],
    rules: {
      ...htmles.configs["flat/recommended"].rules, // Must be defined. If not, all recommended rules will be lost
      "@html-eslint/indent": [
        "warn",
        2,
        {
          Attribute: 1,
          tagChildrenIndent: {
            html: 1,
            div: 1,
          },
        },
      ],
      "@html-eslint/no-extra-spacing-attrs": "off",
      "@html-eslint/require-closing-tags": "off",
      "@html-eslint/attrs-newline": "off",
    },
  },
  {
    // recommended configuration included in the plugin
    files: ["**/*.{js,mjs,cjs,jsx}"],
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  // pluginReact.configs.flat.recommended,
];
