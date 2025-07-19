<template>
  <div class="section-title mb-12 pt-16">
    <h2 class="text-4xl md:text-5xl font-bold text-center text-white">Our <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Locations</span></h2>
  </div>
  
  <div class="map-container">
    <div class="map-image-wrapper">
      <!-- Nature-themed map image -->
      <img 
        src="/assets/images/map.png" 
        alt="Nature Map" 
        class="map-image"
      />
      
      <!-- Dynamic Pins -->
<div 
  v-for="(location, index) in locations" 
  :key="index"
  class="pin" 
  :class="`${location.color || 'red'}-pin`"
  :style="{ 
    left: `${location.position_x || 50}%`, 
    top: `${location.position_y || 50}%` 
  }"
  @click="openPopup(location)"
>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
        </svg>
      </div>
    </div>
    
    <!-- Popup Modal -->
    <div v-if="activeLocation" class="popup-overlay" @click.self="closePopup">
      <div class="popup-content" :class="`${activeLocation.color}`">
        <button class="close-btn" @click="closePopup">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
        <h3>{{ activeLocation.name }}</h3>
        <p>{{ activeLocation.description }}</p>
        <div class="d-block">
          <div>
            <a class="text-black" :href="'tel:' + activeLocation.phone">Phone: {{ activeLocation.phone }}</a>
          </div>
          <div class="mt-2">
            <a class="text-black" :href="'mailto:' + activeLocation.email">Email: {{ activeLocation.email }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const runtimeConfig = useRuntimeConfig();
const apiBaseUrl = runtimeConfig.public.apiBase || 'http://127.0.0.1:8000';
const mediaBase = runtimeConfig.public.mediaBase || 'http://127.0.0.1:8000';

const locations = ref([]);
const activeLocation = ref(null);

const openPopup = (location) => {
  activeLocation.value = location;
};

const closePopup = () => {
  activeLocation.value = null;
};

onMounted(async () => {
  try {
    const response = await axios.get(`${apiBaseUrl}/locations`);
    console.log(response);
    if (response.data && response.data.locations) {
      locations.value = response.data.locations;
  
    }
  } catch (error) {
    console.error('Error fetching locations data:', error);
    // Fallback to default locations if API fails
  }
});

// Helper function for random positioning
const getRandomPosition = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
</script>

<style scoped>
/* Your existing styles remain the same */
.map-container {
  position: relative;

  height: 500px;
  margin: 2rem auto;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.map-image-wrapper {
  position: relative;
  height: 0;
  padding-bottom: 75%; /* 4:3 aspect ratio */
}

.map-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(1.2) contrast(1.05);
}

.pin {
  position: absolute;
  width: 40px;
  height: 40px;
  transform: translate(-50%, -100%);
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
}

.pin svg {
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.pin:hover {
  transform: translate(-50%, -100%) scale(1.2);
}

.red-pin { color: #e53e3e; animation: pulse-red 2s infinite; }
.green-pin { color: #38a169; animation: pulse-green 2s infinite; }
.black-pin { color: #2d3748; animation: pulse-black 2s infinite; }

@keyframes pulse-red {
  0% { transform: translate(-50%, -100%) scale(1); }
  50% { transform: translate(-50%, -100%) scale(1.1); }
  100% { transform: translate(-50%, -100%) scale(1); }
}

@keyframes pulse-green {
  0% { transform: translate(-50%, -100%) scale(1); }
  50% { transform: translate(-50%, -100%) scale(1.15); }
  100% { transform: translate(-50%, -100%) scale(1); }
}

@keyframes pulse-black {
  0% { transform: translate(-50%, -100%) scale(1); }
  50% { transform: translate(-50%, -100%) scale(1.05); }
  100% { transform: translate(-50%, -100%) scale(1); }
}

/* Popup Styles */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
}

.popup-content {
  position: relative;
  background: white;
  border-radius: 12px;
  padding: 2rem;
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  animation: fadeIn 0.3s ease;
}

.popup-content.red { border-top: 6px solid #e53e3e; }
.popup-content.green { border-top: 6px solid #38a169; }
.popup-content.black { border-top: 6px solid #2d3748; }

.popup-content h3 {
  margin-top: 0;
  color: #2d3748;
  font-size: 1.5rem;
}

.popup-content p {
  color: #4a5568;
  line-height: 1.6;
}

.popup-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-top: 1rem;
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.close-btn svg {
  width: 24px;
  height: 24px;
  stroke-width: 2;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .pin {
    width: 30px;
    height: 30px;
  }
  
  .popup-content {
    padding: 1.5rem;
  }
}
</style>