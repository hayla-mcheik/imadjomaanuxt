<script setup>
import { ref } from 'vue';

const events = ref([
  {
    id: 1,
    title: "GSMA Mobile World Congress",
    date: "February 26-29, 2024",
    location: "Barcelona, Spain",
    description: "The world's largest exhibition for the mobile industry, featuring the latest innovations in 5G, IoT, and AI.",
    logo: "../assets/images/madein-lebanon.webp"
  },
  {
    id: 2,
    title: "Web Summit",
    date: "November 11-14, 2024",
    location: "Lisbon, Portugal",
    description: "The world's premier tech conference where the tech world meets to discuss the future of digital innovation.",
    logo: "../assets/images/WWC-2025.webp"
  },
  {
    id: 3,
    title: "CES",
    date: "January 7-10, 2025",
    location: "Las Vegas, USA",
    description: "The most influential tech event in the world showcasing breakthrough technologies and global innovators.",
    logo: "../assets/images/madein-lebanon.webp"
  },
]);
</script>

<template>
  <div class="events-section relative py-16 overflow-hidden bg-black border-b-8 border-white">
    <!-- Background Elements -->
    <div class="absolute inset-0 z-0">
      <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-red-600 to-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div class="absolute bottom-1/3 right-1/4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
    </div>
    
    <div class="container relative z-10 mx-auto px-4 max-w-7xl">
      <div class="section-title mb-12">
        <h2 class="text-xl md:text-xl font-bold  text-white">Featured <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Events</span></h2>
      </div>
      
      <div class="events-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Event Card -->
        <div 
          v-for="event in events" 
          :key="event.id" 
          class="event-card group relative overflow-hidden rounded-2xl border border-white/10 transition-all duration-500 hover:border-red-500/30"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-gray-900 to-black z-0"></div>
          
          <div class="event-content relative z-10 p-6 h-full flex flex-col">
            <!-- Event Header -->
            <div class="event-header mb-4 flex justify-between items-start">
              <div class="event-logo-container flex items-center justify-center bg-white rounded-lg p-2">
                <img :src="event.logo" :alt="event.title + ' logo'" class="event-logo object-contain ">
              </div>
       
            </div>
            
            <!-- Event Body -->
            <div class="flex-grow mb-5">
              <h3 class="event-title text-xl font-bold text-white mb-3 leading-tight">{{ event.title }}</h3>
              
              <div class="event-meta flex items-center mb-4">
                <div class="event-location flex items-center gap-2 text-gray-300">
                  <i class="fas fa-map-marker-alt text-red-500"></i>
                  <span>{{ event.location }}</span>
                </div>
              </div>
              
              <p class="text-gray-400 text-sm">{{ event.description }}</p>
            </div>
            
    
          </div>
          
          <!-- Hover Effect -->
          <div class="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600"></div>
          </div>
        </div>
      </div>
      
      <!-- View All Button -->
      <div class="text-center mt-12">
       <NuxtLink
          to="/events"
          class="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-red-900 text-white font-bold rounded-full text-lg hover:from-red-700 hover:to-red-900 transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-red-900/30"
        >
          View All Events
      </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.events-section {
  position: relative;
}

.event-card {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.5s ease;
  min-height: 380px;
  display: flex;
  flex-direction: column;
}

.event-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(239, 68, 68, 0.2);
}

.event-title {
  position: relative;
  display: inline-block;
  transition: all 0.3s ease;
}

.event-title::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(to right, #ef4444, #b91c1c);
  transition: width 0.5s ease;
}

.event-card:hover .event-title::after {
  width: 100%;
}

.view-all-btn {
  box-shadow: 0 4px 15px rgba(239, 68, 68, 0.4);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.view-all-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 7px 20px rgba(239, 68, 68, 0.5);
}

@media (max-width: 768px) {
  .events-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
  }
}
.max-w-7xl {
  max-width: 90%;
}
</style>