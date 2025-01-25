<script>
export default {
  data() {
    return {
      rangeValue: 0,
    };
  },
  computed: {
    formattedRangeValue() {
      return `${this.rangeValue} Sq Ft`;
    },
  },
  methods: {
    updateRangeBackground(event) {
      const input = event.target;
      const min = input.min;
      const max = input.max;
      const value = input.value;

      input.style.background = `linear-gradient(to right, #fc2f93 ${
        ((value - min) / (max - min)) * 100
      }%, #ddd ${((value - min) / (max - min)) * 100}%)`;
    },
  },
  mounted() {
    this.$nextTick(() => {
      const range = this.$refs.rangeInput;
      if (range) {
        range.style.background = `linear-gradient(to right, #fc2f93 ${
          ((this.rangeValue - range.min) / (range.max - range.min)) * 100
        }%, #ddd ${
          ((this.rangeValue - range.min) / (range.max - range.min)) * 100
        }%)`;
      }
    });
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
              <form action="" method="post">
                <div class="sm:col-span-3">
                  <label
                    for="country"
                    class="block text-sm/6 font-medium text-gray-900"
                    >City</label
                  >
                  <div class="mt-2 grid grid-cols-1">
                    <select
                      id="country"
                      name="country"
                      autocomplete="country-name"
                      class="col-start-1 row-start-1 w-full appearance-none rounded-md custsselect py-1.5 pl-3 pr-8 text-base text-gray-900 sm:text-sm/6"
                    >
                      <option>Select Your City</option>
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                    <svg
                      class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </form>
              <div class="calcseccardsdiv mt-5">
                <div class="calcspace">
                  <div class="calccardtitle mb-3">
                    <h5 class="font-bold">Select Space</h5>
                  </div>
                  <div class="calccardspacemini">
                    <div
                      class="grid grid-cols-3 sm:grid-cols-4 grid-flow-col gap-4"
                    >
                      <div class="row-span-6">
                        <div class="calccardspacemini0 active">
                          <a
                            href="/calculatePrice"
                            class="imgcalcdiv align-center bg-gray-300 flex justify-center p-4 rounded-md"
                          >
                            <img
                              src="assets/images/calculator/homeicon2.png"
                              alt="Interior Painting"
                              width=""
                              class="br-16 max-w-full h-auto"
                            />
                          </a>
                          <div class="lablediv mt-2 text-center">
                            <p class="text-sm">Interior</p>
                          </div>
                        </div>
                      </div>
                      <div class="row-span-6">
                        <div class="calccardspacemini0">
                          <a
                            href="/exteriorcalculator"
                            class="imgcalcdiv align-center bg-gray-300 flex justify-center p-4 rounded-md"
                          >
                            <img
                              src="assets/images/calculator/homeicon.png"
                              alt="Interior Painting"
                              width=""
                              class="br-16 max-w-full h-auto"
                            />
                          </a>
                          <div class="lablediv mt-2 text-center">
                            <p class="text-sm">Exterior</p>
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
                    <h5 class="font-bold">Select Space</h5>
                  </div>
                  <div class="calccardspacemini">
                    <div class="grid grid-cols-2 sm:grid-cols-5 gap-4">
                      <div class="row-span-6">
                        <div class="calccardspacemini0">
                          <div
                            class="imgcalcdiv overflow-hidden align-center flex justify-center rounded-2xl"
                          >
                            <img
                              src="assets/images/calculator/slectspace.png"
                              alt="Interior Painting"
                              width=""
                              class="br-16 max-w-full w-full h-auto"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row-span-6">
                        <div class="calccardspacemini0">
                          <div
                            class="imgcalcdiv overflow-hidden align-center flex justify-center rounded-2xl"
                          >
                            <img
                              src="assets/images/calculator/slectspace2.png"
                              alt="Interior Painting"
                              width=""
                              class="br-16 max-w-full h-auto w-full"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row-span-6">
                        <div class="calccardspacemini0">
                          <div
                            class="imgcalcdiv overflow-hidden align-center flex justify-center rounded-2xl"
                          >
                            <img
                              src="assets/images/calculator/slectspace3.png"
                              alt="Interior Painting"
                              width=""
                              class="br-16 max-w-full h-auto w-full"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row-span-6">
                        <div class="calccardspacemini0">
                          <div
                            class="imgcalcdiv overflow-hidden align-center flex justify-center rounded-2xl"
                          >
                            <img
                              src="assets/images/calculator/slectspace4.png"
                              alt="Interior Painting"
                              width=""
                              class="br-16 max-w-full h-auto w-full"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="toggledivcalspace mt-3">
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
                        >Built-up Area ?</span
                      >
                    </label>
                  </div>
                </div>
              </div>
              <div class="calcseccardsdiv mt-5">
                <div class="calcspace">
                  <div class="calccardtitle mb-3">
                    <h5 class="font-bold">Sq Ft</h5>
                  </div>
                  <div class="calccardspacemini">
                    <div class="inptselectnumbdiv">
                      <div class="flex items-center space-x-2">
                        <input
                          type="number"
                          value="400"
                          class="w-32 custsselect rounded-md focus-visible:outline-0 p-3 text-sm"
                          min="0"
                          max="10000"
                          step="1"
                        />
                        <span class="text-sm">Sq ft</span>
                      </div>
                      <div class="flex flex-col w-4/5 mt-4 space-x-2">
                        <input
                          type="range"
                          id="range"
                          min="0"
                          max="1000"
                          v-model="rangeValue"
                          class="w-full h-2 bg-gray-300 rounded-lg appearance-none focus:ring-0"
                          style="accent-color: #fc2f93"
                          @input="updateRangeBackground"
                        />
                        <div class="flex mt-2 justify-between">
                          <span class="text-sm">0 Sq Ft</span>
                          <span id="rangeValue" class="text-sm">{{
                            formattedRangeValue
                          }}</span>
                        </div>
                      </div>
                    </div>
                    <!-- <div class="w-100">
                      <input
                        type="range"
                        id="range"
                        min="0"
                        max="1000"
                        v-model="rangeValue"
                        class="w-full h-2 bg-gray-300 rounded-lg appearance-none focus:ring-2"
                        style="accent-color: #fc2f93"
                        @input="updateRangeBackground"
                      />
                      <div>{{ formattedRangeValue }}</div>
                    </div> -->
                  </div>
                </div>
              </div>
              <div class="calcseccardsdiv mt-5">
                <div class="calcspace">
                  <div class="calccardtitle mb-3">
                    <h5 class="font-bold">Select Painting Service Type</h5>
                  </div>
                  <div class="calccardspacemini mb-2">
                    <div
                      class="grid grid-cols- sm:grid-cols-2 md:grid-cols-3 gap-4"
                    >
                      <div class="row-span-6">
                        <div
                          class="servccarddiv bg-white custshadow product-card rounded-md p-4"
                        >
                          <div class="imgcalcdiv">
                            <img
                              src="assets/images/calculator/icon1.png"
                              alt="Interior Painting"
                              width=""
                              class="br-16 max-w-full h-auto"
                            />
                          </div>
                          <div class="lablediv mt-2">
                            <h6 class="font-bold">Repainting</h6>
                            <p class="text-sm">
                              if you are looking for colour upgrade
                            </p>
                            <h6 class="text-sm font-semibold mt-3 mb-2">
                              Touch Up Pulty
                            </h6>
                            <ol class="list-decimal text-muted ps-4">
                              <li class="text-sm text-muted">Coat Primer</li>
                              <li class="text-sm text-muted">
                                Now this is a story all about how, my life got
                                flipped-turned upside down
                              </li>
                            </ol>
                            <div class="pink-txt text-end">
                              <span class="font-semibold">₹2/SqFt</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row-span-6">
                        <div
                          class="servccarddiv bg-white custshadow product-card rounded-md p-4"
                        >
                          <div class="imgcalcdiv">
                            <img
                              src="assets/images/calculator/icon1.png"
                              alt="Interior Painting"
                              width=""
                              class="br-16 max-w-full h-auto"
                            />
                          </div>
                          <div class="lablediv mt-2">
                            <h6 class="font-bold">Repainting</h6>
                            <p class="text-sm">
                              if you are looking for colour upgrade
                            </p>
                            <h6 class="text-sm font-semibold mt-3 mb-2">
                              Touch Up Pulty
                            </h6>
                            <ol class="list-decimal text-muted ps-4">
                              <li class="text-sm text-muted">Coat Primer</li>
                              <li class="text-sm text-muted">
                                Now this is a story all about how, my life got
                                flipped-turned upside down
                              </li>
                            </ol>
                            <div class="pink-txt text-end">
                              <span class="font-semibold">₹2/SqFt</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row-span-6">
                        <div
                          class="servccarddiv bg-white custshadow product-card rounded-md p-4"
                        >
                          <div class="imgcalcdiv">
                            <img
                              src="assets/images/calculator/icon1.png"
                              alt="Interior Painting"
                              width=""
                              class="br-16 max-w-full h-auto"
                            />
                          </div>
                          <div class="lablediv mt-2">
                            <h6 class="font-bold">Repainting</h6>
                            <p class="text-sm">
                              if you are looking for colour upgrade
                            </p>
                            <h6 class="text-sm font-semibold mt-3 mb-2">
                              Touch Up Pulty
                            </h6>
                            <ol class="list-decimal text-muted ps-4">
                              <li class="text-sm text-muted">Coat Primer</li>
                              <li class="text-sm text-muted">
                                Now this is a story all about how, my life got
                                flipped-turned upside down
                              </li>
                            </ol>
                            <div class="pink-txt text-end">
                              <span class="font-semibold">₹2/SqFt</span>
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
        </div>
      </div>
    </div>
  </section>
  <!-- service Post section end -->
</template>
