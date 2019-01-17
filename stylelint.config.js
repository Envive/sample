module.exports = {
  processors: ['@mapbox/stylelint-processor-arbitrary-tags'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-sass-guidelines',
    'stylelint-config-recess-order',
  ],
  plugins: [
    'stylelint-scss',
  ],
  ignoreFiles: ['styelint.config.js'],
  rules: {
    'no-empty-source': null,
    'order/properties-alphabetical-order': null,
    'scss/at-import-partial-extension-blacklist': [''],
    'scss/percent-placeholder-pattern': null,
  },
};
