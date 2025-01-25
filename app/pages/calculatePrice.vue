
<script >
  import Calculate1 from '@/components/Calculate1.vue';
  import Calculate2 from '~/components/Calculate2.vue';
  import Calculate3 from '~/components/Calculate3.vue';


  export default {
  components: { Calculate1, Calculate2, Calculate3 },
  data() {
    return {
      currentSlide: 0, // Current active slide
      slides: [0, 1, 2], // Array to define the number of slides
    };
  },
  methods: {
    nextSlide() {
      if (this.currentSlide < this.slides.length - 1) {
        this.currentSlide++;
      }
    },
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      }
    },
    goToSlide(index) {
      this.currentSlide = index;
    },
  },
};
</script>

<template>
  <!-- main banner start -->
  <section id="blog-new" class="py-100 px-3 mb-50px" data-v-inspector="app/pages/blog.vue:5:3" data-v-1bac7c7d="">
    <div class="container mx-auto" data-v-inspector="app/pages/blog.vue:6:5" data-v-1bac7c7d="">
      <!-- <h1>Blog</h1> -->
      <div class="text-center">
        
        <h2 class="text font-bold">Painting Cost Calculator</h2>
        <p class="text-muted">Get Free Painting Quotation</p>
      </div>
    </div>
 
  </section>
  <div class="w-full max-w-4xl mx-auto mt-9">
    <!-- Carousel Container -->
    <div class="relative">
      <!-- Carousel Items -->
      <div class="flex justify-between items-center">
        <!-- Previous Button -->
        <div>
          <button
            @click="prevSlide"
            :disabled="currentSlide === 0"
            class="bg-white text-gray-800 border rounded-full px-8 py-2 focus:outline-none hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Prev
          </button>
        </div>
        <!-- Dots Navigation -->
        <div id="carousel" class="flex items-center gap-2">
          <span
            v-for="(slide, index) in slides"
            :key="index"
            :class="[
              'w-3 h-3 rounded-full cursor-pointer',
              currentSlide === index ? 'bg-pink-500' : 'bg-gray-300',
            ]"
            @click="goToSlide(index)"
          ></span>
        </div>
        <!-- Next Button -->
        <div>
          <button
            @click="nextSlide"
            :disabled="currentSlide === slides.length - 1"
            class="bg-pink-500 text-white border rounded-full px-8 py-2 focus:outline-none hover:bg-pink-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>

    <!-- Conditional Rendering of Components -->
    <div class="mt-6">
      <Calculate1 v-if="currentSlide === 0" />
      <Calculate2 v-if="currentSlide === 1" />
      <Calculate3 v-if="currentSlide === 2" />
    </div>
  </div>
          <div class="mt-6">
      <Calculate1 v-if="currentSlide === 0" />
      <Calculate2 v-if="currentSlide === 1" />
      <Calculate3 v-if="currentSlide === 2" />
    </div>

  <!-- main banner end -->

 
</template>

<style scoped>
@import "../assets/css/service.css";
</style>
