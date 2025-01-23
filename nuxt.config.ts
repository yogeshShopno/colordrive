// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  srcDir: 'app/',
  css: [
    '~/assets/css/all.css',
    '~/assets/css/global.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [
    // {
    //    src: '~/plugins/tawk.js', mode: 'client'
    //    }
  ],
  app: {
    head: {
      meta: [
        {
          'http-equiv': 'Content-Security-Policy',
          content: "script-src 'self' 'unsafe-inline'; object-src 'none';" // Add 'unsafe-eval' here if necessary
        },
      ],
      
      script: [
        {
          src: '/_nuxt/assets/js/script.js',
          type: 'text/javascript',
          defer: true
        },
        {
          src: '/_nuxt/assets/js/loader.js',
          type: 'text/javascript',
          defer: true
        },
        {
          src: '/_nuxt/assets/js/blog.js',
          type: 'text/javascript',
          defer: true
        },
        {
          src: '/_nuxt/assets/js/home.js',
          type: 'text/javascript',
          defer: true
        },
        {
          src: '/_nuxt/assets/js/single-service.js',
          type: 'text/javascript',
          defer: true
        },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js",
          defer: true,
      },
      ],
    },
  },
  modules: ['nuxt-swiper','@nuxt/image']
})