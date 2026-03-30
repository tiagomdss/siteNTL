// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  srcDir: 'app/',

  modules: ['@nuxtjs/tailwindcss', '@vercel/speed-insights'],

  css: ['~/assets/css/main.css'],

  // Impede que o Nitro/Rollup faça bundle do mssql (pacote CJS nativo)
  nitro: {
    externals: {
      external: ['mssql', 'tedious']
    }
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'NTL - Nova Tecnologia',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Soluções sob medida para a performance de sua empresa' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
