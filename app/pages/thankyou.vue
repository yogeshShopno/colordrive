<script setup>
</script>
<template>
  <!-- Unlocked Assurance card for you. -->
  <section class="pb-7 sm:pb-20 pt-2 sm:pt-8 mx-3 sm:mx-0" id="thankyou">
    <div class="container mx-auto">
      <div class="grid gap-5 sm:grid-cols-2">
        <div class="img-thank flex items-center">
          <div class="w-65"></div>
          <div class="text-white w-35">
            <h2 class="font-bold">Unlocked Assurance card for you.</h2>
            <div class="justify-center flex sm:justify-start">
              <button
              type="submit"
              class="mb-4 xl:mb-0 mt-4 text-black bg-yellowgrediant cta-btn font-medium rounded-xxl text-sm px-5 py-2.5 text-center before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-pink-500 hover:before:-translate-x-40"
              data-v-inspector="app/pages/index.vue:853:13"
              data-v-02281a80=""
            >
              <span
                relative="relative z-10"
                data-v-inspector="app/pages/index.vue:857:15"
                data-v-02281a80=""
                >View Service</span
              >
            </button>
            </div>
           
          </div>
        </div>
        <div class="img-thank1 flex items-center">
          <div class="w-65"></div>
          <div class="text-white w-35">
            <h2 class="font-bold">Unlocked Assurance card for you.</h2>
            <div class="justify-center flex sm:justify-start">
            <button
              type="submit"
              class="mb-4 xl:mb-0 mt-4 text-black bg-yellowgrediant cta-btn font-medium rounded-xxl text-sm px-5 py-2.5 text-center before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-pink-500 hover:before:-translate-x-40"
              data-v-inspector="app/pages/index.vue:853:13"
              data-v-02281a80=""
            >
              <span
                relative="relative z-10"
                data-v-inspector="app/pages/index.vue:857:15"
                data-v-02281a80=""
                >View Service</span
              >
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Unlocked Assurance card for you. -->

  <!-- Our Promise sectino start -->
  <section id="promise" class="mx-3 sm:mx-0">
    <div class="container mx-auto">
      <h2 class="font-bold mb-4 text-center">Our Promise</h2>
      <div class="grid gap-5 grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
        <div
          class="justify-center mb-5 xl:mb-0 flex flex-col items-center relative"
        >
          <img src="assets/images/thank-you/promise1.svg" alt="promise" />
          <div class="bg-lightpink py-3 px-2 md:px-3 br16 w-full absolute">
            <h5 class="text-center">Online Quotation</h5>
          </div>
        </div>
        <div
          class="justify-center mb-5 xl:mb-0 flex flex-col items-center relative"
        >
          <img src="assets/images/thank-you/promise2.svg" alt="promise" />
          <div class="bg-lightpink py-3 px-2 md:px-3 br16 w-full absolute">
            <h5 class="text-center">Dedicated Supervisor</h5>
          </div>
        </div>
        <div
          class="justify-center mb-5 xl:mb-0 flex flex-col items-center relative"
        >
          <img src="assets/images/thank-you/promise3.svg" alt="promise" />
          <div class="bg-lightpink py-3 px-2 md:px-3 br16 w-full absolute">
            <h5 class="text-center">Free Visit & Inspection</h5>
          </div>
        </div>
        <div
          class="justify-center mb-5 xl:mb-0 flex flex-col items-center relative"
        >
          <img src="assets/images/thank-you/promise4.svg" alt="promise" />
          <div class="bg-lightpink py-3 px-2 md:px-3 br16 w-full absolute">
            <h5 class="text-center">Free Colour Consultancy</h5>
          </div>
        </div>
        <div
          class="justify-center mb-5 xl:mb-0 flex flex-col items-center relative"
        >
          <img src="assets/images/thank-you/promise5.svg" alt="promise" />
          <div class="bg-lightpink py-3 px-2 md:px-3 br16 w-full absolute">
            <h5 class="text-center">Daily Work Report</h5>
          </div>
        </div>
        <div
          class="justify-center mb-5 xl:mb-0 flex flex-col items-center relative"
        >
          <img src="assets/images/thank-you/promise6.svg" alt="promise" />
          <div class="bg-lightpink py-3 px-2 md:px-3 br16 w-full absolute">
            <h5 class="text-center">Certified Painters</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Our Promise sectino end -->

  <!-- blog -->
  <section id="blog1" class="py-100 px-4">
    <div class="container mx-auto">
      <h2 class="text-center font-bold mb-5">Recent Projects</h2>

      <Swiper
      class="text2"
        :slides-per-view="1"
         :breakpoints="{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }"
        :loop="true"
        :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation]"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: true,
        }"
        
          :pauseAutoplayOnMouseEnter="true"
          :navigation="true"
      >
        <SwiperSlide class="h-100">
          <div class="item m-4">
            <div class="blog-box rounded-2xl">
              <div class="relative">
                <img
                  src="assets/images/thank-you/project1.webp"
                  width="100%"
                  alt="Blog"
                  class="blog"
                />
                <div
                  class="blog-btn px-4 py-2 absolute text-center text-white text-xl flex items-center"
                >
                  <i
                    class="fa-solid fa-calendar-days"
                    style="color: rgba(0, 0, 0, 0.5)"
                  ></i>
                  <h6 class="ms-3">Feb 20, 2024</h6>
                </div>
              </div>
              <div class="p-4">
                <ul class="m-0 p-0">
                  <li class="flex items-center">
                    <svg
                      width="21"
                      height="16"
                      viewBox="0 0 21 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.5331 8.74538V14.3572C17.5331 14.5599 17.4545 14.7352 17.2974 14.8833C17.1403 15.0314 16.9542 15.1055 16.7392 15.1055H11.9756V10.616H8.79982V15.1055H4.03621C3.82119 15.1055 3.63511 15.0314 3.47798 14.8833C3.32084 14.7352 3.24228 14.5599 3.24228 14.3572V8.74538C3.24228 8.73758 3.24435 8.72589 3.24848 8.7103C3.25262 8.69471 3.25468 8.68302 3.25468 8.67523L10.3877 3.13353L17.5207 8.67523C17.529 8.69082 17.5331 8.7142 17.5331 8.74538ZM20.2995 7.93867L19.5304 8.80383C19.4642 8.87398 19.3774 8.91685 19.2698 8.93244H19.2326C19.1251 8.93244 19.0383 8.90516 18.9721 8.8506L10.3877 2.10469L1.80327 8.8506C1.70403 8.91295 1.60479 8.94023 1.50555 8.93244C1.39803 8.91685 1.3112 8.87398 1.24504 8.80383L0.47591 7.93867C0.409749 7.86073 0.380804 7.76915 0.389074 7.66393C0.397344 7.5587 0.44283 7.47492 0.525531 7.41256L9.4449 0.409444C9.70954 0.206794 10.0238 0.105469 10.3877 0.105469C10.7516 0.105469 11.0658 0.206794 11.3305 0.409444L14.3574 2.79448V0.514666C14.3574 0.405547 14.3946 0.315913 14.469 0.245765C14.5435 0.175617 14.6386 0.140543 14.7543 0.140543H17.1361C17.2519 0.140543 17.347 0.175617 17.4215 0.245765C17.4959 0.315913 17.5331 0.405547 17.5331 0.514666V5.28474L20.2499 7.41256C20.3326 7.47492 20.378 7.5587 20.3863 7.66393C20.3946 7.76915 20.3656 7.86073 20.2995 7.93867Z"
                        fill="#6A6D70"
                      />
                    </svg>
                    <h5 class="ms-3">Panduranganagar Bannerghatta Road</h5>
                  </li>
                  <li class="flex items-center">
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.8877 0.105469C5.89857 0.105469 3.99092 0.856196 2.58439 2.1925C1.17787 3.5288 0.387695 5.34122 0.387695 7.23103C0.387695 12.4881 7.30436 18.7349 7.60436 18.9961C7.68185 19.0663 7.7848 19.1055 7.89186 19.1055C7.99892 19.1055 8.10187 19.0663 8.17936 18.9961C8.47103 18.7349 15.3877 12.4881 15.3877 7.23103C15.3877 5.34122 14.5975 3.5288 13.191 2.1925C11.7845 0.856196 9.87682 0.105469 7.8877 0.105469ZM7.8877 11.1897C7.06361 11.1897 6.25802 10.9575 5.57282 10.5225C4.88761 10.0875 4.35356 9.46929 4.0382 8.74594C3.72283 8.02259 3.64032 7.22664 3.80109 6.45874C3.96186 5.69084 4.3587 4.98547 4.94142 4.43185C5.52414 3.87822 6.26656 3.5012 7.07482 3.34845C7.88307 3.19571 8.72085 3.2741 9.48221 3.57372C10.2436 3.87334 10.8943 4.38073 11.3522 5.03173C11.81 5.68272 12.0544 6.44809 12.0544 7.23103C12.0544 7.75089 11.9466 8.26566 11.7372 8.74594C11.5278 9.22623 11.2209 9.66263 10.834 10.0302C10.4471 10.3978 9.98773 10.6894 9.48221 10.8883C8.97669 11.0873 8.43487 11.1897 7.8877 11.1897Z"
                        fill="#6A6D70"
                      />
                    </svg>

                    <h5 class="ms-3">Bangalore</h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide class="h-100">
          <div class="item m-4">
            <div class="blog-box rounded-2xl">
              <div class="relative">
                <img
                  src="assets/images/thank-you/project2.webp"
                  width="100%"
                  alt="Blog"
                  class="blog"
                />
                <div
                  class="blog-btn px-4 py-2 absolute text-center text-white text-xl flex items-center"
                >
                  <i
                    class="fa-solid fa-calendar-days"
                    style="color: rgba(0, 0, 0, 0.5)"
                  ></i>
                  <h6 class="ms-3">Feb 20, 2024</h6>
                </div>
              </div>
              <div class="p-4">
                <ul class="m-0 p-0">
                  <li class="flex items-center">
                    <svg
                      width="21"
                      height="16"
                      viewBox="0 0 21 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.5331 8.74538V14.3572C17.5331 14.5599 17.4545 14.7352 17.2974 14.8833C17.1403 15.0314 16.9542 15.1055 16.7392 15.1055H11.9756V10.616H8.79982V15.1055H4.03621C3.82119 15.1055 3.63511 15.0314 3.47798 14.8833C3.32084 14.7352 3.24228 14.5599 3.24228 14.3572V8.74538C3.24228 8.73758 3.24435 8.72589 3.24848 8.7103C3.25262 8.69471 3.25468 8.68302 3.25468 8.67523L10.3877 3.13353L17.5207 8.67523C17.529 8.69082 17.5331 8.7142 17.5331 8.74538ZM20.2995 7.93867L19.5304 8.80383C19.4642 8.87398 19.3774 8.91685 19.2698 8.93244H19.2326C19.1251 8.93244 19.0383 8.90516 18.9721 8.8506L10.3877 2.10469L1.80327 8.8506C1.70403 8.91295 1.60479 8.94023 1.50555 8.93244C1.39803 8.91685 1.3112 8.87398 1.24504 8.80383L0.47591 7.93867C0.409749 7.86073 0.380804 7.76915 0.389074 7.66393C0.397344 7.5587 0.44283 7.47492 0.525531 7.41256L9.4449 0.409444C9.70954 0.206794 10.0238 0.105469 10.3877 0.105469C10.7516 0.105469 11.0658 0.206794 11.3305 0.409444L14.3574 2.79448V0.514666C14.3574 0.405547 14.3946 0.315913 14.469 0.245765C14.5435 0.175617 14.6386 0.140543 14.7543 0.140543H17.1361C17.2519 0.140543 17.347 0.175617 17.4215 0.245765C17.4959 0.315913 17.5331 0.405547 17.5331 0.514666V5.28474L20.2499 7.41256C20.3326 7.47492 20.378 7.5587 20.3863 7.66393C20.3946 7.76915 20.3656 7.86073 20.2995 7.93867Z"
                        fill="#6A6D70"
                      />
                    </svg>
                    <h5 class="ms-3">Panduranganagar Bannerghatta Road</h5>
                  </li>
                  <li class="flex items-center">
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.8877 0.105469C5.89857 0.105469 3.99092 0.856196 2.58439 2.1925C1.17787 3.5288 0.387695 5.34122 0.387695 7.23103C0.387695 12.4881 7.30436 18.7349 7.60436 18.9961C7.68185 19.0663 7.7848 19.1055 7.89186 19.1055C7.99892 19.1055 8.10187 19.0663 8.17936 18.9961C8.47103 18.7349 15.3877 12.4881 15.3877 7.23103C15.3877 5.34122 14.5975 3.5288 13.191 2.1925C11.7845 0.856196 9.87682 0.105469 7.8877 0.105469ZM7.8877 11.1897C7.06361 11.1897 6.25802 10.9575 5.57282 10.5225C4.88761 10.0875 4.35356 9.46929 4.0382 8.74594C3.72283 8.02259 3.64032 7.22664 3.80109 6.45874C3.96186 5.69084 4.3587 4.98547 4.94142 4.43185C5.52414 3.87822 6.26656 3.5012 7.07482 3.34845C7.88307 3.19571 8.72085 3.2741 9.48221 3.57372C10.2436 3.87334 10.8943 4.38073 11.3522 5.03173C11.81 5.68272 12.0544 6.44809 12.0544 7.23103C12.0544 7.75089 11.9466 8.26566 11.7372 8.74594C11.5278 9.22623 11.2209 9.66263 10.834 10.0302C10.4471 10.3978 9.98773 10.6894 9.48221 10.8883C8.97669 11.0873 8.43487 11.1897 7.8877 11.1897Z"
                        fill="#6A6D70"
                      />
                    </svg>

                    <h5 class="ms-3">Bangalore</h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide class="h-100">
          <div class="item m-4">
            <div class="blog-box rounded-2xl">
              <div class="relative">
                <img
                  src="assets/images/thank-you/project3.webp"
                  width="100%"
                  alt="Blog"
                  class="blog"
                />
                <div
                  class="blog-btn px-4 py-2 absolute text-center text-white text-xl flex items-center"
                >
                  <i
                    class="fa-solid fa-calendar-days"
                    style="color: rgba(0, 0, 0, 0.5)"
                  ></i>
                  <h6 class="ms-3">Feb 20, 2024</h6>
                </div>
              </div>
              <div class="p-4">
                <ul class="m-0 p-0">
                  <li class="flex items-center">
                    <svg
                      width="21"
                      height="16"
                      viewBox="0 0 21 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.5331 8.74538V14.3572C17.5331 14.5599 17.4545 14.7352 17.2974 14.8833C17.1403 15.0314 16.9542 15.1055 16.7392 15.1055H11.9756V10.616H8.79982V15.1055H4.03621C3.82119 15.1055 3.63511 15.0314 3.47798 14.8833C3.32084 14.7352 3.24228 14.5599 3.24228 14.3572V8.74538C3.24228 8.73758 3.24435 8.72589 3.24848 8.7103C3.25262 8.69471 3.25468 8.68302 3.25468 8.67523L10.3877 3.13353L17.5207 8.67523C17.529 8.69082 17.5331 8.7142 17.5331 8.74538ZM20.2995 7.93867L19.5304 8.80383C19.4642 8.87398 19.3774 8.91685 19.2698 8.93244H19.2326C19.1251 8.93244 19.0383 8.90516 18.9721 8.8506L10.3877 2.10469L1.80327 8.8506C1.70403 8.91295 1.60479 8.94023 1.50555 8.93244C1.39803 8.91685 1.3112 8.87398 1.24504 8.80383L0.47591 7.93867C0.409749 7.86073 0.380804 7.76915 0.389074 7.66393C0.397344 7.5587 0.44283 7.47492 0.525531 7.41256L9.4449 0.409444C9.70954 0.206794 10.0238 0.105469 10.3877 0.105469C10.7516 0.105469 11.0658 0.206794 11.3305 0.409444L14.3574 2.79448V0.514666C14.3574 0.405547 14.3946 0.315913 14.469 0.245765C14.5435 0.175617 14.6386 0.140543 14.7543 0.140543H17.1361C17.2519 0.140543 17.347 0.175617 17.4215 0.245765C17.4959 0.315913 17.5331 0.405547 17.5331 0.514666V5.28474L20.2499 7.41256C20.3326 7.47492 20.378 7.5587 20.3863 7.66393C20.3946 7.76915 20.3656 7.86073 20.2995 7.93867Z"
                        fill="#6A6D70"
                      />
                    </svg>
                    <h5 class="ms-3">Panduranganagar Bannerghatta Road</h5>
                  </li>
                  <li class="flex items-center">
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.8877 0.105469C5.89857 0.105469 3.99092 0.856196 2.58439 2.1925C1.17787 3.5288 0.387695 5.34122 0.387695 7.23103C0.387695 12.4881 7.30436 18.7349 7.60436 18.9961C7.68185 19.0663 7.7848 19.1055 7.89186 19.1055C7.99892 19.1055 8.10187 19.0663 8.17936 18.9961C8.47103 18.7349 15.3877 12.4881 15.3877 7.23103C15.3877 5.34122 14.5975 3.5288 13.191 2.1925C11.7845 0.856196 9.87682 0.105469 7.8877 0.105469ZM7.8877 11.1897C7.06361 11.1897 6.25802 10.9575 5.57282 10.5225C4.88761 10.0875 4.35356 9.46929 4.0382 8.74594C3.72283 8.02259 3.64032 7.22664 3.80109 6.45874C3.96186 5.69084 4.3587 4.98547 4.94142 4.43185C5.52414 3.87822 6.26656 3.5012 7.07482 3.34845C7.88307 3.19571 8.72085 3.2741 9.48221 3.57372C10.2436 3.87334 10.8943 4.38073 11.3522 5.03173C11.81 5.68272 12.0544 6.44809 12.0544 7.23103C12.0544 7.75089 11.9466 8.26566 11.7372 8.74594C11.5278 9.22623 11.2209 9.66263 10.834 10.0302C10.4471 10.3978 9.98773 10.6894 9.48221 10.8883C8.97669 11.0873 8.43487 11.1897 7.8877 11.1897Z"
                        fill="#6A6D70"
                      />
                    </svg>

                    <h5 class="ms-3">Bangalore</h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide class="h-100">
          <div class="item m-4">
            <div class="blog-box rounded-2xl">
              <div class="relative">
                <img
                  src="assets/images/thank-you/project2.webp"
                  width="100%"
                  alt="Blog"
                  class="blog"
                />
                <div
                  class="blog-btn px-4 py-2 absolute text-center text-white text-xl flex items-center"
                >
                  <i
                    class="fa-solid fa-calendar-days"
                    style="color: rgba(0, 0, 0, 0.5)"
                  ></i>
                  <h6 class="ms-3">Feb 20, 2024</h6>
                </div>
              </div>
              <div class="p-4">
                <ul class="m-0 p-0">
                  <li class="flex items-center">
                    <svg
                      width="21"
                      height="16"
                      viewBox="0 0 21 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.5331 8.74538V14.3572C17.5331 14.5599 17.4545 14.7352 17.2974 14.8833C17.1403 15.0314 16.9542 15.1055 16.7392 15.1055H11.9756V10.616H8.79982V15.1055H4.03621C3.82119 15.1055 3.63511 15.0314 3.47798 14.8833C3.32084 14.7352 3.24228 14.5599 3.24228 14.3572V8.74538C3.24228 8.73758 3.24435 8.72589 3.24848 8.7103C3.25262 8.69471 3.25468 8.68302 3.25468 8.67523L10.3877 3.13353L17.5207 8.67523C17.529 8.69082 17.5331 8.7142 17.5331 8.74538ZM20.2995 7.93867L19.5304 8.80383C19.4642 8.87398 19.3774 8.91685 19.2698 8.93244H19.2326C19.1251 8.93244 19.0383 8.90516 18.9721 8.8506L10.3877 2.10469L1.80327 8.8506C1.70403 8.91295 1.60479 8.94023 1.50555 8.93244C1.39803 8.91685 1.3112 8.87398 1.24504 8.80383L0.47591 7.93867C0.409749 7.86073 0.380804 7.76915 0.389074 7.66393C0.397344 7.5587 0.44283 7.47492 0.525531 7.41256L9.4449 0.409444C9.70954 0.206794 10.0238 0.105469 10.3877 0.105469C10.7516 0.105469 11.0658 0.206794 11.3305 0.409444L14.3574 2.79448V0.514666C14.3574 0.405547 14.3946 0.315913 14.469 0.245765C14.5435 0.175617 14.6386 0.140543 14.7543 0.140543H17.1361C17.2519 0.140543 17.347 0.175617 17.4215 0.245765C17.4959 0.315913 17.5331 0.405547 17.5331 0.514666V5.28474L20.2499 7.41256C20.3326 7.47492 20.378 7.5587 20.3863 7.66393C20.3946 7.76915 20.3656 7.86073 20.2995 7.93867Z"
                        fill="#6A6D70"
                      />
                    </svg>
                    <h5 class="ms-3">Panduranganagar Bannerghatta Road</h5>
                  </li>
                  <li class="flex items-center">
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.8877 0.105469C5.89857 0.105469 3.99092 0.856196 2.58439 2.1925C1.17787 3.5288 0.387695 5.34122 0.387695 7.23103C0.387695 12.4881 7.30436 18.7349 7.60436 18.9961C7.68185 19.0663 7.7848 19.1055 7.89186 19.1055C7.99892 19.1055 8.10187 19.0663 8.17936 18.9961C8.47103 18.7349 15.3877 12.4881 15.3877 7.23103C15.3877 5.34122 14.5975 3.5288 13.191 2.1925C11.7845 0.856196 9.87682 0.105469 7.8877 0.105469ZM7.8877 11.1897C7.06361 11.1897 6.25802 10.9575 5.57282 10.5225C4.88761 10.0875 4.35356 9.46929 4.0382 8.74594C3.72283 8.02259 3.64032 7.22664 3.80109 6.45874C3.96186 5.69084 4.3587 4.98547 4.94142 4.43185C5.52414 3.87822 6.26656 3.5012 7.07482 3.34845C7.88307 3.19571 8.72085 3.2741 9.48221 3.57372C10.2436 3.87334 10.8943 4.38073 11.3522 5.03173C11.81 5.68272 12.0544 6.44809 12.0544 7.23103C12.0544 7.75089 11.9466 8.26566 11.7372 8.74594C11.5278 9.22623 11.2209 9.66263 10.834 10.0302C10.4471 10.3978 9.98773 10.6894 9.48221 10.8883C8.97669 11.0873 8.43487 11.1897 7.8877 11.1897Z"
                        fill="#6A6D70"
                      />
                    </svg>

                    <h5 class="ms-3">Bangalore</h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
  <!-- blog -->

  <!-- faq -->
  <section id="faq" class="px-4 pb-200">
    <div class="container mx-auto">
      <h2 class="text-center font-bold mb-5">FAQs</h2>
      <div class="accordion flex flex-col items-center justify-center">
        <!--  Panel 1  -->
        <div class="w-full lg:w-1/2 shadow11 mb-4">
          <input type="checkbox" name="panel" id="panel-1" class="hidden" />
          <label
            for="panel-1"
            class="relative block bg-white text-black p-4 rounded-2xl"
            >Questions text goes here</label
          >
          <div class="accordion__content overflow-hidden">
            <p class="accordion__body p-4 text-black" id="panel1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen.
            </p>
          </div>
        </div>
        <!--  Panel 2  -->
        <div class="w-full lg:w-1/2 shadow11 mb-4">
          <input type="checkbox" name="panel" id="panel-2" class="hidden" />
          <label
            for="panel-2"
            class="relative block bg-white text-black p-4 rounded-2xl"
            >Questions text goes here</label
          >
          <div class="accordion__content overflow-hidden">
            <p class="accordion__body p-4 text-black" id="panel1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
              possimus at a cum saepe molestias modi illo facere ducimus
              voluptatibus praesentium deleniti fugiat ab error quia sit
              perspiciatis velit necessitatibus.Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <!--  Panel 3  -->
        <div class="w-full lg:w-1/2 shadow11 mb-4">
          <input type="checkbox" name="panel" id="panel-3" class="hidden" />
          <label
            for="panel-3"
            class="relative block bg-white text-black p-4 rounded-2xl"
            >Questions text goes here</label
          >
          <div class="accordion__content overflow-hidden">
            <p class="accordion__body p-4 text-black" id="panel1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
              possimus at a cum saepe molestias modi illo facere ducimus
              voluptatibus praesentium deleniti fugiat ab error quia sit
              perspiciatis velit necessitatibus.Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <!--  Panel 4  -->
        <div class="w-full lg:w-1/2 shadow11 mb-4">
          <input type="checkbox" name="panel" id="panel-4" class="hidden" />
          <label
            for="panel-4"
            class="relative block bg-white text-black p-4 rounded-2xl"
            >Questions text goes here</label
          >
          <div class="accordion__content overflow-hidden">
            <p class="accordion__body p-4 text-black" id="panel1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
              possimus at a cum saepe molestias modi illo facere ducimus
              voluptatibus praesentium deleniti fugiat ab error quia sit
              perspiciatis velit necessitatibus.Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <!--  Panel 5  -->
        <div class="w-full lg:w-1/2 shadow11 mb-4">
          <input type="checkbox" name="panel" id="panel-5" class="hidden" />
          <label
            for="panel-5"
            class="relative block bg-white text-black p-4 rounded-2xl"
            >Questions text goes here</label
          >
          <div class="accordion__content overflow-hidden">
            <p class="accordion__body p-4 text-black" id="panel1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
              possimus at a cum saepe molestias modi illo facere ducimus
              voluptatibus praesentium deleniti fugiat ab error quia sit
              perspiciatis velit necessitatibus.Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- faq -->
</template>
<style scoped>
@import '../assets/css/thankyou.css';
</style>