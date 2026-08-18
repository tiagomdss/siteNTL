// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  srcDir: 'app/',

  modules: ['@nuxtjs/tailwindcss', '@vercel/speed-insights'],

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/api/vagas': { swr: 60 },
    '/api/talentos': { swr: 300 }
  },

  nitro: {
    externals: {
      external: ['mssql', 'tedious']
    }
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'NTL - Nova Tecnologia',
      htmlAttrs: { lang: 'pt-BR' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'description', content: 'NTL - Nova Tecnologia. Soluções em tecnologia da informação, software, service desk, facilities e transformação digital desde 1988.' },
        { name: 'theme-color', content: '#0b2345' },
        { name: 'color-scheme', content: 'light dark' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'pt_BR' },
        { property: 'og:site_name', content: 'NTL - Nova Tecnologia' },
        { property: 'og:title', content: 'NTL - Nova Tecnologia' },
        { property: 'og:description', content: 'Tecnologia, serviços e pessoas para operações que não podem parar.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }
      ]
    }
  }
})
