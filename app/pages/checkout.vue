<script></script>

<template>
    <!-- main banner start -->
    <section id="blog-new" class="py-100 px-3 mb-50px" data-v-inspector="app/pages/blog.vue:5:3" data-v-1bac7c7d="">
        <div class="container mx-auto" data-v-inspector="app/pages/blog.vue:6:5" data-v-1bac7c7d="">
            <!-- <h1>Blog</h1> -->
            <div class="text-center">
                <h2 class="text font-bold">Checkout</h2>
                <div class="flex items-center justify-center gap-2">
                    <a href="/texturepaint">
                        <p>Home</p>
                    </a>
                    <i class="fa-solid fa-chevron-right" style="color: #000000"></i>
                    <p class="text-gray-500 pink-txt">Checkout</p>
                </div>
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
                            <div class="calcseccardsdiv">
                                <div class="calcspace">
                                    <div class="calccardspacemini">
                                        <div class="flex flex-col xl:flex-row gap-8">
                                            <div class="basis-3/3 md:basis-1/2">
                                                <div class=" sticky top-32">
                                                    <div class="cartvietotldiv bg-pink-100 rounded-xl mb-5 px-4 py-3">
                                                        <div class="flex justify-between items-center">
                                                            <div
                                                                class="pricedivmain items-start flex gap-3 items-center">
                                                                <p class="pink-txt text-base font-bold">You're saving
                                                                    total ₹73 on this order! .</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="cartcardmain calccardspacemini00 faqcustshadow p-5 mb-5 rounded-lg">
                                                        <div class="cartdiv">
                                                            <h5 class="text-base font-bold mb-5">
                                                                Account
                                                            </h5>
                                                            <p class="text-gray-500">To book the service, please login
                                                                or sign up</p>
                                                            <div class="btndiv">
                                                                <button type="button" onclick="toggleModal1()"
                                                                    class="m-0 rounded-lg px-2 sm:px-5 py-2.5 main-btn before:ease relative overflow-hidden text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-pink-500 hover:before:-translate-x-40 text-center w-full mt-4"
                                                                    data-v-inspector="app/components/Header.vue:84:11"
                                                                    data-v-a81738bd=""><span
                                                                        relative="relative z-10">Login</span></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="cartcardmain calccardspacemini00 faqcustshadow p-5 mb-5 rounded-lg">
                                                        <div class="cartdiv flex justify-between items-center gap-3">
                                                            <h5 class="text-base font-bold basis-2/3">
                                                                Have you any queries?, plz contact us for more
                                                                information
                                                            </h5>
                                                            <div class="btndiv basis-1/3">
                                                                <button type="button" onclick="toggleModal1()"
                                                                    class="m-0 rounded-lg px-2 sm:px-5 py-2.5 main-btn before:ease relative overflow-hidden text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-pink-500 hover:before:-translate-x-40 text-center w-full mt-4"
                                                                    data-v-inspector="app/components/Header.vue:84:11"
                                                                    data-v-a81738bd=""><span
                                                                        relative="relative z-10">Contact
                                                                        us</span></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="basis-3/3 md:basis-1/2">
                                                <div class="">
                                                    <div class="calccardspacemini00 faqcustshadow p-8 rounded-lg">
                                                        <div class="cartdiv">
                                                            <div class="cartlistdiv flex flex-col gap-3">
                                                                <div class="cartlistcard">
                                                                    <div
                                                                        class="flex justify-between gap-3 items-center">
                                                                        <p class="text-lg">Classic cleaning
                                                                            (2 bathrooms)</p>
                                                                        <div
                                                                            class="flex items-center w-fit mx-auto shadow-lg inptdiv bg-white border-pink rounded-md">
                                                                            <!-- Minus Button -->
                                                                            <button type="button"
                                                                                class="px-3 py-2 focus:outline-none"
                                                                                onclick="decreaseQty()">
                                                                                −
                                                                            </button>

                                                                            <!-- Quantity Input -->
                                                                            <input type="number" id="qtyInput" value="1"
                                                                                min="1"
                                                                                class="w-16 text-center py-2 border-none" />

                                                                            <!-- Plus Button -->
                                                                            <button type="button"
                                                                                class="px-3 py-2 focus:outline-none"
                                                                                onclick="increaseQty()">
                                                                                +
                                                                            </button>
                                                                        </div>
                                                                        <div
                                                                            class="mb-3 pricedivmain flex-col items-start flex ">
                                                                            <p class="pink-txt">₹785</p>
                                                                            <p class="text-gray-500 line-through">
                                                                                ₹858</p>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                                <div class="cartlistcard">
                                                                    <div
                                                                        class="flex justify-between gap-3 items-center">
                                                                        <p class="text-lg">Classic cleaning
                                                                            (2 bathrooms)</p>
                                                                        <div
                                                                            class="flex items-center w-fit mx-auto shadow-lg inptdiv bg-white border-pink rounded-md">
                                                                            <!-- Minus Button -->
                                                                            <button type="button"
                                                                                class="px-3 py-2 focus:outline-none"
                                                                                onclick="decreaseQty()">
                                                                                −
                                                                            </button>

                                                                            <!-- Quantity Input -->
                                                                            <input type="number" id="qtyInput" value="1"
                                                                                min="1"
                                                                                class="w-16 text-center py-2 border-none" />

                                                                            <!-- Plus Button -->
                                                                            <button type="button"
                                                                                class="px-3 py-2 focus:outline-none"
                                                                                onclick="increaseQty()">
                                                                                +
                                                                            </button>
                                                                        </div>
                                                                        <div
                                                                            class="mb-3 pricedivmain flex-col items-start flex ">
                                                                            <p class="pink-txt">₹785</p>
                                                                            <p class="text-gray-500 line-through">
                                                                                ₹858</p>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                                <div class="cartlistcard">
                                                                    <div
                                                                        class="flex justify-between gap-3 items-center">
                                                                        <p class="text-lg">Classic cleaning
                                                                            (2 bathrooms)</p>
                                                                        <div
                                                                            class="flex items-center w-fit mx-auto shadow-lg inptdiv bg-white border-pink rounded-md">
                                                                            <!-- Minus Button -->
                                                                            <button type="button"
                                                                                class="px-3 py-2 focus:outline-none"
                                                                                onclick="decreaseQty()">
                                                                                −
                                                                            </button>

                                                                            <!-- Quantity Input -->
                                                                            <input type="number" id="qtyInput" value="1"
                                                                                min="1"
                                                                                class="w-16 text-center py-2 border-none" />

                                                                            <!-- Plus Button -->
                                                                            <button type="button"
                                                                                class="px-3 py-2 focus:outline-none"
                                                                                onclick="increaseQty()">
                                                                                +
                                                                            </button>
                                                                        </div>
                                                                        <div
                                                                            class="mb-3 pricedivmain flex-col items-start flex ">
                                                                            <p class="pink-txt">₹785</p>
                                                                            <p class="text-gray-500 line-through">
                                                                                ₹858</p>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                                <hr class="my-8">
                                                                <div class="freqbought">
                                                                    <h5 class=" font-semibold mb-5 text-xl">Frequently
                                                                        added
                                                                        together</h5>
                                                                    <div class="mt-5 freqslider">
                                                                        <div class="packegescard p-5 rounded-2xl">
                                                                            <div
                                                                                class="flex gap-3 justify-between w-full flex-col sm:flex-row">
                                                                                <div class="packcardleft">
                                                                                    <h5
                                                                                        class="text-2xl font-semibold mb-3">
                                                                                        Intense bathroom cleaning
                                                                                    </h5>
                                                                                    <div
                                                                                        class="mb-3 pricedivmain flex gap-3">
                                                                                        <p class="pink-txt font-bold">
                                                                                            ₹788
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="packcardright">
                                                                                    <div class="selectedinputdiv">
                                                                                        <div
                                                                                            class="selectednumbox bg-pink text-white text-center rounded-lg">
                                                                                            <a href="/calculatePrice"
                                                                                                class="imgcalcdiv align-center bg-gray-300 flex justify-center rounded-md">
                                                                                                <img src="assets/images/calculator/bathroomclean.png"
                                                                                                    alt="Interior Painting"
                                                                                                    width=""
                                                                                                    class="br-16 max-w-full h-auto" />
                                                                                            </a>
                                                                                        </div>
                                                                                        <button
                                                                                            class="flex items-center capitalize shadow rounded-md w-fit btn px-4 font-bold py-2 mx-auto inptdiv bg-white mt-min-15px">
                                                                                            <!-- Minus Button -->
                                                                                            add
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <hr class="my-8">
                                                                <div class="">
                                                                    <div class="flex gap-3">
                                                                        <div class="flex h-6 shrink-0 items-center">
                                                                            <div class="group grid size-4 grid-cols-1">
                                                                                <input id="offers"
                                                                                    aria-describedby="offers-description"
                                                                                    name="offers" type="checkbox"
                                                                                    checked
                                                                                    class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-pink-600 checked:bg-pink-600 indeterminate:border-pink-600 indeterminate:bg-pink-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto" />
                                                                                <svg class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                                                    viewBox="0 0 14 14" fill="none">
                                                                                    <path
                                                                                        class="opacity-0 group-has-[:checked]:opacity-100"
                                                                                        d="M3 8L6 11L11 3.5"
                                                                                        stroke-width="2"
                                                                                        stroke-linecap="round"
                                                                                        stroke-linejoin="round" />
                                                                                    <path
                                                                                        class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                                                        d="M3 7H11" stroke-width="2"
                                                                                        stroke-linecap="round"
                                                                                        stroke-linejoin="round" />
                                                                                </svg>
                                                                            </div>
                                                                        </div>
                                                                        <div class="text-sm/6">
                                                                            <p id="offers-description"
                                                                                class="text-gray-500 text-sm">
                                                                                Avoid Calling before reaching the
                                                                                location
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>

                                                    </div>
                                                    <div class="calccardspacemini00 faqcustshadow p-5 rounded-lg mt-8">
                                                        <div class="offerscardss">
                                                            <div class="dicmain flex  gap-2">
                                                                <div
                                                                    class="discounticonimgdiv bg-gray-100 p-3 rounded-md">
                                                                    <img src="assets/images/calculator/discounticon.png"
                                                                        alt="Interior Painting" width=""
                                                                        class="w-full max-w-full h-auto" />
                                                                </div>
                                                                <div class="textdiv">
                                                                    <p class="font-semibold">Coupons and offers</p>
                                                                    <p class="text-gray-500">login/sing up to view
                                                                        offers</p>
                                                                </div>
                                                            </div>
                                                            <div class="viewmoredisc mt-3">
                                                                <a href="" class="viewmoredesc pink-txt font-semibold">
                                                                    View More Offers <i
                                                                        class="fa-solid fa-angle-down ms-1"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="calccardspacemini00 faqcustshadow p-5 rounded-lg mt-8">
                                                        <div class="offerscardss">
                                                            <h5 class="font-semibold mb-5 text-xl">Payment summary</h5>
                                                            <div class="dicmain ">
                                                                <table class="w-full">
                                                                    <tr>
                                                                        <td>Item total</td>
                                                                        <td class="text-end">₹2000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Item discount</td>
                                                                        <td class="pink-txt text-end">-73</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Taxes and Fee</td>
                                                                        <td class="pink-txt text-end">₹69</td>
                                                                    </tr>
                                                                </table>
                                                            </div> 
                                                        </div>
                                                    </div>
                                                    <div class="allrevcard">
                                                        <div class="cartvietotldiv bg-pink-100 rounded-xl px-4 py-3 mt-8">
                                                            <div class="flex justify-between flex-col items-center">
                                                                <div class="includedcrdsmain flex w-full justify-between mb-3  gap-4">
                                                                    <div class="inclflex flex gap-3 items-center"> 
                                                                        <div class="inccontent">
                                                                            <h5 class="font-bold text-lg">Amount to pay</h5>
                                                                        </div>
                                                                    </div> 
                                                                    <div class="flexrevstar flex items-end flex-col gap-1">
                                                                        <p class="text-gray-900 font-se text-sm">₹1950</p>
                                                                        <a class="pink-txt text-sm">View breakup</a>
                                                                        
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
                </div>
            </div>
            <div class="max-w-6xl mx-auto"></div>
        </div>
        <section id="faq" class="px-4 pt-100">
            <div class="container mx-auto">
                <h2 class="text-center font-bold mb-5">FAQs</h2>
                <div class="accordion flex flex-col items-center justify-center">
                    <!--  Panel 1  -->
                    <div class="w-full lg:w-1/2 shadow11 mb-4">
                        <input type="checkbox" name="panel" id="panel-1" class="hidden" />
                        <label for="panel-1" class="relative block bg-white text-black p-4 rounded-2xl">Questions text
                            goes
                            here</label>
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
                        <input type="checkbox" name="panel" id="panel-2" class="hidden" />
                        <label for="panel-2" class="relative block bg-white text-black p-4 rounded-2xl">Questions text
                            goes
                            here</label>
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
                        <input type="checkbox" name="panel" id="panel-3" class="hidden" />
                        <label for="panel-3" class="relative block bg-white text-black p-4 rounded-2xl">Questions text
                            goes
                            here</label>
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
                        <input type="checkbox" name="panel" id="panel-4" class="hidden" />
                        <label for="panel-4" class="relative block bg-white text-black p-4 rounded-2xl">Questions text
                            goes
                            here</label>
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
                        <input type="checkbox" name="panel" id="panel-5" class="hidden" />
                        <label for="panel-5" class="relative block bg-white text-black p-4 rounded-2xl">Questions text
                            goes
                            here</label>
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
    </section>

    <!-- service Post section end -->
</template>

<style scoped>
    @import "../assets/css/checkout.css";
</style>