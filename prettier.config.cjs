/** @type {import('prettier').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  semi: true,
  trailingComma: "es5",
  tabWidth: 2,
  singleQuote: true,
  overrides: [
    {
      "files": "*.tsx",
      "options": {
        "arrowParens": "always",
        "singleQuote": true,
        "trailingComma": "all",
        "bracketSpacing": false
      }
    },
    {
      "files": "*.ts",
      "options": {
        "arrowParens": "always",
        "singleQuote": true,
        "trailingComma": "all",
        "bracketSpacing": false
      }
    },
    {
      "files": "*.js",
      "options": {
        "arrowParens": "always",
        "singleQuote": true,
        "trailingComma": "all",
        "bracketSpacing": false
      }
    },
    {
      "files": "*.jsx",
      "options": {
        "arrowParens": "always",
        "singleQuote": true,
        "trailingComma": "all",
        "bracketSpacing": false
      }
    },
    {
      "files": "*.html",
      "options": {
        "tabWidth": 2
      }
    }
  ]
}
