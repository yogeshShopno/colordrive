// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  srcDir: 'app/',
  css: ['~/assets/css/main.css',
        '~/assets/css/owl.carousel.min.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [
    '~/plugins/vue-awesome-swiper.js', // Correct path
    //'https://kit.fontawesome.com/8ca4c4f7c7.js'
  ],
  app: {
    head: {
      meta: [
        {
          'http-equiv': 'Content-Security-Policy',
          content: "script-src 'self' 'unsafe-eval'; object-src 'none';"
        },
      ],
      script: [
        {
          src: '/app/assets/js/jquery-3.6.0.min.js',
          type: 'text/javascript',
        },
        {
          src: '/app/assets/js/owl.carousel.min.js',
          type: 'text/javascript',
        },
        {
          src: '/assets/js/script.js',
          type: 'text/javascript',
        },
      ],
    },
  },
  modules: ["@nuxt/image"]
})