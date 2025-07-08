<template>
  <div class="milestones-section bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
    <div class="container mx-auto max-w-7xl px-4 relative z-10">

      <!-- Milestone Slider -->
      <div class="milestone-slider relative">
        <!-- Navigation Arrows -->
        <button @click="prevSlide" class="absolute left-0 top-1/2 z-20 transform -translate-y-1/2 -translate-x-4 bg-black/70 hover:bg-red-600 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button @click="nextSlide" class="absolute right-0 top-1/2 z-20 transform -translate-y-1/2 translate-x-4 bg-black/70 hover:bg-red-600 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Slides Container with Swipe Events -->
        <div 
          class="relative overflow-hidden h-[600px]"
          @mousedown="startDrag"
          @mousemove="onDrag"
          @mouseup="endDrag"
          @mouseleave="endDrag"
          @touchstart="startDrag"
          @touchmove="onDrag"
          @touchend="endDrag"
        >
          <div 
            class="flex h-full transition-transform duration-700 ease-in-out" 
            :style="`transform: translateX(calc(${translateX}% + ${dragOffset}px))`"
            :class="{ 'transition-none': isDragging }"
          >
            <div 
              v-for="(milestone, index) in milestones" 
              :key="index"
              class="milestone-slide flex-shrink-0 w-full md:w-1/3 h-full relative px-0 md:px-0 transition-all duration-300"
              :class="{
                'active-slide': currentIndex === index,
                'inactive-slide': currentIndex !== index
              }"
            >
              <!-- Background Image with Overlay - Reduced for active slide -->
              <div 
                class="absolute inset-0 bg-cover bg-center transition-all duration-1000"
                :style="{ backgroundImage: `url(${milestone.image})` }"
              >
                <div 
                  class="absolute inset-0 transition-all duration-700"
                  :class="currentIndex === index 
                    ? 'bg-gradient-to-t from-black/50 to-black/20' 
                    : 'bg-gradient-to-t from-black/90 to-black/60'"
                ></div>
              </div>

              <!-- Content -->
              <div class="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-8">
                <div class="milestone-date text-red-500 font-bold text-5xl mb-2 tracking-wide">
                  {{ milestone.date }}
                </div>
                <h3 class="text-white text-3xl md:text-4xl font-bold mb-6 max-w-3xl">
                  {{ milestone.title }}
                </h3>
                <p class="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed">
                  {{ milestone.description }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Timeline Points -->
        <div class="timeline-points flex justify-center mt-8 space-x-8">
          <button 
            v-for="(milestone, index) in milestones" 
            :key="index"
            @click="setSlide(index)"
            :class="[
              'relative flex flex-col items-center',
              currentIndex === index ? 'text-red-500' : 'text-gray-400'
            ]"
          >
            <div 
              class="w-6 h-6 rounded-full border-2 mb-2 flex items-center justify-center transition-all"
              :class="currentIndex === index ? 'border-red-500 bg-red-500/20' : 'border-gray-500'"
            >
              <div 
                v-if="currentIndex === index" 
                class="w-3 h-3 rounded-full bg-red-500"
              ></div>
            </div>
            <span class="text-sm font-medium text-white">{{ milestone.date }}</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Decorative Elements -->
    <div class="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-red-900/10 to-transparent"></div>
    <div class="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-red-900/10 to-transparent"></div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

// Mock image URLs
const imageUrls = [
  'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1412&q=80',
];

const milestones = ref([
  {
    date: '2010',
    title: 'Company Founded',
    description: 'Our journey began in a small garage with a vision to revolutionize the industry. We started with just three employees and a dream.',
    image: imageUrls[0]
  },
  {
    date: '2013',
    title: 'First Major Product Launch',
    description: 'After three years of research and development, we launched our flagship product that changed how people interact with technology.',
    image: imageUrls[1]
  },
  {
    date: '2016',
    title: 'International Expansion',
    description: 'We opened offices in three new countries, establishing our global presence and serving clients across continents.',
    image: imageUrls[2]
  },
  {
    date: '2019',
    title: 'Acquisition of Tech Innovations',
    description: 'We acquired a leading tech company, expanding our capabilities and bringing innovative solutions to our customers.',
    image: imageUrls[3]
  },
  {
    date: '2023',
    title: 'Global Recognition Award',
    description: 'Our work received international recognition with the prestigious Global Innovation Award for technological excellence.',
    image: imageUrls[4]
  }
]);

