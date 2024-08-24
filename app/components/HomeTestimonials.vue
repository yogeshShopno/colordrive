<template>
  <Swiper :options="swiperOptions">
    <SwiperSlide>
      <div class="item m-4 text-center pt-5">
            <div class="bg-white shadow-mds p-5 rounded-2xl relative ">
              <div class="flex justify-center absolute review1">
                <img src="assets/images/Review1.webp" alt="Review1" class="w-22">
              </div>
              <div class="mt-7">
                <h5>Cha Ji-Hun</h5>
                <div class="flex justify-center">
                  <img src="assets/images/stars.svg" alt="stars" class="my-4 star">

                </div>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque posuere vivamus egestas
                  porttitor.</p>
              </div>

            </div>
          </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="item m-4 text-center pt-5">
            <div class="bg-white shadow-mds p-5 rounded-2xl relative ">
              <div class="flex justify-center absolute review1">
                <img src="assets/images/Review2.webp" alt="Review1" class="w-22">
              </div>
              <div class="mt-7">
                <h5>Cha Ji-Hun</h5>
                <div class="flex justify-center">
                  <img src="assets/images/stars.svg" alt="stars" class="my-4 star">

                </div>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque posuere vivamus egestas
                  porttitor.</p>
              </div>

            </div>
          </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="item m-4 text-center pt-5">
            <div class="bg-white shadow-mds p-5 rounded-2xl relative ">
              <div class="flex justify-center absolute review1">
                <img src="assets/images/Review3.webp" alt="Review1" class="w-22">
              </div>
              <div class="mt-7">
                <h5>Cha Ji-Hun</h5>
                <div class="flex justify-center">
                  <img src="assets/images/stars.svg" alt="stars" class="my-4 star">

                </div>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque posuere vivamus egestas
                  porttitor.</p>
              </div>

            </div>
          </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="item m-4 text-center pt-5">
            <div class="bg-white shadow-mds p-5 rounded-2xl relative ">
              <div class="flex justify-center absolute review1">
                <img src="assets/images/Review1.webp" alt="Review1" class="w-22">
              </div>
              <div class="mt-7">
                <h5>Cha Ji-Hun</h5>
                <div class="flex justify-center">
                  <img src="assets/images/stars.svg" alt="stars" class="my-4 star">

                </div>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque posuere vivamus egestas
                  porttitor.</p>
              </div>

            </div>
          </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="item m-4 text-center pt-5">
            <div class="bg-white shadow-mds p-5 rounded-2xl relative ">
              <div class="flex justify-center absolute review1">
                <img src="assets/images/Review2.webp" alt="Review1" class="w-22">
              </div>
              <div class="mt-7">
                <h5>Cha Ji-Hun</h5>
                <div class="flex justify-center">
                  <img src="assets/images/stars.svg" alt="stars" class="my-4 star">

                </div>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque posuere vivamus egestas
                  porttitor.</p>
              </div>

            </div>
          </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="item m-4 text-center pt-5">
            <div class="bg-white shadow-mds p-5 rounded-2xl relative ">
              <div class="flex justify-center absolute review1">
                <img src="assets/images/Review3.webp" alt="Review1" class="w-22">
              </div>
              <div class="mt-7">
                <h5>Cha Ji-Hun</h5>
                <div class="flex justify-center">
                  <img src="assets/images/stars.svg" alt="stars" class="my-4 star">

                </div>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque posuere vivamus egestas
                  porttitor.</p>
              </div>

            </div>
          </div>
    </SwiperSlide>
    <!-- Add more slides as needed -->
  </Swiper>
</template>

<script setup>
import { reactive } from 'vue'

const swiperOptions = reactive({
  // Swiper options
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    clickable: true,
  },
  navigation: true,
  autoplay: {
    delay: 3000,
  },
})
</script>

<style scoped>
/* Optional custom styles */
</style>
