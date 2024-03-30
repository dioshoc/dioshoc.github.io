module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'prettier/prettier': ["error", {
      "trailingComma": "es5",
      "tabWidth": 2,
      "semi": true,
      "singleQuote": true,
      "arrowParens": "always",
      "htmlWhitespaceSensitivity": "ignore",
      "bracketSameLine": false,
      "singleAttributePerLine": true,
      "bracketSpacing": true,
    }],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "max-len": ["error", { "comments": 80 }],
  },
}
