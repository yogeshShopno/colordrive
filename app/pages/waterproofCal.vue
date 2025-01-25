<script>
import WateProofCal1 from "@/components/water-proff1.vue";
import WateProofCal2 from "@/components/water-proff2.vue";
import WateProofCal3 from "@/components/water-proff3.vue";

export default {
  components: { WateProofCal1, WateProofCal2, WateProofCal3 },
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
        <h2 class="text font-bold">Estimate Waterproofing cost</h2>
        <div class="flex items-center gap-2 justify-center mt-3">
          <a href="index.vue">
            <p class="text-gray-500">Home</p>
          </a>
          <i class="fa-solid fa-chevron-right text-gray-500"></i>
          <p class="pink-txt">Estimate Waterproofing cost</p>
        </div>
      </div>
    </div>
  </section>
  <!-- main banner end -->
  <div class="w-full maincomponent pb-200 mx-auto mt-9">
    <!-- Carousel Container -->

    <!-- Conditional Rendering of Components -->
    <div class="mt-6">
      <WateProofCal1 v-if="currentSlide === 0" />
      <WateProofCal2 v-if="currentSlide === 1" />
      <WateProofCal3 v-if="currentSlide === 2" />
    </div>

    <!-- nextpre ydthfjf-->
    <div class="w-full max-w-4xl mx-auto mt-9 px-5 md:px-0">
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
              class="btn-pink btn-rounded text-white border px-8 px-4 py-2 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-6xl mx-auto px-5">
      <div class="textcontentdiv pt-100">
        <h2 class="font-bold text-center">More About Home Exterior Painting</h2>
        <p class="text-sm text-gray-500 mt-3">
          But nevertheless, Exterior Painting is more really difficult as
          compared to what it looks. Which means that it happens to be with
          great pleasure that many Household painters make up your mind that it
          is now time to hire an Exterior Painting Services to seek the services
          of the job. Let us really know what painting Exterior Painting Company
          do, would you like to hire them? ... Tips sharing by ColourDrive.
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
                  class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4"
                >
                  <div class="row-span-6 h-full">
                    <div
                      class="servccarddiv bg-white h-full flex gap-2 custshadow product-card rounded-md p-4"
                    >
                      <div class="imgcalcdiv custimgcal rounded">
                        <img
                          src="assets/images/calculator/icn16.png"
                          alt="Interior Painting"
                          width=""
                          class="max-w-full w-full h-auto"
                        />
                      </div>
                      <div class="lablediv cust-basiss w-full">
                        <h6 class="font-bold pink-txt mb-2">
                          Exterior repainting procedure
                        </h6>
                        <p class="text-sm text-gray-500">
                          Exterior repainting procedure includes exterior wall
                          cleaning by jet machine, crack filling by Dr. Fixit
                          then one coat of exterior primer followed by two coat
                          of paint.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="row-span-6 h-full">
                    <div
                      class="servccarddiv h-full bg-white flex gap-2 custshadow product-card rounded-md p-4"
                    >
                      <div class="imgcalcdiv custimgcal rounded">
                        <img
                          src="assets/images/calculator/icn15.png"
                          alt="Interior Painting"
                          width=""
                          class="max-w-full w-full h-auto"
                        />
                      </div>
                      <div class="lablediv cust-basiss w-full">
                        <h6 class="font-bold pink-txt mb-2">
                          Exterior fresh painting procedure
                        </h6>
                        <p class="text-sm text-gray-500">
                          Exterior fresh painting procedure includes one coat of
                          exterior primer and two coat of paint.
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
          from the one-man exceptional proprietor up to 25 or 45 painters doing
          work for an insignificant company.
        </p>
        <hr class="my-5" />
        <h5 class="font-semibold">What Will ColourDrive Do?</h5>
        <p class="text-sm text-gray-500 mt-3">
          Virtually all painting contractors will take on any kind of
          profession, from merely painting you are your window trim to a
          full-house paint profession. But let us believe that they are painting
          them your exterior. You can actually usually expect to have from
          ColourDrive
        </p>
        <ul class="list-disc custom-list ps-6 mt-3">
          <li class="text-sm mb-1 text-gray-500">
            Coverage of all destinations that will be multi-colored, including
            floors, residential windows, kitchen space counters, storage units,
            etc.
          </li>
          <li class="text-sm mb-1 text-gray-500">
            Inconsequential surface getting prepared prior to repainting, which
            means illuminate sanding and scraping away do will manage to win
            paint, tapping in a few overhanging nails, cleaning off woodworking,
            with the use of sackcloth in some areas. The important thing here is
            “minor,” as the service provider will assume that the accommodate is
            mostly in Exterior Fresh Painting overall condition.
          </li>
          <li class="text-sm mb-1 text-gray-500">
            Reduction of electrical plates, equipment and lighting, doors, and
            other obstructions.
          </li>
          <li class="text-sm mb-1 text-gray-500">
            Moving accessories away for better access to the elements to be
            painted. This is such really a painter’s job, which means you would
            need to confirm this, in the beginning, such as Painting The Outside
            Of Your House. Priming new drywall or alternatively the current
            paint with an exterior latex primer.
          </li>
          <li class="text-sm mb-1 text-gray-500">
            Not one but two colour coats of exterior furnishing latex paint on
            the walls.
          </li>
          <li class="text-sm mb-1 text-gray-500">
            Two or three coats of ceiling paint. Painting on the trim and
            molding (baseboards, windowpane accessories, window mentions, etc .)
          </li>
          <li class="text-sm mb-1 text-gray-500">
            Touchups of greatly noticed spots.
          </li>
          <li class="text-sm mb-1 text-gray-500">
            Cleanups for unpleasant incidents ( no matter how good the payment
            or reimbursement with drop-cloths, a handful of drips will happen).
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
          totally affect your day. During the time you book your painting on the
          job, our immediate down line will set up a get in touch with before
          your assignment date to go over all suggestions:
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
          Check once our Free Exterior quotation for Per sqft rates for Exterior
          Painting, Dustless Exterior Painting and Exterior Fresh Painting, Just
          mark your requirement on support@colourdrive.in
        </p>
      </div>
      <div class="calccardspacemini sliderdiv text1 pt-100 pt-100">
        <h2 class="text-center font-bold mb-5">Best Interior Paint Products</h2>
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
              <div class="calccardspacemini00 flex-col sm:flex-row flex gap-3">
                <div
                  href=""
                  class="imgcalcdiv bg-white align-center flex justify-center basis-2/5 lg:basis-1/5 sm:basis-2/5 rrrrr items-center p-4 rounded-md"
                >
                  <img
                    src="assets/images/calculator/paintbucket.png"
                    alt="Interior Painting"
                    width=""
                    class="br-16 max-w-full h-auto"
                  />
                </div>
                <div
                  class="lablediv basis-4/5 lg:basis-4/5 sm:basis-3/5 content-center"
                >
                  <p class="text-md text-white text-start">
                    Apcolite Premium Emulsion gives matt and satin finish to
                    your walls. It works on all wall conditions. Apcolite
                    Premium Emulsion is having anti fungus qualities. Apcolite
                    Premium Emulsion is type of Interior Paints which contains
                    long lasting film due to that your house looks new for long
                    time. It is semi washable. Apcolite Premium Emulsion
                    contains special stainguard technology that keeps your walls
                    stain free.
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
              <div class="calccardspacemini00 flex-col sm:flex-row flex gap-3">
                <div
                  href=""
                  class="imgcalcdiv bg-white align-center flex justify-center basis-2/5 lg:basis-1/5 sm:basis-2/5 rrrrr items-center p-4 rounded-md"
                >
                  <img
                    src="assets/images/calculator/paintbucket.png"
                    alt="Interior Painting"
                    width=""
                    class="br-16 max-w-full h-auto"
                  />
                </div>
                <div
                  class="lablediv basis-4/5 lg:basis-4/5 sm:basis-3/5 content-center"
                >
                  <p class="text-md text-white text-start">
                    Apcolite Premium Emulsion gives matt and satin finish to
                    your walls. It works on all wall conditions. Apcolite
                    Premium Emulsion is having anti fungus qualities. Apcolite
                    Premium Emulsion is type of Interior Paints which contains
                    long lasting film due to that your house looks new for long
                    time. It is semi washable. Apcolite Premium Emulsion
                    contains special stainguard technology that keeps your walls
                    stain free.
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
              <div class="calccardspacemini00 flex-col sm:flex-row flex gap-3">
                <div
                  href=""
                  class="imgcalcdiv bg-white align-center flex justify-center basis-2/5 lg:basis-1/5 sm:basis-2/5 rrrrr items-center p-4 rounded-md"
                >
                  <img
                    src="assets/images/calculator/paintbucket.png"
                    alt="Interior Painting"
                    width=""
                    class="br-16 max-w-full h-auto"
                  />
                </div>
                <div
                  class="lablediv basis-4/5 lg:basis-4/5 sm:basis-3/5 content-center"
                >
                  <p class="text-md text-white text-start">
                    Apcolite Premium Emulsion gives matt and satin finish to
                    your walls. It works on all wall conditions. Apcolite
                    Premium Emulsion is having anti fungus qualities. Apcolite
                    Premium Emulsion is type of Interior Paints which contains
                    long lasting film due to that your house looks new for long
                    time. It is semi washable. Apcolite Premium Emulsion
                    contains special stainguard technology that keeps your walls
                    stain free.
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
              <input type="checkbox" name="panel" id="panel-1" class="hidden" />
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
                  printer took a galley of type and scrambled it to make a type
                  specimen.
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iusto possimus at a cum saepe molestias modi illo facere
                  ducimus voluptatibus praesentium deleniti fugiat ab error quia
                  sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Lorem ipsum dolor sit
                  amet.
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iusto possimus at a cum saepe molestias modi illo facere
                  ducimus voluptatibus praesentium deleniti fugiat ab error quia
                  sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Lorem ipsum dolor sit
                  amet.
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iusto possimus at a cum saepe molestias modi illo facere
                  ducimus voluptatibus praesentium deleniti fugiat ab error quia
                  sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Lorem ipsum dolor sit
                  amet.
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iusto possimus at a cum saepe molestias modi illo facere
                  ducimus voluptatibus praesentium deleniti fugiat ab error quia
                  sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Lorem ipsum dolor sit
                  amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  <!-- <div class="mt-6">
    <WateProofCal1 v-if="currentSlide === 0" />
    <WateProofCal2 v-if="currentSlide === 1" />
    <WateProofCal3 v-if="currentSlide === 2" />
  </div> -->

  <!-- main banner end -->
</template>

<style scoped>
@import "../assets/css/service.css";
</style>
