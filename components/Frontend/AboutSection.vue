<template>
     <section class="about-section py-2">
      <div class="container mx-auto px-4">
        <div class=" mt-4">
       
   <div class="row mt-5 align-items-center">
  <div class="col-md-5 col-12">
    <div class="about-mission-vision text-left">     
      <h2>Our Mission</h2>
      <p class="text-sm">{{ mission }}</p>
    </div>   
  </div>

  <div class="col-md-2 d-flex justify-content-center">
    <hr class="vertical-line d-none d-md-block" />
  </div>

  <div class="col-md-5 col-12">
    <div class="about-mission-vision text-left">     
      <h2>Our Vision</h2>
      <p class="text-sm">{{ vision }}</p>
    </div>       
  </div>
</div>

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
const mission = ref('');
const vision = ref('');

onMounted(async () => {
  try {
      const response = await axios.get(`${apiBaseUrl}/about-data`,{
      headers: {
        Authorization: `Bearer ${authStore.token}`
      }
    });
    console.log(response);

    if (response) {
      mission.value = response.data.about.mission;
      vision.value = response.data.about.vision;
    }
  } catch (error) {
    console.error('Error fetching about data:', error);

  }
});
</script>


<style scoped>
.about-section {
  position: relative;
  overflow: hidden;
}

.about-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px);
  background-size: 20px 20px;
  z-index: 0;
}
.vertical-line {
  width: 1px;
  height: 100px;
  background-color: #fff;
  border: none;
}

</style>