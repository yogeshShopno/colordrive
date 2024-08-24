// app/plugins/vue-awesome-swiper.js

import { defineNuxtPlugin } from '#app'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('Swiper', Swiper)
  nuxtApp.vueApp.component('SwiperSlide', SwiperSlide)
})
