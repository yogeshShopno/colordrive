<script>
export default {
  methods: {
    toggleSection() {
      const checkbox = document.getElementById("toggle-checkbox");
      const section = document.getElementById("toggle-section");
      if (checkbox.checked) {
        section.classList.remove("hidden"); // Show the section
      } else {
        section.classList.add("hidden"); // Hide the section
      }
    },
  },
};
</script>

<template>
  <!-- service Post section start -->
  <section id="service-post" class="mt-50px px-4 px-md-0">
    <div class="container mx-auto">
      <div class="max-w-4xl mx-auto">
        <div class="firstsecdiv">
          <div class="bg-white mainboxshadow rounded-2xl p-5">
            <div>
              <div class="caclc2div">
                <h3 class="font-bold text-2xl er">Paint Of Your Choice</h3>
              </div>
              <div class="calcseccardsdiv mt-5">
                <div class="calcspace">
                  <div class="calccardtitle mb-3">
                    <h5 class="font-bold">Select Paint Brand</h5>
                  </div>
                  <div class="calccardspacemini">
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <div class="row-span-66">
                        <div class="calccardspacemini0">
                          <div
                            class="imgcalcdiv align-center bg-white custshadow flex justify-center p-4 rounded-md"
                          >
                            <img
                              src="assets/images/calculator/asian.png"
                              alt="Interior Painting"
                              width=""
                              class="br-16 max-w-full h-16 object-contain"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row-span-66">
                        <div class="calccardspacemini0">
                          <div
                            class="imgcalcdiv align-center bg-white custshadow flex justify-center p-4 rounded-md"
                          >
                            <img
                              src="assets/images/calculator/citypaint.png"
                              alt="Interior Painting"
                              width=""
                              class="br-16 max-w-full h-16 object-contain"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row-span-66">
                        <div class="calccardspacemini0">
                          <div
                            class="imgcalcdiv align-center bg-white custshadow flex justify-center p-4 rounded-md"
                          >
                            <img
                              src="assets/images/calculator/dulux.png"
                              alt="Interior Painting"
                              width=""
                              class="br-16 max-w-full h-16 object-contain"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row-span-66">
                        <div class="calccardspacemini0">
                          <div
                            class="imgcalcdiv align-center bg-white custshadow flex justify-center p-4 rounded-md"
                          >
                            <img
                              src="assets/images/calculator/saifpaint.png"
                              alt="Interior Painting"
                              width=""
                              class="br-16 max-w-full h-16 object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="calcseccardsdiv mt-5">
                <div class="calcspace">
                  <div class="calccardtitle mb-3">
                    <h5 class="font-bold">Select Paint Category</h5>
                  </div>
                  <div class="calccardspacemini">
                    <div
                      class="grid grid-cols-1 sm:grid-cols-3 xs:grid-cols-2 gap-4"
                    >
                      <div class="row-span-66 h-full">
                        <div class="calccardspacemini0 h-full">
                          <div
                            class="imgcalcdiv bg-light-pink h-full p-3 rounded-lg overflow-hiddenrounded-md"
                          >
                            <h5 class="font-bold mb-2">Economy</h5>
                            <ul class="list-disc ps-6">
                              <li class="text-sm mb-1 text-gray-500">
                                Matt Finish
                              </li>
                              <li class="text-sm mb-1 text-gray-500">
                                Non-Washable
                              </li>
                              <li class="text-sm mb-1 text-gray-500">
                                Durability Upto 2 years
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="row-span-66 h-full">
                        <div class="calccardspacemini0 h-full">
                          <div
                            class="imgcalcdiv bg-pink p-3 rounded h-full-lg overflow-hiddenrounded-md"
                          >
                            <h5 class="font-bold mb-2 text-white">Premium</h5>
                            <ul class="list-disc ps-6">
                              <li class="text-sm mb-1 text-white">
                                Matt and Sheen Finish
                              </li>
                              <li class="text-sm mb-1 text-white">
                                Semi-Washable
                              </li>
                              <li class="text-sm mb-1 text-white">
                                Durability Upto 5 years
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="row-span-66 h-full">
                        <div class="calccardspacemini0 h-full">
                          <div
                            class="imgcalcdiv bg-light-pink h-full p-3 rounded-lg overflow-hiddenrounded-md"
                          >
                            <h5 class="font-bold mb-2">Luxury</h5>
                            <ul class="list-disc ps-6">
                              <li class="text-sm mb-1 text-gray-500">
                                Matt and Sheen Finish
                              </li>
                              <li class="text-sm mb-1 text-gray-500">
                                Washable
                              </li>
                              <li class="text-sm mb-1 text-gray-500">
                                Durability Upto 7 years
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="calcseccardsdiv mt-5">
                <div class="calcspace">
                  <div class="calccardtitle mb-3">
                    <h5 class="font-bold">Select Product For Walls</h5>
                  </div>
                  <div class="calccardspacemini sliderdiv text1">
                    <Swiper
                      class="catalogue"
                      :slides-per-view="1"
                      :loop="true"
                      :breakpoints="{
                        0: { slidesPerView: 1 },
                        475: { slidesPerView: 2 },
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                      }"
                      :modules="[
                        SwiperAutoplay,
                        SwiperEffectCreative,
                        SwiperNavigation,
                      ]"
                      :autoplay="{
                        delay: 3000,
                        disableOnInteraction: true,
                      }"
                      :pauseAutoplayOnMouseEnter="true"
                      :navigation="true"
                      :pagination="{
                        clickable: true,
                      }"
                    >
                      <SwiperSlide class="h-100">
                        <div class="m-4 text-center h-100">
                          <div class="row-span-66">
                            <div
                              class="product-card bg-white custshadow p-4 rounded-lg"
                            >
                              <div
                                class="imgcalcdiv text-center p-5 rounded-lg overflow-hiddenrounded-md"
                              >
                                <img
                                  src="assets/images/calculator/paintbucket.png"
                                  class="mx-auto"
                                  alt=""
                                />
                              </div>
                              <div class="desccpik">
                                <p>Tractor Suprem Emulsion</p>
                                <strong>₹ 9.5 / SqFt</strong>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                  <div class="toggledivtonew">
                    <div class="toggledivcalspace mt-3">
                      <!-- Example Toggle -->
                      <label
                        class="relative inline-flex items-center mt-4 cursor-pointer"
                      >
                        <input type="checkbox" class="sr-only peer" />
                        <div
                          class="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-pink-600 peer-focus:ring-pink-300 dark:peer-focus:ring-pink-800 dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"
                        ></div>
                        <span class="ml-3 text-gray-500 dark:text-gray-500"
                          >Do you want to paint your ceiling?
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="calcseccardsdiv mt-5">
                <div class="calcspace">
                  <form action="" method="post">
                    <div class="sm:col-span-3">
                      <label
                        for="country"
                        class="block text-sm/6 font-medium text-gray-900"
                        >Email for Free Quotation</label
                      >
                      <div class="mt-2">
                        <div class="flex flex-col gap-4 sm:flex-row">
                          <input
                            type="text"
                            name="username"
                            id="username"
                            class="block rounded-md min-w-0 grow py-1.5 pl-3 pr-3 custsselect custshadow text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                            placeholder="Email for Free Quotation"
                          />
                          <a
                            href=""
                            class="btn btn-rounded btn-pink text-center px-3 py-2"
                            >Email Free Quotation</a
                          >
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="calcseccardsdiv mt-5">
                <div class="calcspace">
                  <div class="toggledivtonew">
                    <div class="toggledivcalspace mt-3">
                      <!-- Example Toggle -->
                      <label
                        class="relative inline-flex items-center mt-4 cursor-pointer"
                      >
                        <input
                          id="toggle-checkbox"
                          type="checkbox"
                          class="sr-only peer"
                          @change="toggleSection"
                        />
                        <div
                          class="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-pink-600 peer-focus:ring-pink-300 dark:peer-focus:ring-pink-800 dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"
                        ></div>
                        <span class="ml-3 text-gray-500 dark:text-gray-500"
                          >Select Product For Ceiling</span
                        >
                      </label>
                    </div>
                    <div id="toggle-section" class="hidden mt-5">
                      <div class="calccardtitle mb-3">
                        <h5 class="font-bold">Select Product For Walls</h5>
                      </div>
                      <div class="calccardspacemini sliderdiv text1">
                        <Swiper
                          class="catalogue"
                          :slides-per-view="1"
                          :loop="true"
                          :breakpoints="{
                            0: { slidesPerView: 1 },
                            475: { slidesPerView: 2 },
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                          }"
                          :modules="[
                            SwiperAutoplay,
                            SwiperEffectCreative,
                            SwiperNavigation,
                          ]"
                          :autoplay="{
                            delay: 3000,
                            disableOnInteraction: true,
                          }"
                          :pauseAutoplayOnMouseEnter="true"
                          :navigation="true"
                          :pagination="{
                            clickable: true,
                          }"
                        >
                          <SwiperSlide class="h-100">
                            <div class="m-4 text-center h-100">
                              <div class="row-span-66">
                                <div
                                  class="product-card bg-white custshadow p-4 rounded-lg"
                                >
                                  <div
                                    class="imgcalcdiv text-center p-5 rounded-lg overflow-hiddenrounded-md"
                                  >
                                    <img
                                      src="assets/images/calculator/paintbucket.png"
                                      class="mx-auto"
                                      alt=""
                                    />
                                  </div>
                                  <div class="desccpik">
                                    <p>Tractor Suprem Emulsion</p>
                                    <strong>₹ 9.5 / SqFt</strong>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide class="h-100">
                            <div class="m-4 text-center h-100">
                              <div class="row-span-66">
                                <div
                                  class="product-card bg-white custshadow p-4 rounded-lg"
                                >
                                  <div
                                    class="imgcalcdiv text-center p-5 rounded-lg overflow-hiddenrounded-md"
                                  >
                                    <img
                                      src="assets/images/calculator/paintbucket.png"
                                      class="mx-auto"
                                      alt=""
                                    />
                                  </div>
                                  <div class="desccpik">
                                    <p>Tractor Suprem Emulsion</p>
                                    <strong>₹ 9.5 / SqFt</strong>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide class="h-100">
                            <div class="m-4 text-center h-100">
                              <div class="row-span-66">
                                <div
                                  class="product-card bg-white custshadow p-4 rounded-lg"
                                >
                                  <div
                                    class="imgcalcdiv text-center p-5 rounded-lg overflow-hiddenrounded-md"
                                  >
                                    <img
                                      src="assets/images/calculator/paintbucket.png"
                                      class="mx-auto"
                                      alt=""
                                    />
                                  </div>
                                  <div class="desccpik">
                                    <p>Tractor Suprem Emulsion</p>
                                    <strong>₹ 9.5 / SqFt</strong>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide class="h-100">
                            <div class="m-4 text-center h-100">
                              <div class="row-span-66">
                                <div
                                  class="product-card bg-white custshadow p-4 rounded-lg"
                                >
                                  <div
                                    class="imgcalcdiv text-center p-5 rounded-lg overflow-hiddenrounded-md"
                                  >
                                    <img
                                      src="assets/images/calculator/paintbucket.png"
                                      class="mx-auto"
                                      alt=""
                                    />
                                  </div>
                                  <div class="desccpik">
                                    <p>Tractor Suprem Emulsion</p>
                                    <strong>₹ 9.5 / SqFt</strong>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide class="h-100">
                            <div class="m-4 text-center h-100">
                              <div class="row-span-66">
                                <div
                                  class="product-card bg-white custshadow p-4 rounded-lg"
                                >
                                  <div
                                    class="imgcalcdiv text-center p-5 rounded-lg overflow-hiddenrounded-md"
                                  >
                                    <img
                                      src="assets/images/calculator/paintbucket.png"
                                      class="mx-auto"
                                      alt=""
                                    />
                                  </div>
                                  <div class="desccpik">
                                    <p>Tractor Suprem Emulsion</p>
                                    <strong>₹ 9.5 / SqFt</strong>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide class="h-100">
                            <div class="m-4 text-center h-100">
                              <div class="row-span-66">
                                <div
                                  class="product-card bg-white custshadow p-4 rounded-lg"
                                >
                                  <div
                                    class="imgcalcdiv text-center p-5 rounded-lg overflow-hiddenrounded-md"
                                  >
                                    <img
                                      src="assets/images/calculator/paintbucket.png"
                                      class="mx-auto"
                                      alt=""
                                    />
                                  </div>
                                  <div class="desccpik">
                                    <p>Tractor Suprem Emulsion</p>
                                    <strong>₹ 9.5 / SqFt</strong>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        </Swiper>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- service Post section end -->
</template>
