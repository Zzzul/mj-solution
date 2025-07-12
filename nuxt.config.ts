// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2025-05-15',
  eslint: {
    checker: true,
    config: {
      stylistic: true,
    },
  },
  icon: {
    serverBundle: {
      collections: ['uil', 'mdi'],
    },
  },
})
