// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@element-plus/nuxt'
  ],

  routeRules: {
    '/': { prerender: true }
  },

  css: [
    '~/assets/styles/colormode.css',
    '~/assets/styles/styles.css',
    '~/assets/styles/fonts.css',
    '~/assets/styles/transitions.css'
  ],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  content: {
    documentDriven: true,
    experimental: {
      search: {
        ignoredTags: [],
        filterQuery: { /* your query here */ },
      },
    },
    navigation: {
      fields: ['title', 'path']
    }
  },

  plugins: [
    '@/plugins/global-components.js',
  ],

  image: {
    // Configuration options
    presets: {
      default: {
        modifiers: {
          format: 'webp',
          quality: 75
        }
      }
    }
  },
  
  compatibilityDate: '2024-08-14',
})