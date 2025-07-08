<script setup>
import { ref } from 'vue';

const newsItems = ref([
  {
    id: 1,
    title: "Promomedia Wins Tech Innovation Award 2024",
    date: "May 15, 2024",
    category: "Company News",
    excerpt: "Our groundbreaking AR platform recognized as industry leader in digital marketing solutions.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 2,
    title: "How AI is Revolutionizing Event Marketing",
    date: "April 28, 2024",
    category: "Industry Insights",
    excerpt: "Exploring the future of personalized event experiences through artificial intelligence.",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 3,
    title: "Case Study: GSMA MWC Brand Activation",
    date: "March 10, 2024",
    category: "Success Stories",
    excerpt: "How we delivered a 300% ROI for our client at Mobile World Congress Barcelona.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },

]);
</script>

<template>
  <div class="news-section relative py-16 overflow-hidden border-b-8 border-white">
    <!-- Background Elements -->
    <div class="absolute inset-0 z-0">
      <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div class="absolute bottom-1/3 right-1/4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
    </div>
    
    <div class="container relative z-10 mx-auto px-4 max-w-7xl">
      <div class="section-title mb-12 text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-white">Latest <span class="text-transparent bg-clip-text bg-white">News</span></h2>
        <p class="text-gray-400 mt-4 max-w-2xl mx-auto">Stay updated with our insights, achievements, and industry trends</p>
      </div>
      
      <!-- News Grid -->
      <div class="news-grid grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- News Cards with Content Over Image -->
        <div 
          v-for="item in newsItems" 
          :key="item.id" 
          class="news-card group relative overflow-hidden rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl"
        >
          <!-- Background Image -->
              <NuxtLink to="/news-details">
          <div 
            class="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
            :style="{ backgroundImage: `url(${item.image})` }"
          >
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
          </div>
        </NuxtLink>
          <!-- Content Overlay -->
          <div class="relative z-10 p-6 flex flex-col justify-end min-h-[400px]">
            <div class="news-category mb-3">
              <span class="inline-block px-3 py-1 bg-black text-white text-xs font-semibold rounded-full">
                {{ item.category }}
              </span>
            </div>
            
            <h3 class="news-title text-xl font-bold text-white mb-3 leading-tight">{{ item.title }}</h3>
            
            <div class="news-meta flex items-center mb-4 text-sm">
              <div class="news-date flex items-center gap-2 text-white">
                <i class="far fa-calendar"></i>
                <span>{{ item.date }}</span>
              </div>
            </div>
            
            <p class="news-excerpt text-gray-200 text-sm mb-5">{{ item.excerpt }}</p>
            
  
          </div>
        </div>
      </div>
      
      <div class="text-center mt-12">
       <NuxtLink
          to="/news"
          class="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-red-900 text-white font-bold rounded-full text-lg hover:from-red-700 hover:to-red-900 transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-red-900/30"
        >
          View All News
      </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.news-section {
  background: black;
}

.news-card {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.news-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 15px 40px rgba(212, 20, 6, 0.2);
}

.news-title {
  position: relative;
  display: inline-block;
}


.news-card:hover .news-title::after {
  width: 100%;
}

/* Category tag styling */
.news-category span {
  box-shadow: 0 4px 10px #fff;
}

/* CTA button hover effect */
.news-cta:hover {
  box-shadow: 0 0 15px #fff;
}
.view-all-btn[data-v-d92b1fa6] {
    box-shadow: 0 4px 15px rgba(239, 68, 68, 0.4);
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Animation for cards on appear */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.news-card {
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;
}

/* Staggered animation */
.news-card:nth-child(1) { animation-delay: 0.1s; }
.news-card:nth-child(2) { animation-delay: 0.2s; }
.news-card:nth-child(3) { animation-delay: 0.3s; }
.news-card:nth-child(4) { animation-delay: 0.4s; }
.news-card:nth-child(5) { animation-delay: 0.5s; }
.news-card:nth-child(6) { animation-delay: 0.6s; }

/* Responsive adjustments */
@media (max-width: 768px) {
  .news-grid {
    max-width: 500px;
    margin: 0 auto;
  }
  
  .news-card {
    min-height: 350px;
  }
}

.max-w-7xl {
  max-width: 90%;
}
</style>