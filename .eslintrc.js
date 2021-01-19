require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: ['@shaharmor/eslint-config'],
  env: {
    browser: true,
    jest: true,
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
  settings: {
    'import/core-modules': ['vue', 'vuex'], // these modules are included in nuxt.js
  },
};
