// eslint-disable-next-line import/no-extraneous-dependencies
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['src/**/*.vue', 'src/**/*.ts', 'src/**/*.js', 'nuxt.config.ts'],
  },
};