const currentIndex = ref(0);
let autoSlideInterval = null;

// New variables for drag/swipe functionality
const isDragging = ref(false);
const startX = ref(0);
const dragOffset = ref(0);

const translateX = computed(() => {
  return -currentIndex.value * (100 / 3);
});

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % milestones.value.length;
  resetAutoSlide();
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + milestones.value.length) % milestones.value.length;
  resetAutoSlide();
};

const setSlide = (index) => {
  currentIndex.value = index;
  resetAutoSlide();
};

const resetAutoSlide = () => {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(nextSlide, 5000);
};

// Swipe/Drag functionality
const startDrag = (e) => {
  isDragging.value = true;
  // For touch events
  if (e.type === 'touchstart') {
    startX.value = e.touches[0].clientX;
  } else {
    // For mouse events
    startX.value = e.clientX;
  }
  dragOffset.value = 0;
};

const onDrag = (e) => {
  if (!isDragging.value) return;
  
  // Prevent scrolling on touch devices
  if (e.type === 'touchmove') {
    e.preventDefault();
  }
  
  let currentX;
  if (e.type === 'touchmove') {
    currentX = e.touches[0].clientX;
  } else {
    currentX = e.clientX;
  }
  
  dragOffset.value = currentX - startX.value;
};

const endDrag = () => {
  if (!isDragging.value) return;
  
  isDragging.value = false;
  
  // Determine if we should change slides based on drag distance
  const threshold = 100; // Minimum pixels to trigger slide change
  if (dragOffset.value > threshold) {
    prevSlide();
  } else if (dragOffset.value < -threshold) {
    nextSlide();
  }
  
  // Reset drag offset
  dragOffset.value = 0;
};

onMounted(() => {
  resetAutoSlide();
});
</script>

<style scoped>
.milestones-section {
  position: relative;
  background: radial-gradient(ellipse at center, #1a202c 0%, #000 70%);
}

.milestone-slider {
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 25px 50px -12px rgba(220, 38, 38, 0.25);
}

.milestone-slide {
  perspective: 1000px;
  transform-origin: center center;
  flex-shrink: 0;
  width: 100%;
}

@media (min-width: 768px) {
  .milestone-slide {
    width: 33.333%;
    padding: 0;
  }
  
  .milestone-slide.active-slide {
    transform: scale(1);
    z-index: 20;
  }
  
  .milestone-slide.inactive-slide {
    transform: scale(0.9);
    opacity: 0.7;
    z-index: 10;
  }
}

.milestone-date {
  text-shadow: 0 0 15px rgba(220, 38, 38, 0.7);
  position: relative;
}

.milestone-date::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 3px;
  background: linear-gradient(to right, transparent, #ef4444, transparent);
}

.timeline-points button:hover {
  color: #ef4444;
  transform: translateY(-5px);
  transition: transform 0.3s ease;
}

.timeline-points button:hover div {
  border-color: #ef4444;
  transform: scale(1.2);
}

.timeline-points button:focus {
  outline: none;
}

/* Animation for timeline points */
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(239, 68, 68, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0);
  }
}

.timeline-points button.active div {
  animation: pulse 2s infinite;
}

/* Responsive Design */
@media (max-width: 768px) {
  .milestone-slider {
    height: 500px;
  }
  
  .timeline-points {
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
  }
  
  .milestone-date {
    font-size: 2.5rem;
  }
  
  h3 {
    font-size: 1.8rem;
  }
}

@media (max-width: 480px) {
  .milestone-slider {
    height: 450px;
  }
  
  .milestone-date {
    font-size: 2rem;
  }
  
  h3 {
    font-size: 1.5rem;
  }
  
  p {
    font-size: 1rem;
  }
  
  .timeline-points button span {
    font-size: 0.8rem;
  }
}

/* Disable transitions during drag for smooth dragging */
.transition-none {
  transition: none !important;
}
</style>