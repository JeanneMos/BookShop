module.exports = {
  "*.{js,jsx}": "eslint --fix",
  "*.{scss,css}": "postcss --config postcss.config.js --replace",
  "*.{js,jsx,tsx,md,html,css,scss}": "prettier --write",
};