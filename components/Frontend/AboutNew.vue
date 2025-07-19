<template>
     <section class="py-16">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-3xl md:text-4xl font-bold mb-6 font-montserrat">About Imad Jomaa</h1>
        <div class="max-w-5xl mx-auto mt-4">
          <blockquote class="text-lg md:text-lg font-medium">
         {{ aboutContent }}
          </blockquote>
        </div>
      </div>
    </section>

</template>


<script setup>
import axios from 'axios';
const authStore = useAuthStore();
import { ref, onMounted } from 'vue';
// API base URL - configure this in your nuxt.config.js
const runtimeConfig = useRuntimeConfig();
const apiBaseUrl = runtimeConfig.public.apiBase || 'http://127.0.0.1:8000';
const aboutContent = ref('');

onMounted(async () => {
  try {
      const response = await axios.get(`${apiBaseUrl}/about-data`,{
      headers: {
        Authorization: `Bearer ${authStore.token}`
      }
    });
    console.log(response);

    if (response) {
      aboutContent.value = response.data.about.smalldesc;
    }
  } catch (error) {
    console.error('Error fetching about data:', error);

  }
});
</script>

<style scoped>

</style>