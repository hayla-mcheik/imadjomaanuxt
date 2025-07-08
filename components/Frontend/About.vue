<script setup lang="ts">
const containerRef = ref(null)
const slides = ref([
  {
    date: 'Jan 2020',
    title: 'Founded',
    description: 'Promofix was founded with a vision to revolutionize marketing solutions.',
    stats: []
  },
  {
    date: 'Mar 2021',
    title: 'First Major Client',
    description: 'Secured our first enterprise client, marking a significant growth milestone.',
    stats: [
      { value: '50+', label: 'Projects' }
    ]
  },
  {
    date: 'Sep 2021',
    title: 'Team Expansion',
    description: 'Grew our team to 15 marketing specialists and developers.',
    stats: [
      { value: '15', label: 'Team Members' }
    ]
  },
  {
    date: 'Jun 2022',
    title: 'Platform Launch',
    description: 'Launched our proprietary marketing analytics platform.',
    stats: [
      { value: '200+', label: 'Active Users' }
    ]
  },
  {
    date: 'Feb 2023',
    title: 'Award Recognition',
    description: 'Received "Marketing Innovator of the Year" award.',
    stats: [
      { value: '5', label: 'Industry Awards' }
    ]
  }
])

const swiper = useSwiper(containerRef, {
  effect: 'creative',
  loop: true,
  centeredSlides: true,
  slidesPerView: 1.2,
  autoplay: {
    delay: 5000,
  },
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ['-20%', 0, -400],
    },
    next: {
      shadow: true,
      translate: ['20%', 0, -400],
    },
  },
})

onMounted(() => {
  console.log(swiper.instance)
})
</script>

<template>
     <section class="py-16">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-3xl md:text-4xl font-bold mb-6 font-montserrat">About Promofix</h1>
        <div class="max-w-3xl mx-auto">
          <div class="text-green-500  text-4xl mb-4">❝</div>
          <blockquote class="text-xl md:text-2xl font-medium italic leading-relaxed">
            Success in marketing comes from understanding people better than they understand themselves. 
            We don't just sell products; we create experiences that resonate on a human level.
          </blockquote>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Mission -->
          <div class="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h2 class="text-2xl font-bold mb-4 font-montserrat text-green-500 ">Our Mission</h2>
            <p class="mb-4 leading-relaxed">
              To empower businesses of all sizes with innovative marketing solutions that drive growth, 
              foster meaningful connections with customers, and create lasting brand value.
            </p>
            <ul class="space-y-3 mt-4">
              <li class="flex items-start">
                <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                <span>Deliver measurable results through data-driven strategies</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                <span>Foster innovation and creativity in every campaign</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                <span>Build long-term partnerships based on trust</span>
              </li>
            </ul>
          </div>
          
          <!-- Vision -->
          <div class="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h2 class="text-2xl font-bold mb-4 font-montserrat text-green-500 ">Our Vision</h2>
            <p class="mb-4 leading-relaxed">
              To be the catalyst for business transformation in the digital age, setting new standards for marketing excellence 
              while creating a positive impact on the communities we serve.
            </p>
            <div class="mt-4 bg-blue-900/30 rounded-lg p-4 border-l-4 border-green-500">
              <p class="italic">
                "We envision a world where marketing builds bridges between businesses and customers, 
                creating value that extends beyond transactions to meaningful relationships."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  <section class="py-16 bg-gray-900">
    <div class="container mx-auto px-4">

      <ClientOnly>
        <swiper-container ref="containerRef" class="milestone-swiper" :init="false">
          <swiper-slide
            v-for="(slide, idx) in slides"
            :key="idx"
          >
            <div class="milestone-card">
              <div class="milestone-header">
                <div class="milestone-date">
                  <i class="fas fa-calendar-alt mr-2 text-blue-500"></i>
                  {{ slide.date }}
                </div>
                <div class="milestone-badge">
                  <span class="text-xs font-bold bg-blue-500 text-white py-1 px-3 rounded-full">
                    Milestone
                  </span>
                </div>
              </div>
              
              <h3 class="milestone-title">{{ slide.title }}</h3>
              <p class="milestone-description">{{ slide.description }}</p>
              
              <div class="milestone-stats" v-if="slide.stats.length">
                <div 
                  v-for="(stat, statIdx) in slide.stats" 
                  :key="statIdx"
                  class="stat-item"
                >
                  <div class="stat-value">{{ stat.value }}</div>
                  <div class="stat-label">{{ stat.label }}</div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
    </div>
  </section>
</template>

<style lang="css">
.milestone-swiper {
  position: relative;
  padding: 40px 0;
}


swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 40px 0;
  box-sizing: border-box;
  position: relative;
}

.milestone-card {
  background: linear-gradient(145deg, #1a202c, #2d3748);
  border: 1px solid #2d3748;
  border-radius: 12px;
  padding: 24px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease;
}

.milestone-card:hover {
  transform: translateY(-5px);
}

.milestone-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.milestone-date {
  color: white;
  font-weight: 500;
  display: flex;
  align-items: center;
}

.milestone-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 12px;
  position: relative;
}

.milestone-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 50px;
  height: 3px;
  background: green;
  border-radius: 3px;
}

.milestone-description {
  color: #a0aec0;
  line-height: 1.6;
  margin-bottom: 20px;
}

.milestone-stats {
  display: flex;
  gap: 20px;
}

.stat-item {
  text-align: center;
}

.stat-value {
  font-size: 1.8rem;
  font-weight: 800;
  color: green;
  line-height: 1;
}

.stat-label {
  font-size: 0.85rem;
  color: #718096;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Active slide styling */
swiper-slide-active .milestone-card {
  background: linear-gradient(145deg, #2d3748, #1a202c);
  border-color: green;
}

swiper-slide-active .milestone-title {
  color: #ebf8ff;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .milestone-swiper::before {
    left: 30px;
  }
  
  .milestone-card {
    margin-left: 45px;
  }
  
  swiper-slide {
    justify-content: flex-start;
  }
}

</style>
