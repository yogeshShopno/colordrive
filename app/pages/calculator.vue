<script setup>

</script>


<template>
  <!-- main banner start -->
  <section id="blog-new" class="py-100 px-3 mb-50px" data-v-inspector="app/pages/blog.vue:5:3" data-v-1bac7c7d="">
    <div class="container mx-auto" data-v-inspector="app/pages/blog.vue:6:5" data-v-1bac7c7d=""><!-- <h1>Blog</h1> -->
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
      <div class="max-w-4xl mx-auto">
        <div class="firstsecdiv">
          <div class="bg-white mainboxshadow rounded-2xl p-5">
            <div>
              <form action="" method="post">
                <div class="sm:col-span-3">
                  <label for="country" class="block text-sm/6 font-medium text-gray-900">City</label>
                  <div class="mt-2 grid grid-cols-1">
                    <select id="country" name="country" autocomplete="country-name"
                      class="col-start-1 row-start-1 w-full appearance-none rounded-md custsselect py-1.5 pl-3 pr-8 text-base text-gray-900 sm:text-sm/6">
                      <option>Select Your City</option>
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                    <svg
                      class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                      viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
                      <path fill-rule="evenodd"
                        d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                        clip-rule="evenodd" />
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
                    <div class="grid grid-cols-3 sm:grid-cols-4 grid-flow-col gap-4">
                      <div class="row-span-6">
                        <div class="calccardspacemini0 active">
                          <a href="" class="imgcalcdiv align-center bg-gray-300 flex justify-center p-4 rounded-md">
                            <img src="assets/images/calculator/homeicon2.png" alt="Interior Painting" width=""
                              class="br-16 max-w-full h-auto" />
                          </a>
                          <div class="lablediv mt-2 text-center">
                            <p class="text-sm">Interior</p>
                          </div>
                        </div>
                      </div>
                      <div class="row-span-6">
                        <div class="calccardspacemini0 ">
                          <a href="/exterior-cal1" class="imgcalcdiv align-center bg-gray-300 flex justify-center p-4 rounded-md">
                            <img src="assets/images/calculator/homeicon.png" alt="Interior Painting" width=""
                              class="br-16 max-w-full h-auto" />
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
                          <div class="imgcalcdiv overflow-hidden align-center flex justify-center rounded-2xl">
                            <img src="assets/images/calculator/slectspace.png" alt="Interior Painting" width=""
                              class="br-16 max-w-full w-full h-auto" />
                          </div>
                        </div>
                      </div>
                      <div class="row-span-6">
                        <div class="calccardspacemini0">
                          <div class="imgcalcdiv overflow-hidden align-center flex justify-center rounded-2xl">
                            <img src="assets/images/calculator/slectspace2.png" alt="Interior Painting" width=""
                              class="br-16 max-w-full h-auto w-full" />
                          </div>
                        </div>
                      </div>
                      <div class="row-span-6">
                        <div class="calccardspacemini0">
                          <div class="imgcalcdiv overflow-hidden align-center flex justify-center rounded-2xl">
                            <img src="assets/images/calculator/slectspace3.png" alt="Interior Painting" width=""
                              class="br-16 max-w-full h-auto w-full" />
                          </div>
                        </div>
                      </div>
                      <div class="row-span-6">
                        <div class="calccardspacemini0">
                          <div class="imgcalcdiv overflow-hidden align-center flex justify-center rounded-2xl">
                            <img src="assets/images/calculator/slectspace4.png" alt="Interior Painting" width=""
                              class="br-16 max-w-full h-auto w-full" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="toggledivcalspace mt-3">
                  <div class="flex items-center space-x-4">
                    <label for="toggle" class="relative inline-block w-12 h-6">
                      <input type="checkbox" id="toggle" class="opacity-0 w-0 h-0 peer" />
                      <span
                        class="absolute inset-0 bg-gray-300 rounded-full transition-all peer-checked:bg-blue-600 peer-checked:after:translate-x-full after:content-[''] after:absolute after:left-0 after:top-0 after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all"></span>
                    </label>
                    <span class="text-gray-500">Built-up Area ?</span>
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
                        <input type="number" value="400" class="w-32 custsselect rounded-md p-3 text-sm" min="0"
                          max="10000" step="1">
                        <span class="text-sm">Sq ft</span>
                      </div>
                      <div class="flex flex-col w-4/5  mt-4 space-x-2">
                        <input type="range" id="range" min="0" max="1000" value="400"
                          class="h-2 bg-gray-300 rounded-lg appearance-none focus:ring-2"
                          style="accent-color: #fc2f93;" />
                        <div class="flex mt-2 justify-between">
                          <span id="rangeValue" class="text-sm">250Sq Ft</span>
                          <span id="rangeValue" class="text-sm">2000Sq Ft</span>
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
                    <div class="grid grid-cols- sm:grid-cols-2 md:grid-cols-3 gap-4">
                      <div class="row-span-6">
                        <div class="servccarddiv bg-white custshadow rounded-md p-4">
                          <div class="imgcalcdiv">
                            <img src="assets/images/calculator/icon1.png" alt="Interior Painting" width=""
                              class="br-16 max-w-full h-auto" />
                          </div>
                          <div class="lablediv mt-2">
                            <h6 class="font-bold">Repainting</h6>
                            <p class="text-sm">if you are looking for colour upgrade</p>
                            <h6 class="text-sm font-semibold mt-3 mb-2">Touch Up Pulty</h6>
                            <ol class="list-decimal text-muted ps-4">
                              <li class="text-sm text-muted">Coat Primer</li>
                              <li class="text-sm text-muted">Now this is a story all about how, my life got flipped-turned
                                upside down</li>
                            </ol>
                            <div class="pink-txt text-end">
                              <span class="font-semibold">₹2/SqFt</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row-span-6">
                        <div class="servccarddiv bg-white custshadow rounded-md p-4">
                          <div class="imgcalcdiv">
                            <img src="assets/images/calculator/icon1.png" alt="Interior Painting" width=""
                              class="br-16 max-w-full h-auto" />
                          </div>
                          <div class="lablediv mt-2">
                            <h6 class="font-bold">Repainting</h6>
                            <p class="text-sm">if you are looking for colour upgrade</p>
                            <h6 class="text-sm font-semibold mt-3 mb-2">Touch Up Pulty</h6>
                            <ol class="list-decimal text-muted ps-4">
                              <li class="text-sm text-muted">Coat Primer</li>
                              <li class="text-sm text-muted">Now this is a story all about how, my life got flipped-turned
                                upside down</li>
                            </ol>
                            <div class="pink-txt text-end">
                              <span class="font-semibold">₹2/SqFt</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row-span-6">
                        <div class="servccarddiv bg-white custshadow rounded-md p-4">
                          <div class="imgcalcdiv">
                            <img src="assets/images/calculator/icon1.png" alt="Interior Painting" width=""
                              class="br-16 max-w-full h-auto" />
                          </div>
                          <div class="lablediv mt-2">
                            <h6 class="font-bold">Repainting</h6>
                            <p class="text-sm">if you are looking for colour upgrade</p>
                            <h6 class="text-sm font-semibold mt-3 mb-2">Touch Up Pulty</h6>
                            <ol class="list-decimal text-muted ps-4">
                              <li class="text-sm text-muted">Coat Primer</li>
                              <li class="text-sm text-muted">Now this is a story all about how, my life got flipped-turned
                                upside down</li>
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
                 <div class="buttonsnextprev">
                   <a href="" id="prevBtn"
                     class="bg-white text-gray-800 border rounded-full px-8 py-2 focus:outline-none hover:bg-gray-100">
                     Prev
                   </a>
                 </div>
                 <div id="carousel" class="flex items-center gap-2 transition-transform duration-300 ease-in-out"
                   style="transform: translateX(0);">
                   <button class="w-3 h-3 bg-pink-500 rounded-full focus:outline-none" onclick="goToSlide(0)"></button>
                   <button class="w-3 h-3 bg-gray-300 rounded-full focus:outline-none" onclick="goToSlide(1)"></button>
                   <button class="w-3 h-3 bg-gray-300 rounded-full focus:outline-none" onclick="goToSlide(2)"></button>
                 </div>
                 <div class="buttonsnextprev">
                   <a href="/calculator-2" id="nextBtn"
                     class="btn-pink btn-rounded text-white border px-8 px-4 py-2 focus:outline-none">
                     Next
                   </a>
                 </div>
               </div>
              <!-- Navigation Buttons -->
            </div> 
          </div>
        </div>

        <div class="textcontentdiv mt-9">
          <h2 class="font-bold text-center">More About Home Exterior Painting</h2>
          <p class="text-sm text-gray-700 mt-3"><span class="pink-txt">ColourDrive Home Solutions</span> provide
            complete solution for Interior Painting which includes every single part of your home inside right from
            kitchen to bathroom, staircase to balcony, pooja room to dining hall, bedroom to bathroom etc either for
            Fresh Painting and Re-Painting work.
             Please visit<span class="pink-txt"> Detailed Interior Painting Process</span> to know how we do it. </p>
          <p class="text-sm text-gray-700 mt-3">Please have a look at our Projects which we have done recently -<span
              class="pink-txt"> Recent Interior Projects</span> </p>
          <hr class="my-5">
          <h5 class="font-semibold">House Inside Painting Standard Procedure:</h5>
          <p class="text-sm text-gray-700 mt-3"><span class="pink-txt">Interior repainting procedure:</span> Interior
            repainting procedure includes covering and paking of furniture, sanding of existing paint by sand paper
            followed by touch up putty then one coat of primer and two coat of paint. After complition of paint work,
            dusting will be done. We will make sure that no paint marks will be visible in end.</p>
          <p class="text-sm text-gray-700 mt-3"><span class="pink-txt">Interior fresh painting
              procedure:</span> Interior fresh painting procedure includes covering and paking of furniture, two coat of
            putty, sanding/shining of putty by sand paper/ sanding machine followed by one coat of primer and two coat
            of paint. After complition of paint work, dusting will be done. We will make sure that no paint marks will
            be visible in end.</p>
        </div>
        <div class="FAQdiv mt-9">
          <h2 class="font-bold text-center">FAQ</h2>
          <div class="w-full max-w-xl mx-auto mt-3">
            <div class="space-y-4">
              <!-- Accordion Item 1 -->
              <div class="faqcustshadow rounded-lg px-4 pt-4">
                <button class="w-full text-left pb-3 border-b focus:outline-none flex items-center justify-between"
                  onclick="toggleAccordion(this)">
                  <span class="text-lg font-semibold">Questions text goes here</span>
                  <span class="text-xl transition-transform duration-300 plus-minus-icon">+</span>
                </button>
                <div class="overflow-hidden transition-all duration-300 max-h-0 accordion-content">
                  <div class=" pt-3 pb-4">
                    <p class="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a type specimen.</p>
                  </div>
                </div>
              </div>
              <!-- Accordion Item 2 -->
              <div class="faqcustshadow rounded-lg px-4 pt-4">
                <button class="w-full text-left pb-3 border-b focus:outline-none flex items-center justify-between"
                  onclick="toggleAccordion(this)">
                  <span class="text-lg font-semibold">Questions text goes here</span>
                  <span class="text-xl transition-transform duration-300 plus-minus-icon">+</span>
                </button>
                <div class="overflow-hidden transition-all duration-300 max-h-0 accordion-content">
                  <div class=" pt-3 pb-4">
                    <p class="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a type specimen.</p>
                  </div>
                </div>
              </div>
              <!-- Accordion Item 2 -->
              <div class="faqcustshadow rounded-lg px-4 pt-4">
                <button class="w-full text-left pb-3 border-b focus:outline-none flex items-center justify-between"
                  onclick="toggleAccordion(this)">
                  <span class="text-lg font-semibold">Questions text goes here</span>
                  <span class="text-xl transition-transform duration-300 plus-minus-icon">+</span>
                </button>
                <div class="overflow-hidden transition-all duration-300 max-h-0 accordion-content">
                  <div class=" pt-3 pb-4">
                    <p class="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a type specimen.</p>
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
  @import '../assets/css/service.css';
</style>