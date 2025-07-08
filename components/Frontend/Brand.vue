<template>
  <!-- Projects Section -->
  <div class="projects-section py-20 bg-black border-b-8 border-white relative overflow-hidden m-0">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="pattern-dots pattern-red-500 pattern-opacity-100 pattern-size-4 w-full h-full"></div>
    </div>

    <div class="container mx-auto relative z-10 m-0 p-0">
      <!-- Section Title -->
     <div class="section-title mb-12 px-4 max-w-8xl container ">
          <h2 class="text-4xl md:text-5xl font-bold text-white">Our <span class="text-transparent bg-clip-text bg-white">Technologies</span></h2>
      
      </div>
      <!-- Project Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 p-0 m-0">
        <!-- Project Boxes -->
        <div 
          v-for="(project, index) in projects"
          :key="index"
          class="box-company relative group bg-black overflow-hidden shadow-2xl border border-white transform transition-all duration-500"
        >
          <!-- Front Content -->
          <div class="p-8 flex flex-col items-center min-h-[200px] relative justify-center">

            
        
            <h3 class="text-white text-2xl font-bold text-center">{{ project.name }}</h3>
          </div>

          <!-- Hover Content Overlay -->
          <div
            class="box-company-content absolute inset-0 text-white flex flex-col justify-center items-center p-8 text-center"
            :class="project.overlayClass"
          >
            <h4 class="text-2xl font-bold mb-4">{{ project.name }}</h4>
            <p class="mb-4">{{ project.description }}</p>

          </div>
        </div>
      </div>
      

    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    name: 'VaynerX',
    description: 'Full-service agency focused on building brands for the digital age.',
    gradientClass: 'bg-gradient-to-r from-red-600 to-red-800',
    overlayClass: 'bg-gradient-to-b from-black to-red-900',
    buttonClass: 'text-red-600 hover:bg-gray-100'
  },
  {
    name: 'Gallery Media',
    description: 'Digital media company creating culturally relevant content.',
    gradientClass: 'bg-gradient-to-r from-blue-500 to-blue-700',
    overlayClass: 'bg-gradient-to-b from-black to-blue-900',
    borderClass: 'hover:border-blue-500',
    buttonClass: 'text-blue-600 hover:bg-gray-100'
  },
  {
    name: 'PureWow',
    description: 'Lifestyle media brand reaching millions of modern women monthly.',
    gradientClass: 'bg-gradient-to-r from-purple-500 to-purple-700',
    overlayClass: 'bg-gradient-to-b from-black to-purple-900',
    borderClass: 'hover:border-purple-500',
    buttonClass: 'text-purple-600 hover:bg-gray-100'
  },
  {
    name: 'The Sasha Group',
    description: 'Brand consultancy helping businesses find their authentic voice.',
    gradientClass: 'bg-gradient-to-r from-green-500 to-green-700',
    overlayClass: 'bg-gradient-to-b from-black to-green-900',
    borderClass: 'hover:border-green-500',
    buttonClass: 'text-green-600 hover:bg-gray-100'
  },
  {
    name: 'VaynerSpeakers',
    description: 'Premier speakers bureau representing top industry thought leaders.',
    gradientClass: 'bg-gradient-to-r from-yellow-500 to-yellow-700',
    overlayClass: 'bg-gradient-to-b from-black to-yellow-900',
    borderClass: 'hover:border-yellow-500',
    buttonClass: 'text-yellow-600 hover:bg-gray-100'
  },
  {
    name: 'VaynerCommerce',
    description: 'E-commerce accelerator driving direct-to-consumer growth.',
    gradientClass: 'bg-gradient-to-r from-pink-500 to-pink-700',
    overlayClass: 'bg-gradient-to-b from-black to-pink-900',
    borderClass: 'hover:border-pink-500',
    buttonClass: 'text-pink-600 hover:bg-gray-100'
  }
];
</script>

<style scoped>
.max-w-8xl{
  max-width: 90%;
}
.projects-section {
  background: linear-gradient(135deg, #000 0%, #111 100%);
}

.box-company {
  perspective: 1000px;
  transform-style: preserve-3d;
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
}

/* Individual glow colors */
.box-company:hover:nth-child(1) {
  box-shadow: 0 0 30px rgba(220, 38, 38, 0.4);
}
.box-company:hover:nth-child(2) {
  box-shadow: 0 0 30px rgba(59, 130, 246, 0.4);
}
.box-company:hover:nth-child(3) {
  box-shadow: 0 0 30px rgba(139, 92, 246, 0.4);
}
.box-company:hover:nth-child(4) {
  box-shadow: 0 0 30px rgba(34, 197, 94, 0.4);
}
.box-company:hover:nth-child(5) {
  box-shadow: 0 0 30px rgba(234, 179, 8, 0.4);
}
.box-company:hover:nth-child(6) {
  box-shadow: 0 0 30px rgba(236, 72, 153, 0.4);
}

/* Pulse animation for CTA */
@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.7); }
  70% { box-shadow: 0 0 0 12px rgba(220, 38, 38, 0); }
  100% { box-shadow: 0 0 0 0 rgba(220, 38, 38, 0); }
}

a[href="#"]:hover {
  animation: pulse 1.5s infinite;
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