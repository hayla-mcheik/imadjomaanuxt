<template>
  <div class="our-scrolling-ticker">
    <div class="scrolling-ticker-box">
      <div class="scrolling-content">
        <template v-for="(logo, index) in apiLogos" :key="'api-' + index">
          <!-- Regular logo -->
          <span class="logo-container">
            <img :src="`${mediaBase}/${logo.image}`" class="logo-img" :alt="logo.alt || 'Partner logo'">
          </span>
          
          <!-- Insert JGroup logo after every 3rd logo (except last) -->
          <span 
            v-if="(index + 1) % 3 === 0 && index !== apiLogos.length - 1" 
            class="logo-container jgroup-logo"
          >
            <img src="/assets/images/jgroup-logo.png" class="logo-img" alt="JGroup logo">
          </span>
        </template>
      </div>
           <div class="scrolling-content">
        <template v-for="(logo, index) in apiLogos" :key="'api-' + index">
          <!-- Regular logo -->
          <span class="logo-container">
            <img :src="`${mediaBase}/${logo.image}`" class="logo-img" :alt="logo.alt || 'Partner logo'">
          </span>
          
          <!-- Insert JGroup logo after every 3rd logo (except last) -->
          <span 
            v-if="(index + 1) % 3 === 0 && index !== apiLogos.length - 1" 
            class="logo-container jgroup-logo"
          >
            <img src="/assets/images/jgroup-logo.png" class="logo-img" alt="JGroup logo">
          </span>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

const runtimeConfig = useRuntimeConfig();
const apiBaseUrl = runtimeConfig.public.apiBase || 'http://127.0.0.1:8000';
const mediaBase = runtimeConfig.public.mediaBase || 'http://127.0.0.1:8000';

const apiLogos = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get(`${apiBaseUrl}/logos`);
    if (response.data && response.data.logos) {
      apiLogos.value = Array.isArray(response.data.logos) 
        ? response.data.logos 
        : [response.data.logos];
    }
  } catch (error) {
    console.error('Error fetching logos data:', error);
    if (apiLogos.value.length === 0) {
      apiLogos.value = [...localLogos.value];
    }
  }
});
</script>

<style scoped>
.our-scrolling-ticker {
  background-color: var(--black-color);
  padding: 26px 0;
  width: 100%;
  overflow: hidden;
}

.scrolling-ticker-box {
  --gap: 40px;
  position: relative;
  display: flex;
  overflow: hidden;
  user-select: none;
  gap: var(--gap);
}

.scrolling-content {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: var(--gap);
  min-width: 100%;
  animation: scroll 30s linear infinite;
}

.logo-container {
  display: inline-flex;
  width: 100px;
  height: 60px;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
}

/* Optional: Add special styling for JGroup logo */
.logo-container.jgroup-logo {
  width: 120px; /* Slightly larger if desired */
  position: relative;
}

.logo-container.jgroup-logo::before {
  content: "";
  position: absolute;
  height: 60%;
  width: 1px;
  background-color: rgba(255,255,255,0.2);
  left: -20px;
}

.logo-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  object-position: center;
  display: block;
  margin: 0;
  padding: 0;
}

@keyframes scroll {
  from { transform: translateX(0); }
  to { transform: translateX(calc(-100% - var(--gap))); }
}

@media (max-width: 768px) {
  .scrolling-ticker-box {
    --gap: 20px;
  }
  
  .logo-container {
    width: 80px;
    height: 50px;
  }
  
  .logo-container.jgroup-logo {
    width: 90px;
  }
  
  .scrolling-content {
    animation-duration: 20s;
  }
}
</style>