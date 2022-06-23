module.exports = {
  "*.{js,jsx,ts,tsx}": "eslint --fix",
  "*.{scss,css}": "postcss --config postcss.config.js --replace",
  "*.{js,jsx,ts,tsx,md,html,css,scss}": "prettier --write",
};