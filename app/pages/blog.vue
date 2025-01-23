<script setup>
</script>
<template>
  <!-- main banner start -->
  <section id="blog-new" class="py-12 px-3">
    <div class="container mx-auto">
      <!-- <h1>Blog</h1> -->
      <div class="flex items-center gap-2 ">
        <a href="index.vue"> <p>Home</p></a>
        <i class="fa-solid fa-chevron-right" style="color: #000000"></i>
        <p>Blog</p>
      </div>
    </div>
  </section>
  <!-- main banner end -->

  <!-- blogs section start -->
  <section id="blog-list" class="pt-100 pb-200 mx-4 ">
    <div class="container mx-auto">
      <div>
        <div class="flex flex-wrap gap-5 flex-nowrap">
          <button
            class="justify-center flex p-3 rounded-lg font-bold hover:bg-opacity-40 text-gray-700 flex-grow btn-green">
            Home Decor Special
          </button>
          <button
            class="btn-green justify-center flex p-3 rounded-lg font-bold hover:bg-opacity-40 text-gray-700 flex-grow">
            Design Painting
          </button>
          <button
            class="btn-green justify-center flex p-3 rounded-lg font-bold hover:bg-opacity-40 text-gray-700 flex-grow"
          >
            Primer
          </button>
          <div
            class="dropdown px-4 py-3 rounded-lg text-gray-700 font-bold flex-grow btn-green"
          >
            <button class="flex justify-between w-full">
              False Ceiling
              <div>
                <i class="fa-solid fa-chevron-down" style="color: #000000"></i>
              </div>
            </button>
            <ul class="dropdown-menu">
              <li><a href="#" data-tab-target="#tab4">Deep Ceiling</a></li>
              <li><a href="#" data-tab-target="#tab5">Exterior Ceiling</a></li>
            </ul>
          </div>
          <button
            class="px-4 py-3 rounded-lg font-bold hover:bg-gray-300 flex-grow btn-green"
            
          >
            Exterior Painting
          </button>
          <button
            class="justify-center flex px-4 py-3 rounded-lg font-bold flex-grow btn-green"
            
          >
            Wood Paint
          </button>
          <button
            class="justify-center flex px-4 py-3 rounded-lg font-bold flex-grow btn-green"
          
          >
            Interior Design
          </button>
        </div>
        
        <div class="mt-4">
          <div  class=" text-gray-700">
            <div class="grid gap-x-8 gap-y-6 w-full sm:grid-cols-2 md:grid-cols-3">
              <a href="blog-details">
                <div class="bg-white shadow-mds rounded-2xl">
                  <div>
                    <div>
                      <img
                        src="assets/images/blog/blog1.webp"
                        alt="Interior Painting"
                        width="100%"
                        class="br-16"
                      />
                      <div class="p-5">
                        <h5 class="font-semibold">Article Title</h5>
                        <p class="text-gray">
                          Egestas elit dui scelerisque ut eu purus aliquam vitae
                          habitasse.
                        </p>
                      </div>
                    </div>
                    <div class="p-5">
                      <div class="flex items-center mt-5">
                        <img
                          src="assets/images/blog/user-thumb.svg"
                          alt="Interior Painting"
                        />
                        <div class="ms-3">
                          <p class="text-black">Jane Doe</p>
                          <p>Senior Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a href="blog-details">
                <div class="bg-white shadow-mds rounded-2xl">
                  <div>
                    <div>
                      <img
                        src="assets/images/blog/blog2.webp"
                        alt="Interior Painting"
                        width="100%"
                        class="br-16"
                      />
                      <div class="p-5">
                        <h5 class="font-semibold">Article Title</h5>
                        <p class="text-gray">
                          Egestas elit dui scelerisque ut eu purus aliquam vitae
                          habitasse.
                        </p>
                      </div>
                    </div>
                    <div class="p-5">
                      <div class="flex items-center mt-5">
                        <img
                          src="assets/images/blog/user-thumb.svg"
                          alt="Interior Painting"
                        />
                        <div class="ms-3">
                          <p class="text-black">Jane Doe</p>
                          <p>Senior Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a href="blog-details">
                <div class="bg-white shadow-mds rounded-2xl">
                  <div>
                    <div>
                      <img
                        src="assets/images/blog/blog3.webp"
                        alt="Interior Painting"
                        width="100%"
                        class="br-16"
                      />
                      <div class="p-5">
                        <h5 class="font-semibold">Article Title</h5>
                        <p class="text-gray">
                          Egestas elit dui scelerisque ut eu purus aliquam vitae
                          habitasse.
                        </p>
                      </div>
                    </div>
                    <div class="p-5">
                      <div class="flex items-center mt-5">
                        <img
                          src="assets/images/blog/user-thumb.svg"
                          alt="Interior Painting"
                        />
                        <div class="ms-3">
                          <p class="text-black">Jane Doe</p>
                          <p>Senior Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a href="blog-details">
                <div class="bg-white shadow-mds rounded-2xl">
                  <div>
                    <div>
                      <img
                        src="assets/images/blog/blog4.webp"
                        alt="Interior Painting"
                        width="100%"
                        class="br-16"
                      />
                      <div class="p-5">
                        <h5 class="font-semibold">Article Title</h5>
                        <p class="text-gray">
                          Egestas elit dui scelerisque ut eu purus aliquam vitae
                          habitasse.
                        </p>
                      </div>
                    </div>
                    <div class="p-5">
                      <div class="flex items-center mt-5">
                        <img
                          src="assets/images/blog/user-thumb.svg"
                          alt="Interior Painting"
                        />
                        <div class="ms-3">
                          <p class="text-black">Jane Doe</p>
                          <p>Senior Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a href="blog-details">
                <div class="bg-white shadow-mds rounded-2xl">
                  <div>
                    <div>
                      <img
                        src="assets/images/blog/blog5.webp"
                        alt="Interior Painting"
                        width="100%"
                        class="br-16"
                      />
                      <div class="p-5">
                        <h5 class="font-semibold">Article Title</h5>
                        <p class="text-gray">
                          Egestas elit dui scelerisque ut eu purus aliquam vitae
                          habitasse.
                        </p>
                      </div>
                    </div>
                    <div class="p-5">
                      <div class="flex items-center mt-5">
                        <img
                          src="assets/images/blog/user-thumb.svg"
                          alt="Interior Painting"
                        />
                        <div class="ms-3">
                          <p class="text-black">Jane Doe</p>
                          <p>Senior Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a href="blog-details">
                <div class="bg-white shadow-mds rounded-2xl">
                  <div>
                    <div>
                      <img
                        src="assets/images/blog/blog6.webp"
                        alt="Interior Painting"
                        width="100%"
                        class="br-16"
                      />
                      <div class="p-5">
                        <h5 class="font-semibold">Article Title</h5>
                        <p class="text-gray">
                          Egestas elit dui scelerisque ut eu purus aliquam vitae
                          habitasse.
                        </p>
                      </div>
                    </div>
                    <div class="p-5">
                      <div class="flex items-center mt-5">
                        <img
                          src="assets/images/blog/user-thumb.svg"
                          alt="Interior Painting"
                        />
                        <div class="ms-3">
                          <p class="text-black">Jane Doe</p>
                          <p>Senior Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <!-- CTA start -->
            <section class="py-8">
              <div class="container mx-auto" id="cta-blog">
                <div
                  class="grid gap-x-8 gap-y-4 grid-cols-2 items-center flex-column blog11"
                >
                  <div>
                    <img
                      src="assets/images/blog/cta-bg.webp"
                      alt="cta"
                      class="hidden lg:block"
                    />
                    <img
                      src="assets/images/cta-mob.webp"
                      alt="cta"
                      class="block lg:hidden rounded-2xl"
                    />
                  </div>
                  <div class="text-center md:text-start">
                    <h5 class="text-black mt-3 sm:mt-0">Unable To Decide Upon a Colour?</h5>
                    <h2 class="text-black font-semibold">
                      Get Quotation (Calculate Price)
                    </h2>
                    <h4>Self serve</h4>
                    <button
                      type="submit"
                      class="mb-4 xl:mb-0 mt-4 text-white bg-green cta-btn font-medium rounded-lg text-sm px-5 py-2.5 text-center before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-pink-500 hover:before:-translate-x-40"
                    >
                      <span relative="relative z-10">Estimate Cost</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <!-- CTA start -->

            <div class="grid gap-x-8 gap-y-6 w-full sm:grid-cols-2 md:grid-cols-3">
              <a href="blog-details">
                <div class="bg-white shadow-mds rounded-2xl">
                  <div>
                    <div>
                      <img
                        src="assets/images/blog/blog7.webp"
                        alt="Interior Painting"
                        width="100%"
                        class="br-16"
                      />
                      <div class="p-5">
                        <h5 class="font-semibold">Article Title</h5>
                        <p class="text-gray">
                          Egestas elit dui scelerisque ut eu purus aliquam vitae
                          habitasse.
                        </p>
                      </div>
                    </div>
                    <div class="p-5">
                      <div class="flex items-center mt-5">
                        <img
                          src="assets/images/blog/user-thumb.svg"
                          alt="Interior Painting"
                        />
                        <div class="ms-3">
                          <p class="text-black">Jane Doe</p>
                          <p>Senior Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div></a
              >
              <a href="blog-details">
                <div class="bg-white shadow-mds rounded-2xl">
                  <div>
                    <div>
                      <img
                        src="assets/images/blog/blog8.webp"
                        alt="Interior Painting"
                        width="100%"
                        class="br-16"
                      />
                      <div class="p-5">
                        <h5 class="font-semibold">Article Title</h5>
                        <p class="text-gray">
                          Egestas elit dui scelerisque ut eu purus aliquam vitae
                          habitasse.
                        </p>
                      </div>
                    </div>
                    <div class="p-5">
                      <div class="flex items-center mt-5">
                        <img
                          src="assets/images/blog/user-thumb.svg"
                          alt="Interior Painting"
                        />
                        <div class="ms-3">
                          <p class="text-black">Jane Doe</p>
                          <p>Senior Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div></a
              >
              <a href="blog-details">
                <div class="bg-white shadow-mds rounded-2xl">
                  <div>
                    <div>
                      <img
                        src="assets/images/blog/blog9.webp"
                        alt="Interior Painting"
                        width="100%"
                        class="br-16"
                      />
                      <div class="p-5">
                        <h5 class="font-semibold">Article Title</h5>
                        <p class="text-gray">
                          Egestas elit dui scelerisque ut eu purus aliquam vitae
                          habitasse.
                        </p>
                      </div>
                    </div>
                    <div class="p-5">
                      <div class="flex items-center mt-5">
                        <img
                          src="assets/images/blog/user-thumb.svg"
                          alt="Interior Painting"
                        />
                        <div class="ms-3">
                          <p class="text-black">Jane Doe</p>
                          <p>Senior Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div></a
              >
              <a href="blog-details">
                <div class="bg-white shadow-mds rounded-2xl">
                  <div>
                    <div>
                      <img
                        src="assets/images/blog/blog10.webp"
                        alt="Interior Painting"
                        width="100%"
                        class="br-16"
                      />
                      <div class="p-5">
                        <h5 class="font-semibold">Article Title</h5>
                        <p class="text-gray">
                          Egestas elit dui scelerisque ut eu purus aliquam vitae
                          habitasse.
                        </p>
                      </div>
                    </div>
                    <div class="p-5">
                      <div class="flex items-center mt-5">
                        <img
                          src="assets/images/blog/user-thumb.svg"
                          alt="Interior Painting"
                        />
                        <div class="ms-3">
                          <p class="text-black">Jane Doe</p>
                          <p>Senior Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div></a
              >
              <a href="blog-details">
                <div class="bg-white shadow-mds rounded-2xl">
                  <div>
                    <div>
                      <img
                        src="assets/images/blog/blog11.webp"
                        alt="Interior Painting"
                        width="100%"
                        class="br-16"
                      />
                      <div class="p-5">
                        <h5 class="font-semibold">Article Title</h5>
                        <p class="text-gray">
                          Egestas elit dui scelerisque ut eu purus aliquam vitae
                          habitasse.
                        </p>
                      </div>
                    </div>
                    <div class="p-5">
                      <div class="flex items-center mt-5">
                        <img
                          src="assets/images/blog/user-thumb.svg"
                          alt="Interior Painting"
                        />
                        <div class="ms-3">
                          <p class="text-black">Jane Doe</p>
                          <p>Senior Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div></a
              >
              <a href="blog-details">
                <div class="bg-white shadow-mds rounded-2xl">
                  <div>
                    <div>
                      <img
                        src="assets/images/blog/blog12.webp"
                        alt="Interior Painting"
                        width="100%"
                        class="br-16"
                      />
                      <div class="p-5">
                        <h5 class="font-semibold">Article Title</h5>
                        <p class="text-gray">
                          Egestas elit dui scelerisque ut eu purus aliquam vitae
                          habitasse.
                        </p>
                      </div>
                    </div>
                    <div class="p-5">
                      <div class="flex items-center mt-5">
                        <img
                          src="assets/images/blog/user-thumb.svg"
                          alt="Interior Painting"
                        />
                        <div class="ms-3">
                          <p class="text-black">Jane Doe</p>
                          <p>Senior Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div></a
              >
              <a href="blog-details">
                <div class="bg-white shadow-mds rounded-2xl">
                  <div>
                    <div>
                      <img
                        src="assets/images/blog/blog13.webp"
                        alt="Interior Painting"
                        width="100%"
                        class="br-16"
                      />
                      <div class="p-5">
                        <h5 class="font-semibold">Article Title</h5>
                        <p class="text-gray">
                          Egestas elit dui scelerisque ut eu purus aliquam vitae
                          habitasse.
                        </p>
                      </div>
                    </div>
                    <div class="p-5">
                      <div class="flex items-center mt-5">
                        <img
                          src="assets/images/blog/user-thumb.svg"
                          alt="Interior Painting"
                        />
                        <div class="ms-3">
                          <p class="text-black">Jane Doe</p>
                          <p>Senior Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div></a
              >
              <a href="blog-details">
                <div class="bg-white shadow-mds rounded-2xl">
                  <div>
                    <div>
                      <img
                        src="assets/images/blog/blog14.webp"
                        alt="Interior Painting"
                        width="100%"
                        class="br-16"
                      />
                      <div class="p-5">
                        <h5 class="font-semibold">Article Title</h5>
                        <p class="text-gray">
                          Egestas elit dui scelerisque ut eu purus aliquam vitae
                          habitasse.
                        </p>
                      </div>
                    </div>
                    <div class="p-5">
                      <div class="flex items-center mt-5">
                        <img
                          src="assets/images/blog/user-thumb.svg"
                          alt="Interior Painting"
                        />
                        <div class="ms-3">
                          <p class="text-black">Jane Doe</p>
                          <p>Senior Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div></a
              >
              <a href="blog-details">
                <div class="bg-white shadow-mds rounded-2xl">
                  <div>
                    <div>
                      <img
                        src="assets/images/blog/blog15.webp"
                        alt="Interior Painting"
                        width="100%"
                        class="br-16"
                      />
                      <div class="p-5">
                        <h5 class="font-semibold">Article Title</h5>
                        <p class="text-gray">
                          Egestas elit dui scelerisque ut eu purus aliquam vitae
                          habitasse.
                        </p>
                      </div>
                    </div>
                    <div class="p-5">
                      <div class="flex items-center mt-5">
                        <img
                          src="assets/images/blog/user-thumb.svg"
                          alt="Interior Painting"
                        />
                        <div class="ms-3">
                          <p class="text-black">Jane Doe</p>
                          <p>Senior Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div></a
              >
            </div>
          </div>
        
        </div>
      </div>
    </div>
  </section>
  <!-- blogs section end -->
</template>

<style scoped>
@import '../assets/css/blog.css';
</style>