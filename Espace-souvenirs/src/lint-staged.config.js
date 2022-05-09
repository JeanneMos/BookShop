module.exports = {
  "*.{js,jsx,ts,tsx,md,html,css,scss}": "prettier --write",
  "*.{js,jsx,ts,tsx}": "eslint",
  "*.{scss,css}": "npm run postcss"
};