module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    "plugin:react/recommended",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  settings: {
    "import/resolver": "webpack",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
  ],
  rules: {
    "react/jsx-uses-react": "error",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "function-paren-newline": ["error", "multiline"],
    "arrow-body-style": "off",
    "default-param-last": "off",
    "prefer-arrow-callback": "off",
    "no-unused-expressions": ["error", { allowShortCircuit: true, allowTernary: true }],
    "indent": ["error", 2],
    "quotes": ["error", "double"]
  },
};
