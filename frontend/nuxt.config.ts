// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: ['@nuxtjs/tailwindcss'],
  devtools: { enabled: true },
  hooks: {
    'pages:extend'(routes) {
      routes.push({
        name: 'notes',
        path: '/notes',
        file: '~/pages/notes/[id].vue'
      })
    }
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_API_BASE || 'http://localhost:3000'
    }
  },
  app: {
    head: {
      title: 'Notes App',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  }
})
