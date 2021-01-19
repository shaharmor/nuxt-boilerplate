import { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  /**
   * nuxt settings
   */
  srcDir: 'src/',
  modules: [],
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/tailwindcss', 'nuxt-webfontloader'],
  build: {
    postcss: {
      preset: {
        features: {
          // fixes: https://github.com/tailwindcss/tailwindcss/issues/1190#issuecomment-546621554
          'focus-within-pseudo-class': false,
        },
      },
    },
  },

  /**
   * vue-meta
   */
  head: {
    titleTemplate: '%s | Nuxt boilerplate',
    htmlAttrs: { lang: 'en' },
    bodyAttrs: {
      class: 'antialiased font-sans',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt boilerplate' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  /**
   * @nuxtjs/tailwindcss
   */
  tailwindcss: {
    cssPath: '@/assets/css/tailwind.css',
  },

  /**
   * nuxt-webfontloader
   */
  webfontloader: {
    custom: {
      families: ['Inter var'],
      urls: ['https://rsms.me/inter/inter.css'],
    },
  },
};

export default config;
