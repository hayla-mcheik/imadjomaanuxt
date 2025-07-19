<template>
  <ClientOnly>
    <div class="milestones-section bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div class="container mx-auto max-w-7xl px-4 relative z-10">
        <!-- Milestone Slider -->
        <div class="milestone-slider relative">
          <!-- Navigation Arrows -->
          <button 
            @click="prevSlide" 
            class="absolute left-0 top-1/2 z-20 transform -translate-y-1/2 -translate-x-4 bg-black/70 hover:bg-red-600 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300"
            aria-label="Previous milestone"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            @click="nextSlide" 
            class="absolute right-0 top-1/2 z-20 transform -translate-y-1/2 translate-x-4 bg-black/70 hover:bg-red-600 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300"
            aria-label="Next milestone"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <!-- Slides Container -->
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
              class="flex h-full transition-transform duration-500 ease-in-out" 
              :style="`transform: translateX(${translateX})`"
              :class="{ 'transition-none': isDragging }"
            >
              <!-- Slides -->
              <div 
                v-for="(milestone, index) in visibleSlides" 
                :key="index"
                class="milestone-slide flex-shrink-0 w-full h-full relative px-0 transition-all duration-300"
                :class="{
                  'active-slide': isActiveSlide(index),
                  'inactive-slide': !isActiveSlide(index)
                }"
              >
                <div 
                  class="absolute inset-0 bg-cover bg-center transition-all duration-1000"
                  :style="{ backgroundImage: `url(${milestone.image})` }"
                >
                  <div 
                    class="absolute inset-0 transition-all duration-700"
                    :class="isActiveSlide(index)
                      ? 'bg-gradient-to-t from-black/50 to-black/20' 
                      : 'bg-gradient-to-t from-black/90 to-black/60'"
                  ></div>
                </div>
                <div class="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-8">
                  <div class="milestone-date text-red-500 font-bold text-5xl mb-2 tracking-wide">
                    {{ milestone.date }}
                  </div>
                  <h3 class="text-white text-3xl md:text-4xl font-bold mb-6 max-w-3xl">
                    {{ milestone.title }}
                  </h3>
                  <p class="text-gray-300 text-lg md:text-lg max-w-2xl leading-relaxed">
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
              @click="goToSlide(index)"
              :class="[
                'relative flex flex-col items-center',
                currentIndex === index ? 'text-red-500' : 'text-gray-400'
              ]"
              :aria-label="`Go to milestone ${index + 1}`"
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
            </button>
          </div>
        </div>
      </div>

      <!-- Decorative Elements -->
      <div class="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-red-900/10 to-transparent"></div>
      <div class="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-red-900/10 to-transparent"></div>
    </div>
  </ClientOnly>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

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
    description: 'Our journey began in a small garage with a vision to revolutionize the industry.',
    image: imageUrls[0]
  },
  {
    date: '2013',
    title: 'First Major Product Launch',
    description: 'After three years of research, we launched our flagship product.',
    image: imageUrls[1]
  },
  {
    date: '2016',
    title: 'International Expansion',
    description: 'We opened offices in three new countries, establishing our global presence.',
    image: imageUrls[2]
  },
  {
    date: '2019',
    title: 'Acquisition of Tech Innovations',
    description: 'We acquired a leading tech company, expanding our capabilities.',
    image: imageUrls[3]
  },
  {
    date: '2023',
    title: 'Global Recognition Award',
    description: 'Our work received international recognition with the Global Innovation Award.',
    image: imageUrls[4]
  }
]);

const currentIndex = ref(0);
const isDragging = ref(false);
const startX = ref(0);
const dragOffset = ref(0);
const windowWidth = ref(0);
let autoSlideInterval = null;
let isTransitioning = ref(false);

// Computed properties
const visibleSlides = computed(() => {
  // For infinite loop effect
  return [
    milestones.value[milestones.value.length - 1], // Last slide clone
    ...milestones.value, // All regular slides
    milestones.value[0] // First slide clone
  ];
});

const translateX = computed(() => {
  if (windowWidth.value === 0) return '0%'; // SSR fallback
  
  // Calculate offset based on window width
  const offset = isDragging.value ? dragOffset.value : 0;
  
  if (windowWidth.value < 768) {
    return `calc(${-currentIndex.value * 100}% + ${offset}px)`;
  }
  return `calc(${-currentIndex.value * (100 / 1.5)}% + ${offset}px)`;
});

// Methods
const isActiveSlide = (index) => {
  return currentIndex.value === index;
};

const nextSlide = () => {
  if (isTransitioning.value) return;
  
  isTransitioning.value = true;
  currentIndex.value = (currentIndex.value + 1) % milestones.value.length;
  
  setTimeout(() => {
    isTransitioning.value = false;
  }, 500);
};

const prevSlide = () => {
  if (isTransitioning.value) return;
  
  isTransitioning.value = true;
  currentIndex.value = (currentIndex.value - 1 + milestones.value.length) % milestones.value.length;
  
  setTimeout(() => {
    isTransitioning.value = false;
  }, 500);
};

const goToSlide = (index) => {
  if (isTransitioning.value) return;
  
  isTransitioning.value = true;
  currentIndex.value = index;
  
  setTimeout(() => {
    isTransitioning.value = false;
  }, 500);
};

const resetAutoSlide = () => {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(nextSlide, 5000);
};

// Swipe/Drag functionality
const startDrag = (e) => {
  isDragging.value = true;
  startX.value = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
  dragOffset.value = 0;
};

const onDrag = (e) => {
  if (!isDragging.value) return;
  
  if (e.type === 'touchmove') {
    e.preventDefault();
  }
  
  const currentX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
  dragOffset.value = currentX - startX.value;
};

const endDrag = () => {
  if (!isDragging.value) return;
  
  isDragging.value = false;
  const threshold = 50;
  
  if (dragOffset.value > threshold) {
    prevSlide();
  } else if (dragOffset.value < -threshold) {
    nextSlide();
  }
  
  dragOffset.value = 0;
};

// Lifecycle hooks
onMounted(() => {
  windowWidth.value = window.innerWidth;
  resetAutoSlide();
  
  const handleResize = () => {
    windowWidth.value = window.innerWidth;
  };
  
  window.addEventListener('resize', handleResize);
  
  onBeforeUnmount(() => {
    clearInterval(autoSlideInterval);
    window.removeEventListener('resize', handleResize);
  });
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
  padding: 0 10px;
  box-sizing: border-box;
}

@media (min-width: 768px) {
  .milestone-slide {
    width: 50%;
    padding: 0 20px;
  }
  
  .milestone-slide.active-slide {
    transform: scale(1.05);
    z-index: 20;
  }
  
  .milestone-slide.inactive-slide {
    transform: scale(0.95);
    opacity: 0.8;
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

  .milestone-slide {
    padding: 0 5px;
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
}

/* Disable transitions during drag for smooth dragging */
.transition-none {
  transition: none !important;
}

/* Ensure slides are properly centered on mobile */
@media (max-width: 767px) {
  .milestone-slide {
    width: 100% !important;
    padding: 0 10px;
  }
}
</style>