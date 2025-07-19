<template>
  <!-- Projects Section -->
  <div class="projects-section py-20 bg-black border-b-8 border-white relative overflow-hidden m-0">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="pattern-dots pattern-red-500 pattern-opacity-100 pattern-size-4 w-full h-full"></div>
    </div>

    <div class="container mx-auto relative z-10 m-0 p-0">
      <!-- Section Title -->
      <div class="section-title mb-12 px-4 max-w-8xl container">
        <h2 class="text-xl md:text-xl font-bold text-white">Our <span class="text-transparent bg-clip-text bg-white">Technologies</span></h2>
      </div>
      
      <!-- Project Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 p-0 m-0">
        <!-- Project Boxes -->
        <div 
          v-for="(project, index) in technologies"
          :key="index"
          class="box-company relative group bg-black overflow-hidden shadow-2xl border border-white transform transition-all duration-500"
          :style="{'border-color': project.color || '#ffffff'}"
        >
          <!-- Front Content -->
          <div class="p-8 flex flex-col items-center min-h-[200px] relative justify-center">
            <div class="w-32 h-32 mb-4 flex items-center justify-center">
              <img 
                :src="`${mediaBase}/${project.image}`"
                :alt="project.title" 
                class="max-w-full max-h-full object-contain"
                v-if="project.image"
              >
              <div v-else class="text-white text-4xl font-bold">
                {{ project.title }}
              </div>
            </div>
            <h3 class="text-white text-2xl font-bold text-center">{{ project.title }}</h3>
          </div>

          <!-- Hover Content Overlay -->
          <div
            class="box-company-content absolute inset-0 text-white flex flex-col justify-center items-center p-8 text-center"
            :style="{backgroundColor: project.color || '#000000', backgroundImage: `linear-gradient(to bottom, ${project.color || '#000000'}, #000000)`}"
          >
            <h4 class="text-2xl font-bold mb-4">{{ project.title }}</h4>
            <p class="mb-4">{{ project.description }}</p>
          </div>
        </div>
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

const technologies = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get(`${apiBaseUrl}/technologies`);
    console.log(response);
    if (response.data) {
      // Handle both array and single project responses
      technologies.value = Array.isArray(response.data) 
        ? response.data 
        : [response.data];
      
      // Ensure each project has a color fallback
      technologies.value = response.data.technologies;
      console.log(technologies);
    }
  } catch (error) {
    console.error('Error fetching technologies data:', error);
    // Fallback to empty array if API fails
    technologies.value = [];
  }
});
</script>

<style scoped>
.max-w-8xl {
  max-width: 90%;
}

.projects-section {
  background: linear-gradient(135deg, #000 0%, #111 100%);
}

.box-company {
  perspective: 1000px;
  transform-style: preserve-3d;
  border-width: 1px;
}

.box-company-content {
  opacity: 0;
  transform: translateY(100%);
  transition: 
    opacity 0.5s cubic-bezier(0.34, 1.56, 0.64, 1),
    transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
  will-change: opacity, transform;
  backface-visibility: hidden;
}

.box-company:hover .box-company-content {
  opacity: 1;
  transform: translateY(0);
}

.pattern-dots {
  background-image: radial-gradient(currentColor 1px, transparent 1px);
  background-size: 20px 20px;
  background-position: 0 0;
}

/* Glow effect on hover */
.box-company:hover {
  box-shadow: 0 0 30px rgba(100, 100, 255, 0.2);
  z-index: 10;
}

/* Individual glow colors based on project color */
.box-company:hover {
  box-shadow: 0 0 30px var(--glow-color);
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .projects-section {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
  
  .box-company-content {
    transform: translateY(50%);
  }
  
  .box-company:hover .box-company-content {
    transform: translateY(0);
  }
}
</style>