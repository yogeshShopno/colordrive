<script setup></script>

<template>
  <!-- service Post section start -->
  <section id="service-post" class="mt-50px px-4 px-md-0">
    <div class="container mx-auto">
      <div class="max-w-4xl mx-auto">
        <div class="firstsecdiv">
          <div class="bg-white mainboxshadoww rounded-2xl p-0">
            <div>
              <div class="calcseccardsdiv mt-5">
                <div class="calcspace">
                  <div class="calccardtitle flex justify-between mb-3">
                    <h5 class="font-bold">
                      Select surface needs waterproofing
                    </h5>
                    <div class="searchdiv">
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                  </div>
                  <div class="calccardspacemini sliderdiv text1">
                    <Swiper
                      class="catalogue"
                      :slides-per-view="1"
                      :loop="true"
                      :breakpoints="{
                        0: { slidesPerView: 2 }, 
                        575: { slidesPerView: 3 }, 
                        768: { slidesPerView: 4 },
                        1024: { slidesPerView: 5 },
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
                          <div class="calccardspacemini0">
                            <a
                              href=""
                              class="imgcalcdiv align-center bg-gray-300 flex justify-center p-4 rounded-md"
                            >
                              <img
                                src="assets/images/calculator/icn1.png"
                                alt="Interior Painting"
                                width=""
                                class="br-16 max-w-full h-auto"
                              />
                            </a>
                            <div class="lablediv mt-2 text-center">
                              <p class="text-sm">Roof ( Terrace)</p>
                            </div>
                          </div>
                          <!-- <div
                            class="bg-white shadow-mds p-3 sm:p-5 rounded-2xl relative h-100"
                          >
                          </div> -->
                        </div>
                      </SwiperSlide>
                      <SwiperSlide class="h-100">
                        <div class="m-4 text-center h-100">
                          <div class="calccardspacemini0">
                            <a
                              href=""
                              class="imgcalcdiv align-center bg-gray-300 flex justify-center p-4 rounded-md"
                            >
                              <img
                                src="assets/images/calculator/icn2.png"
                                alt="Interior Painting"
                                width=""
                                class="br-16 max-w-full h-auto"
                              />
                            </a>
                            <div class="lablediv mt-2 text-center">
                              <p class="text-sm">Bathrooms</p>
                            </div>
                          </div>
                          <!-- <div
                            class="bg-white shadow-mds p-3 sm:p-5 rounded-2xl relative h-100"
                          >
                          </div> -->
                        </div>
                      </SwiperSlide>
                      <SwiperSlide class="h-100">
                        <div class="m-4 text-center h-100">
                          <div class="calccardspacemini0">
                            <a
                              href=""
                              class="imgcalcdiv align-center bg-gray-300 flex justify-center p-4 rounded-md"
                            >
                              <img
                                src="assets/images/calculator/icn3.png"
                                alt="Interior Painting"
                                width=""
                                class="br-16 max-w-full h-auto"
                              />
                            </a>
                            <div class="lablediv mt-2 text-center">
                              <p class="text-sm">Internal Walls</p>
                            </div>
                          </div>
                          <!-- <div
                            class="bg-white shadow-mds p-3 sm:p-5 rounded-2xl relative h-100"
                          >
                          </div> -->
                        </div>
                      </SwiperSlide>
                      <SwiperSlide class="h-100">
                        <div class="m-4 text-center h-100">
                          <div class="calccardspacemini0">
                            <a
                              href=""
                              class="imgcalcdiv align-center bg-gray-300 flex justify-center p-4 rounded-md"
                            >
                              <img
                                src="assets/images/calculator/icn4.png"
                                alt="Interior Painting"
                                width=""
                                class="br-16 max-w-full h-auto"
                              />
                            </a>
                            <div class="lablediv mt-2 text-center">
                              <p class="text-sm">External Walls</p>
                            </div>
                          </div>
                          <!-- <div
                            class="bg-white shadow-mds p-3 sm:p-5 rounded-2xl relative h-100"
                          >
                          </div> -->
                        </div>
                      </SwiperSlide>
                      <SwiperSlide class="h-100">
                        <div class="m-4 text-center h-100">
                          <div class="calccardspacemini0">
                            <a
                              href=""
                              class="imgcalcdiv align-center bg-gray-300 flex justify-center p-4 rounded-md"
                            >
                              <img
                                src="assets/images/calculator/icn5.png"
                                alt="Interior Painting"
                                width=""
                                class="br-16 max-w-full h-auto"
                              />
                            </a>
                            <div class="lablediv mt-2 text-center">
                              <p class="text-sm">External Walls</p>
                            </div>
                          </div>
                          <!-- <div
                            class="bg-white shadow-mds p-3 sm:p-5 rounded-2xl relative h-100"
                          >
                          </div> -->
                        </div>
                      </SwiperSlide> 
                      <SwiperSlide class="h-100">
                        <div class="m-4 text-center h-100">
                          <div class="calccardspacemini0">
                            <a
                              href=""
                              class="imgcalcdiv align-center bg-gray-300 flex justify-center p-4 rounded-md"
                            >
                              <img
                                src="assets/images/calculator/icn4.png"
                                alt="Interior Painting"
                                width=""
                                class="br-16 max-w-full h-auto"
                              />
                            </a>
                            <div class="lablediv mt-2 text-center">
                              <p class="text-sm">External Walls</p>
                            </div>
                          </div>
                          <!-- <div
                            class="bg-white shadow-mds p-3 sm:p-5 rounded-2xl relative h-100"
                          >
                          </div> -->
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
              <div class="calcseccardsdiv mt-5">
                <div class="calcspace">
                  <div class="calccardtitle mb-3">
                    <h5 class="font-bold">Type of construction</h5>
                  </div>
                </div>
                <div class="toggledivcalspace">
                  <div class="mt-4 flex gap-4 items-center space-y-6">
                    <div class="flex items-center gap-x-3">
                      <input
                        id="roof-terrace"
                        name="construction-type"
                        type="radio"
                        checked
                        class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-pink-600 checked:bg-pink-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                      />
                      <label
                        for="roof-terrace"
                        class="block text-sm/6 font-medium text-gray-900"
                        >Roof (Terrace)</label
                      >
                    </div>
                    <div
                      class="flex mt-0 items-center gap-x-3"
                      style="margin: 0"
                    >
                      <input
                        id="under-construction"
                        name="construction-type"
                        type="radio"
                        class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-pink-600 checked:bg-pink-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                      />
                      <label
                        for="under-construction"
                        class="block text-sm/6 font-medium text-gray-900"
                        >Under Construction</label
                      >
                    </div>
                  </div>
                </div>
              </div>

              <div class="calcseccardsdiv mt-5">
                <div class="calcspace">
                  <div class="calccardtitle mb-3">
                    <h5 class="font-bold">Age of building</h5>
                  </div>
                </div>
                <div class="toggledivcalspace">
                  <div class="mt-4 flex gap-4 items-center space-y-6">
                    <div class="flex items-center gap-x-3">
                      <input
                        id="age-0-15"
                        name="building-age"
                        type="radio"
                        checked
                        class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-pink-600 checked:bg-pink-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                      />
                      <label
                        for="age-0-15"
                        class="block text-sm/6 font-medium text-gray-900"
                        >0 - 15 Years</label
                      >
                    </div>
                    <div
                      class="flex mt-0 items-center gap-x-3"
                      style="margin: 0"
                    >
                      <input
                        id="age-15-plus"
                        name="building-age"
                        type="radio"
                        class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-pink-600 checked:bg-pink-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                      />
                      <label
                        for="age-15-plus"
                        class="block text-sm/6 font-medium text-gray-900"
                        >15+ Years</label
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="calcseccardsdiv mt-5">
                <div class="calcspace">
                  <div class="calccardtitle mb-3">
                    <h5 class="font-bold">Select roof surface made of</h5>
                  </div>
                  <div class="calccardspacemini">
                    <div
                      class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4"
                    >
                      <div class="row-span-6">
                        <div class="calccardspacemini0">
                          <a
                            href=""
                            class="imgcalcdiv align-center bg-gray-300 flex justify-center p-4 rounded-md"
                          >
                            <img
                              src="assets/images/calculator/icn6.png"
                              alt="Interior Painting"
                              width=""
                              class="br-16 max-w-full h-auto"
                            />
                          </a>
                          <div class="lablediv mt-2 text-center">
                            <p class="text-sm">Clay tiles</p>
                          </div>
                        </div>
                      </div>
                      <div class="row-span-6">
                        <div class="calccardspacemini0">
                          <a
                            href=""
                            class="imgcalcdiv align-center bg-gray-300 flex justify-center p-4 rounded-md"
                          >
                            <img
                              src="assets/images/calculator/icn5.png"
                              alt="Interior Painting"
                              width=""
                              class="br-16 max-w-full h-auto rounded"
                            />
                          </a>
                          <div class="lablediv mt-2 text-center">
                            <p class="text-sm">Tiles</p>
                          </div>
                        </div>
                      </div>
                      <div class="row-span-6">
                        <div class="calccardspacemini0">
                          <a
                            href=""
                            class="imgcalcdiv align-center bg-gray-300 flex justify-center p-4 rounded-md"
                          >
                            <img
                              src="assets/images/calculator/icn8.png"
                              alt="Interior Painting"
                              width=""
                              class="br-16 max-w-full h-auto"
                            />
                          </a>
                          <div class="lablediv mt-2 text-center">
                            <p class="text-sm">Cement/Screed/IPS</p>
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
                    <h5 class="font-bold">
                      Enter the area in sqft or dimension of the surface
                    </h5>
                  </div>
                </div>
                <div class="toggledivcalspace">
                  <div class="mt-4 flex gap-4 flex-col sm:flex-row items-start sm:items-center space-y-6">
                    <div class="flex items-center gap-x-3">
                      <input
                        id="surface1"
                        name="surface"
                        type="radio"
                        checked
                        class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-pink-600 checked:bg-pink-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                      />
                      <label
                        for="surface1"
                        class="block text-sm/6 font-medium text-gray-900"
                        >Dimension ( Length * Breadth )</label
                      >
                    </div>
                    <div
                      class="flex mt-0 items-center gap-x-3"
                      style="margin: 0"
                    >
                      <input
                        id="surface2"
                        name="surface"
                        type="radio"
                        class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-pink-600 checked:bg-pink-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                      />
                      <label
                        for="surface2"
                        class="block text-sm/6 font-medium text-gray-900"
                        >Area in Sqft</label
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="calcseccardsdiv mt-5">
                <div class="calcspace">
                  <div class="calccardspacemini">
                    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      <div class="inptselectnumbdiv">
                        <div class="calccardtitle mb-3">
                          <h5 class="font-bold">Length</h5>
                        </div>
                        <div class="flex items-center space-x-2">
                          <input
                            type="number"
                            value="400"
                            class="w-full custsselect rounded-md p-3 text-sm"
                            min="0"
                            max="10000"
                            step="1"
                          />
                        </div>
                      </div>
                      <div class="inptselectnumbdiv">
                        <div class="calccardtitle mb-3">
                          <h5 class="font-bold">Breadth</h5>
                        </div>
                        <div class="flex items-center space-x-2">
                          <input
                            type="number"
                            value="400"
                            class="w-full custsselect rounded-md p-3 text-sm"
                            min="0"
                            max="10000"
                            step="1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="calcseccardsdiv mt-5">
                <div class="calcspace">
                  <div class="calccardtitle mb-3">
                    <h5 class="font-bold">
                      Any waterproofing done on the roof earlier?
                    </h5>
                  </div>
                  <div class="calccardspacemini">
                    <div
                      class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4"
                    >
                      <div class="row-span-6">
                        <div class="calccardspacemini0">
                          <a
                            href=""
                            class="imgcalcdiv align-center bg-gray-300 flex justify-center p-4 rounded-md"
                          >
                            <img
                              src="assets/images/calculator/ion9.png"
                              alt="Interior Painting"
                              width=""
                              class="br-16 max-w-full h-auto"
                            />
                          </a>
                          <div class="lablediv mt-2 text-center">
                            <p class="text-sm">No</p>
                          </div>
                        </div>
                      </div>
                      <div class="row-span-6">
                        <div class="calccardspacemini0">
                          <a
                            href=""
                            class="imgcalcdiv align-center bg-gray-300 flex justify-center p-4 rounded-md"
                          >
                            <img
                              src="assets/images/calculator/ion10.png"
                              alt="Interior Painting"
                              width=""
                              class="br-16 max-w-full h-auto rounded"
                            />
                          </a>
                          <div class="lablediv mt-2 text-center">
                            <p class="text-sm">YES, Bitumen</p>
                          </div>
                        </div>
                      </div>
                      <div class="row-span-6">
                        <div class="calccardspacemini0">
                          <a
                            href=""
                            class="imgcalcdiv align-center bg-gray-300 flex justify-center p-4 rounded-md"
                          >
                            <img
                              src="assets/images/calculator/ion11.png"
                              alt="Interior Painting"
                              width=""
                              class="br-16 max-w-full h-auto"
                            />
                          </a>
                          <div class="lablediv mt-2 text-center">
                            <p class="text-sm">YES, Coating</p>
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
                    <h5 class="font-bold">
                      Any waterproofing done on the roof earlier?
                    </h5>
                  </div>
                  <div class="calccardspacemini">
                    <div
                      class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4"
                    >
                      <div class="row-span-6">
                        <div class="calccardspacemini0">
                          <a
                            href=""
                            class="imgcalcdiv align-center bg-gray-300 flex justify-center p-4 rounded-md"
                          >
                            <img
                              src="assets/images/calculator/icn12.png"
                              alt="Interior Painting"
                              width=""
                              class="br-16 max-w-full h-auto"
                            />
                          </a>
                          <div class="lablediv mt-2 text-center">
                            <p class="text-sm">
                              No Cracks and Hollowness Observed
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="row-span-6">
                        <div class="calccardspacemini0">
                          <a
                            href=""
                            class="imgcalcdiv align-center bg-gray-300 flex justify-center p-4 rounded-md"
                          >
                            <img
                              src="assets/images/calculator/icn13.png"
                              alt="Interior Painting"
                              width=""
                              class="br-16 max-w-full h-auto rounded"
                            />
                          </a>
                          <div class="lablediv mt-2 text-center">
                            <p class="text-sm">
                              Minor Cracks and Hollowness Observed
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="row-span-6">
                        <div class="calccardspacemini0">
                          <a
                            href=""
                            class="imgcalcdiv align-center bg-gray-300 flex justify-center p-4 rounded-md"
                          >
                            <img
                              src="assets/images/calculator/icn14.png"
                              alt="Interior Painting"
                              width=""
                              class="br-16 max-w-full h-auto"
                            />
                          </a>
                          <div class="lablediv mt-2 text-center">
                            <p class="text-sm">
                              Major Cracks and Hollowness Observed
                            </p>
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
                    <h5 class="font-bold">
                      Any water logging or ponding observed on the roof?
                    </h5>
                  </div>
                </div>
                <div class="toggledivcalspace">
                  <div class="mt-4 flex gap-4 flex-col sm:flex-row items-start sm:items-center space-y-6">
                    <div class="flex items-center gap-x-3">
                      <input
                        id="obs1"
                        name="obs"
                        type="radio"
                        checked
                        class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-pink-600 checked:bg-pink-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                      />
                      <label
                        for="obs1"
                        class="block text-sm/6 font-medium text-gray-900"
                        >No Water Logging</label
                      >
                    </div>
                    <div
                      class="flex mt-0 items-center gap-x-3"
                      style="margin: 0"
                    >
                      <input
                        id="obs2"
                        name="obs"
                        type="radio"
                        class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-pink-600 checked:bg-pink-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                      />
                      <label
                        for="obs2"
                        class="block text-sm/6 font-medium text-gray-900"
                        >Severe Water Logging</label
                      >
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

<style scoped>
@import "../assets/css/service.css";
</style>
