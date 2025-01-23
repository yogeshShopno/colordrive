<script setup>
  import TopBar from '@/components/TopBar.vue';
  import Loader from '@/components/Loader.vue'
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
</script>
<template>
  <div>
    <Loader />
    <TopBar />
    <Header />
    <slot />
    <Footer />
  </div>
</template>
<style scoped>
/* Your layout-specific styles here */
</style>
