<script></script>

<template>
  <!-- main banner start -->
  <section
    id="blog-new"
    class="py-100 px-3 mb-50px"
    data-v-inspector="app/pages/blog.vue:5:3"
    data-v-1bac7c7d=""
  >
    <div
      class="container mx-auto"
      data-v-inspector="app/pages/blog.vue:6:5"
      data-v-1bac7c7d=""
    >
      <!-- <h1>Blog</h1> -->
      <div class="text-center">
        <h2 class="text font-bold">Painting Cost Calculator</h2>
        <p class="text-muted">Get Free Painting Quotation</p>
      </div>
    </div>
  </section>
  <!-- main banner end -->

  <!-- service Post section start -->
  <section id="service-post" class="pb-200 mt-50px px-4 px-md-0">
    <div class="container mx-auto">
      <div class="mx-auto">
        <div class="firstsecdiv">
          <div class="tecctdiv">
            <div>
              <form action="" method="post">
                <div class="flex items-center justify-between gap-4">
                  <div class="flex gap-4 basis-2/3">
                    <div class="basis-1/3">
                      <div class="mt-2 relative">
                          <!-- Dropdown 1 -->
                          <select
                            class="px-4 py-2 border w-full w-full appearance-none rounded-md custsselect py-1.5 pl-3 pr-8 text-base text-gray-900 sm:text-sm/6"
                          >
                            <option>Category</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                          </select>
                          <svg
                            class="pointer-events-none absolute top-50 right-3 col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
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
                    <!-- Dropdown 2 -->
                    <div class="basis-1/3">
                      <select
                        class="px-4 py-2 border w-full w-full appearance-none rounded-md custsselect py-1.5 pl-3 pr-8 text-base text-gray-900 sm:text-sm/6"
                      >
                        <option>Best For</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                      </select>
                    </div>
                    <div class="basis-1/3">
                      <div class="flex-grow relative">
                        <input
                          type="text"
                          placeholder="Search By Design Name"
                          class="w-full px-4 py-2 w-full w-full appearance-none rounded-md custsselect py-1.5 pl-3 pr-8 text-base text-gray-900 sm:text-sm/6"
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12.9 14.32a8 8 0 111.414-1.414l3.387 3.386a1 1 0 01-1.415 1.415l-3.386-3.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <!-- Search Input -->
                  </div>

                  <!-- Icons -->
                  <div class="flex items-center gap-4">
                    <button
                      class="p-2 text-gray-500 rounded-lg hover:bg-pink-100 focus:ring-2 focus:ring-blue-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zM4 10a1 1 0 011-1h12a1 1 0 110 2H5a1 1 0 01-1-1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                    <button
                      class="p-2 text-gray-500 rounded-lg hover:bg-pink-100 focus:ring-2 focus:ring-blue-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6 3a1 1 0 011-1h6a1 1 0 011 1v2H6V3zM4 8h12a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2v-6a2 2 0 012-2zm6 3a1 1 0 10-2 0v2a1 1 0 002 0v-2z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
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
                            href=""
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
                            href="/exterior-cal1"
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
          <!-- nextpre -->
          <div class="w-full max-w-4xl mx-auto mt-9">
            <!-- Carousel Container -->
            <div class="relative">
              <!-- Carousel Items -->
              <div class="flex justify-between align-center">
                <div class="buttonsnextprev invisible">
                  <a
                    href=""
                    id="prevBtn"
                    class="bg-white text-gray-800 border rounded-full px-8 py-2 focus:outline-none hover:bg-gray-100"
                  >
                    Prev
                  </a>
                </div>
                <div
                  id="carousel"
                  class="flex items-center gap-2 transition-transform duration-300 ease-in-out"
                  style="transform: translateX(0)"
                >
                  <a
                    href="/calculator"
                    class="w-3 h-3 bg-pink-500 rounded-full focus:outline-none"
                    onclick="goToSlide(0)"
                  ></a>
                  <a
                    href="/calculator-2"
                    class="w-3 h-3 bg-gray-300 rounded-full focus:outline-none"
                    onclick="goToSlide(1)"
                  ></a>
                  <a
                    href="/calculator-3"
                    class="w-3 h-3 bg-gray-300 rounded-full focus:outline-none"
                    onclick="goToSlide(2)"
                  ></a>
                </div>
                <div class="buttonsnextprev">
                  <a
                    href="/calculator-2"
                    id="nextBtn"
                    class="btn-pink btn-rounded text-white border px-8 px-4 py-2 focus:outline-none"
                  >
                    Next
                  </a>
                </div>
              </div>
              <!-- Navigation Buttons -->
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-6xl mx-auto">
        <div class="textcontentdiv mt-9 pt-100">
          <h2 class="font-bold text-center">
            More About Home Exterior Painting
          </h2>
          <p class="text-sm text-gray-500 mt-3">
            But nevertheless, Exterior Painting is more really difficult as
            compared to what it looks. Which means that it happens to be with
            great pleasure that many Household painters make up your mind that
            it is now time to hire an Exterior Painting Services to seek the
            services of the job. Let us really know what painting Exterior
            Painting Company do, would you like to hire them? ... Tips sharing
            by ColourDrive.
          </p>
          <hr class="my-5" />
          <div class="text-sm text-gray-700 mt-3">
            <div class="calcseccardsdiv mt-5">
              <div class="calcspace">
                <div class="calccardtitle mb-3">
                  <h5 class="font-semibold">Standard Procedure:</h5>
                </div>
                <div class="calccardspacemini mb-2">
                  <div
                    class="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    <div class="row-span-6 h-full">
                      <div
                        class="servccarddiv bg-white h-full flex gap-2 custshadow product-card rounded-md p-4"
                      >
                        <div class="imgcalcdiv rounded">
                          <img
                            src="assets/images/calculator/icon1.png"
                            alt="Interior Painting"
                            width=""
                            class="max-w-full h-auto"
                          />
                        </div>
                        <div class="lablediv">
                          <h6 class="font-bold pink-txt mb-2">
                            Exterior repainting procedure
                          </h6>
                          <p class="text-sm text-gray-500">
                            Exterior repainting procedure includes exterior wall
                            cleaning by jet machine, crack filling by Dr. Fixit
                            then one coat of exterior primer followed by two
                            coat of paint.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="row-span-6 h-full">
                      <div
                        class="servccarddiv h-full bg-white flex gap-2 custshadow product-card rounded-md p-4"
                      >
                        <div class="imgcalcdiv rounded">
                          <img
                            src="assets/images/calculator/icn15.png"
                            alt="Interior Painting"
                            width=""
                            class="max-w-full h-auto"
                          />
                        </div>
                        <div class="lablediv">
                          <h6 class="font-bold pink-txt mb-2">
                            Exterior fresh painting procedure
                          </h6>
                          <p class="text-sm text-gray-500">
                            Exterior fresh painting procedure includes one coat
                            of exterior primer and two coat of paint.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr class="my-5" />
          <h5 class="font-semibold">
            What Is Actually an Exterior Painting Services company?
          </h5>
          <p class="text-sm text-gray-500 mt-3">
            An Exterior Painting contractor can work as a sub-Exterior Paint
            Colours company, or sub-contractor, under a general Residential
            Exterior Painting contractor , or can retain the services of itself
            out directly to the owner of the house. For the most part, the
            painting contractor is a relatively smaller sized operation, ranging
            from the one-man exceptional proprietor up to 25 or 45 painters
            doing work for an insignificant company.
          </p>
          <hr class="my-5" />
          <h5 class="font-semibold">What Will ColourDrive Do?</h5>
          <p class="text-sm text-gray-500 mt-3">
            Virtually all painting contractors will take on any kind of
            profession, from merely painting you are your window trim to a
            full-house paint profession. But let us believe that they are
            painting them your exterior. You can actually usually expect to have
            from ColourDrive
          </p>
          <ul class="list-disc custom-list ps-6 mt-3">
            <li class="text-sm mb-1 text-gray-500">
              Coverage of all destinations that will be multi-colored, including
              floors, residential windows, kitchen space counters, storage
              units, etc.
            </li>
            <li class="text-sm mb-1 text-gray-500">
              Inconsequential surface getting prepared prior to repainting,
              which means illuminate sanding and scraping away do will manage to
              win paint, tapping in a few overhanging nails, cleaning off
              woodworking, with the use of sackcloth in some areas. The
              important thing here is “minor,” as the service provider will
              assume that the accommodate is mostly in Exterior Fresh Painting
              overall condition.
            </li>
            <li class="text-sm mb-1 text-gray-500">
              Reduction of electrical plates, equipment and lighting, doors, and
              other obstructions.
            </li>
            <li class="text-sm mb-1 text-gray-500">
              Moving accessories away for better access to the elements to be
              painted. This is such really a painter’s job, which means you
              would need to confirm this, in the beginning, such as Painting The
              Outside Of Your House. Priming new drywall or alternatively the
              current paint with an exterior latex primer.
            </li>
            <li class="text-sm mb-1 text-gray-500">
              Not one but two colour coats of exterior furnishing latex paint on
              the walls.
            </li>
            <li class="text-sm mb-1 text-gray-500">
              Two or three coats of ceiling paint. Painting on the trim and
              molding (baseboards, windowpane accessories, window mentions, etc
              .)
            </li>
            <li class="text-sm mb-1 text-gray-500">
              Touchups of greatly noticed spots.
            </li>
            <li class="text-sm mb-1 text-gray-500">
              Cleanups for unpleasant incidents ( no matter how good the payment
              or reimbursement with drop-cloths, a handful of drips will
              happen).
            </li>
            <li class="text-sm mb-1 text-gray-500">
              A final evaluation between Express Exterior Painting foreman and
              home-owner.
            </li>
          </ul>
          <hr class="my-5" />
          <h5 class="font-semibold">Our exterior house painting procedure</h5>
          <p class="text-sm text-gray-500 mt-3">
            Our first and fore mostly priority is to always make sure we don’t
            totally affect your day. During the time you book your painting on
            the job, our immediate down line will set up a get in touch with
            before your assignment date to go over all suggestions:
          </p>
          <ul class="list-disc custom-list ps-6 mt-3">
            <li class="text-sm mb-1 text-gray-500">
              Confirm demonstrate colour and suggestions,
            </li>
            <li class="text-sm mb-1 text-gray-500">
              Ask the prospective cardholder to move patio home furnishings and
              potted plants, and
            </li>
            <li class="text-sm mb-1 text-gray-500">
              Respond to the questions you have about your repainting project.
            </li>
          </ul>
          <p class="text-sm text-gray-500 mt-3">
            Check once our Free Exterior quotation for Per sqft rates for
            Exterior Painting, Dustless Exterior Painting and Exterior Fresh
            Painting, Just mark your requirement on support@colourdrive.in
          </p>
        </div>
        <div class="calccardspacemini sliderdiv text1 pt-100 pt-100">
          <h2 class="text-center font-bold mb-5">
            Best Interior Paint Products
          </h2>
          <Swiper
            class="catalogue"
            :slides-per-view="1"
            :loop="true"
            :breakpoints="{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }"
            :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation]"
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
              <div class="m-4 bg-pink rounded-2xl text-center p-4 h-100">
                <div class="calccardspacemini00 flex gap-3">
                  <div
                    href=""
                    class="imgcalcdiv bg-white align-center flex justify-center basis-1/3 items-center p-4 rounded-md"
                  >
                    <img
                      src="assets/images/calculator/paintbucket.png"
                      alt="Interior Painting"
                      width=""
                      class="br-16 max-w-full h-auto"
                    />
                  </div>
                  <div class="lablediv content-center">
                    <p class="text-md text-white text-start">
                      Apcolite Premium Emulsion gives matt and satin finish to
                      your walls. It works on all wall conditions. Apcolite
                      Premium Emulsion is having anti fungus qualities. Apcolite
                      Premium Emulsion is type of Interior Paints which contains
                      long lasting film due to that your house looks new for
                      long time. It is semi washable. Apcolite Premium Emulsion
                      contains special stainguard technology that keeps your
                      walls stain free.
                    </p>
                  </div>
                </div>
                <!-- <div
                            class="bg-white shadow-mds p-3 sm:p-5 rounded-2xl relative h-100"
                          >
                          </div> -->
              </div>
            </SwiperSlide>
            <SwiperSlide class="h-100">
              <div class="m-4 bg-pink rounded-2xl text-center p-4 h-100">
                <div class="calccardspacemini00 flex gap-3">
                  <div
                    href=""
                    class="imgcalcdiv bg-white align-center flex justify-center basis-1/3 items-center p-4 rounded-md"
                  >
                    <img
                      src="assets/images/calculator/paintbucket.png"
                      alt="Interior Painting"
                      width=""
                      class="br-16 max-w-full h-auto"
                    />
                  </div>
                  <div class="lablediv content-center">
                    <p class="text-md text-white text-start">
                      Apcolite Premium Emulsion gives matt and satin finish to
                      your walls. It works on all wall conditions. Apcolite
                      Premium Emulsion is having anti fungus qualities. Apcolite
                      Premium Emulsion is type of Interior Paints which contains
                      long lasting film due to that your house looks new for
                      long time. It is semi washable. Apcolite Premium Emulsion
                      contains special stainguard technology that keeps your
                      walls stain free.
                    </p>
                  </div>
                </div>
                <!-- <div
                            class="bg-white shadow-mds p-3 sm:p-5 rounded-2xl relative h-100"
                          >
                          </div> -->
              </div>
            </SwiperSlide>
            <SwiperSlide class="h-100">
              <div class="m-4 bg-pink rounded-2xl text-center p-4 h-100">
                <div class="calccardspacemini00 flex gap-3">
                  <div
                    href=""
                    class="imgcalcdiv bg-white align-center flex justify-center basis-1/3 items-center p-4 rounded-md"
                  >
                    <img
                      src="assets/images/calculator/paintbucket.png"
                      alt="Interior Painting"
                      width=""
                      class="br-16 max-w-full h-auto"
                    />
                  </div>
                  <div class="lablediv content-center">
                    <p class="text-md text-white text-start">
                      Apcolite Premium Emulsion gives matt and satin finish to
                      your walls. It works on all wall conditions. Apcolite
                      Premium Emulsion is having anti fungus qualities. Apcolite
                      Premium Emulsion is type of Interior Paints which contains
                      long lasting film due to that your house looks new for
                      long time. It is semi washable. Apcolite Premium Emulsion
                      contains special stainguard technology that keeps your
                      walls stain free.
                    </p>
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
        <section id="faq" class="px-4 pt-100">
          <div class="container mx-auto">
            <h2 class="text-center font-bold mb-5">FAQs</h2>
            <div class="accordion flex flex-col items-center justify-center">
              <!--  Panel 1  -->
              <div class="w-full lg:w-1/2 shadow11 mb-4">
                <input
                  type="checkbox"
                  name="panel"
                  id="panel-1"
                  class="hidden"
                />
                <label
                  for="panel-1"
                  class="relative block bg-white text-black p-4 rounded-2xl"
                  >Questions text goes here</label
                >
                <div class="accordion__content overflow-hidden">
                  <p class="accordion__body p-4 text-black" id="panel1">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen.
                  </p>
                </div>
              </div>
              <!--  Panel 2  -->
              <div class="w-full lg:w-1/2 shadow11 mb-4">
                <input
                  type="checkbox"
                  name="panel"
                  id="panel-2"
                  class="hidden"
                />
                <label
                  for="panel-2"
                  class="relative block bg-white text-black p-4 rounded-2xl"
                  >Questions text goes here</label
                >
                <div class="accordion__content overflow-hidden">
                  <p class="accordion__body p-4 text-black" id="panel1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iusto possimus at a cum saepe molestias modi illo facere
                    ducimus voluptatibus praesentium deleniti fugiat ab error
                    quia sit perspiciatis velit necessitatibus.Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit. Lorem ipsum dolor
                    sit amet.
                  </p>
                </div>
              </div>
              <!--  Panel 3  -->
              <div class="w-full lg:w-1/2 shadow11 mb-4">
                <input
                  type="checkbox"
                  name="panel"
                  id="panel-3"
                  class="hidden"
                />
                <label
                  for="panel-3"
                  class="relative block bg-white text-black p-4 rounded-2xl"
                  >Questions text goes here</label
                >
                <div class="accordion__content overflow-hidden">
                  <p class="accordion__body p-4 text-black" id="panel1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iusto possimus at a cum saepe molestias modi illo facere
                    ducimus voluptatibus praesentium deleniti fugiat ab error
                    quia sit perspiciatis velit necessitatibus.Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit. Lorem ipsum dolor
                    sit amet.
                  </p>
                </div>
              </div>
              <!--  Panel 4  -->
              <div class="w-full lg:w-1/2 shadow11 mb-4">
                <input
                  type="checkbox"
                  name="panel"
                  id="panel-4"
                  class="hidden"
                />
                <label
                  for="panel-4"
                  class="relative block bg-white text-black p-4 rounded-2xl"
                  >Questions text goes here</label
                >
                <div class="accordion__content overflow-hidden">
                  <p class="accordion__body p-4 text-black" id="panel1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iusto possimus at a cum saepe molestias modi illo facere
                    ducimus voluptatibus praesentium deleniti fugiat ab error
                    quia sit perspiciatis velit necessitatibus.Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit. Lorem ipsum dolor
                    sit amet.
                  </p>
                </div>
              </div>
              <!--  Panel 5  -->
              <div class="w-full lg:w-1/2 shadow11 mb-4">
                <input
                  type="checkbox"
                  name="panel"
                  id="panel-5"
                  class="hidden"
                />
                <label
                  for="panel-5"
                  class="relative block bg-white text-black p-4 rounded-2xl"
                  >Questions text goes here</label
                >
                <div class="accordion__content overflow-hidden">
                  <p class="accordion__body p-4 text-black" id="panel1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iusto possimus at a cum saepe molestias modi illo facere
                    ducimus voluptatibus praesentium deleniti fugiat ab error
                    quia sit perspiciatis velit necessitatibus.Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit. Lorem ipsum dolor
                    sit amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
  <!-- service Post section end -->
</template>

<style scoped>
@import "../assets/css/service.css";
</style>
