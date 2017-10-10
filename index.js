module.exports = {
  extends: [ 'airbnb-base', 'prettier' ],
  plugins: [ 'prettier' ],
  env: { browser: true, es6: true },
  rules: {
    "prettier/prettier": ["error", { "singleQuote": true, "trailingComma": "es5" }]
  },
  parser: 'babel-eslint'
}
