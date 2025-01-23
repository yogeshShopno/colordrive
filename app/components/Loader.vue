<script setup>
import { ref, onMounted } from 'vue';

const isLoaded = ref(false);

onMounted(() => {
  const handleLoad = () => {
    isLoaded.value = true;
    document.getElementById('loader').style.display = 'none';
    window.removeEventListener('load', handleLoad); // Remove listener once done
  };

  // Check if the document is already loaded
  if (document.readyState === 'complete') {
    handleLoad();
  } else {
    window.addEventListener('load', handleLoad);
  }
});
</script>

<template>
  <div v-if="!isLoaded" id="loader" class="loader">
    <img src="assets/images/loader.gif" alt="Loading..." />
  </div>
  <!-- Other content here -->
</template>

<style scoped>
.loader {
  /* Optional: Styles for loader positioning and visibility */
}
</style>
