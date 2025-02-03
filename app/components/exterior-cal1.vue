<script setup></script>

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
                        <div class="calccardspacemini0">
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
                        <div class="calccardspacemini0 active">
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
                    <h5 class="font-bold">Select No. of Floors</h5>
                  </div>
                  <div class="calccardspacemini">
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <div class="row-span-612">
                        <div class="selectoptdiv">
                          <label class="w-full flex items-center">
                            <input type="checkbox" class="hidden peer" />
                            <span
                              class="px-4 py-3 w-full text-center text-sm font-medium text-gray-600 bg-pink-100 border border-pink-100 rounded-md cursor-pointer peer-checked:bg-pink-600 hover:bg-pink-500 hover:text-white ease-in-out peer-checked:text-white peer-checked:border-pink-600"
                            >
                              Ground Floor
                            </span>
                          </label>
                        </div>
                      </div>
                      <div class="row-span-612">
                        <div class="selectoptdiv">
                          <label class="w-full flex items-center">
                            <input type="checkbox" class="hidden peer" />
                            <span
                              class="px-4 py-3 w-full text-center text-sm font-medium text-gray-600 bg-pink-100 border border-pink-100 rounded-md cursor-pointer peer-checked:bg-pink-600 hover:bg-pink-500 hover:text-white ease-in-out peer-checked:text-white peer-checked:border-pink-600"
                            >
                              G + 1 Floor
                            </span>
                          </label>
                        </div>
                      </div>
                      <div class="row-span-612">
                        <div class="selectoptdiv">
                          <label class="w-full flex items-center">
                            <input type="checkbox" class="hidden peer" />
                            <span
                              class="px-4 py-3 w-full text-center text-sm font-medium text-gray-600 bg-pink-100 border border-pink-100 rounded-md cursor-pointer peer-checked:bg-pink-600 hover:bg-pink-500 hover:text-white ease-in-out peer-checked:text-white peer-checked:border-pink-600"
                            >
                              G + 2 Floor
                            </span>
                          </label>
                        </div>
                      </div>
                      <div class="row-span-612">
                        <div class="selectoptdiv">
                          <label class="w-full flex items-center">
                            <input type="checkbox" class="hidden peer" />
                            <span
                              class="px-4 py-3 w-full text-center text-sm font-medium text-gray-600 bg-pink-100 border border-pink-100 rounded-md cursor-pointer peer-checked:bg-pink-600 hover:bg-pink-500 hover:text-white ease-in-out peer-checked:text-white peer-checked:border-pink-600"
                            >
                              G + 3 Floor
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="calcseccardsdiv mt-5">
                <div class="calccardspacemini">
                  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div class="calcspace">
                      <div class="calccardtitle mb-3">
                        <h5 class="font-semibold">Plot Length (Sq Ft)</h5>
                      </div>
                      <div class="calccardspacemini">
                        <div class="mt-2">
                          <div
                            class="flex custsselect items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600"
                          >
                            <input
                              type="number"
                              name="username"
                              id="username"
                              class="block sqft-w grow py-2.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                              placeholder="Ex: 100"
                            />
                            <div
                              class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"
                            >
                              Sqft
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="calcspace">
                      <div class="calccardtitle mb-3">
                        <h5 class="font-semibold">Plot Breadth (Sq Ft)</h5>
                      </div>
                      <div class="calccardspacemini">
                        <div class="mt-2">
                          <div
                            class="flex custsselect items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600"
                          >
                            <input
                              type="number"
                              name="username"
                              id="username"
                              class="block sqft-w grow py-2.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                              placeholder="Ex: 100"
                            />
                            <div
                              class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"
                            >
                              Sqft
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="calcspace">
                      <div class="calccardtitle mb-3">
                        <h5 class="font-semibold">Plot Fre Space (Sq Ft)</h5>
                      </div>
                      <div class="calccardspacemini">
                        <div class="mt-2">
                          <div
                            class="flex custsselect items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600"
                          >
                            <input
                              type="number"
                              name="username"
                              id="username"
                              class="block sqft-w grow py-2.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                              placeholder="Ex: 100"
                            />
                            <div
                              class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"
                            >
                              Sqft
                            </div>
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
                    <h5 class="font-bold">Select Painting Service Type</h5>
                  </div>
                  <div class="calccardspacemini mb-2">
                    <div
                      class="grid grid-cols- sm:grid-cols-2 md:grid-cols-3 gap-4"
                    >
                      <div class="row-span-6">
                        <div
                          class="servccarddiv bg-white custshadow rounded-md p-4"
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
                          </div>
                        </div>
                      </div>
                      <div class="row-span-6">
                        <div
                          class="servccarddiv bg-white custshadow rounded-md p-4"
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

<style scoped>
@import "../assets/css/service.css";
</style>
