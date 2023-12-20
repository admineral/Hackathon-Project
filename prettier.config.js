// prettier.config.js

import prettierPlugin from 'prettier-plugin-tailwindcss/dist/index.mjs';

// Rest deines Codes...

module.exports = {
  bracketSpacing: true,
  semi: true,
  trailingComma: "all",
  printWidth: 80,
  tabWidth: 2,
  plugins: [require("prettier-plugin-tailwindcss")],
};
