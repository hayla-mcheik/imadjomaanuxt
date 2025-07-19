<template>
  <!-- Hero Section Start-->
  <div class="hero relative overflow-hidden pt-md-0"  :style="{'background-image' : `url(${mediaBase}/${image})`}">
    <!-- Video Background -->
    <div class="hero-bg-video absolute inset-0 z-0 ">
      <!-- <video autoplay muted loop class="w-full h-full object-cover">
        <source src="/assets/images/hero-video.mp4" type="video/mp4">
      </video> -->
      <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/20 z-10"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10"></div>
    </div>

    <div class="container relative z-20 flex items-center max-w-8xl pt-md-5">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-md-5 ">
        <!-- Left Content Column -->
        <div class="lg:col-span-7 pt-md-5">
          <!-- Section Title -->
      <div class="section-title">
                            <h1 class="text-anime-style-2 italic" data-cursor="-opaque"><span>{{ title }}</span></h1>
                            <p>{{ content }}</p>
                        </div>

   
        </div>

        <!-- Right Image Column -->
        <div class="lg:col-span-4 relative hidden lg:block pt-5">

        </div>

        <!-- Social Icons Column -->
        <!-- <div class="lg:col-span-1  d-md-none d-lg-flex flex justify-center lg:justify-start lg:flex-col lg:items-end lg:space-y-6">
          <div class="social-icons flex lg:flex-col space-x-4 lg:space-x-0 lg:space-y-6">
            <a to="https://facebook.com" target="_blank" class="social-icon animate-bounce delay-100 ">
             <img src="/assets/images/facebook.png" class="w-5"/>
            </a>
            <a to="https://twitter.com" target="_blank" class="social-icon animate-bounce delay-200 ">
            <img src="/assets/images/twitter.png" class="w-5"/>
            </a>
            <a to="https://instagram.com" target="_blank" class="social-icon animate-bounce delay-300">
            <img src="/assets/images/instagram.png" class="w-5"/>
            </a>
            <a to="https://linkedin.com" target="_blank" class="social-icon animate-bounce delay-400">
<img src="/assets/images/linkedin.png" class="w-5"/>
            </a>
          </div>
        </div> -->
      </div>
    </div>

    <!-- Scrolling Indicator -->

  </div>
  <!-- Hero Section End-->
</template>


<script setup>
import axios from 'axios';
const authStore = useAuthStore();
import { ref, onMounted } from 'vue';
// API base URL - configure this in your nuxt.config.js
const runtimeConfig = useRuntimeConfig();
const apiBaseUrl = runtimeConfig.public.apiBase || 'http://127.0.0.1:8000';
const mediaBase = runtimeConfig.public.mediaBase || 'http://127.0.0.1:8000';
const title = ref('');
const content = ref('');
const image = ref('');

onMounted(async () => {
  try {
      const response = await axios.get(`${apiBaseUrl}/hero`,{
      headers: {
        Authorization: `Bearer ${authStore.token}`
      }
    });
    console.log(response);

    if (response) {
      title.value = response.data.hero.title;
      content.value = response.data.hero.description;
      image.value = response.data.hero.image;
      
    }
  } catch (error) {
    console.error('Error fetching hero data:', error);

  }
});
</script>


<style scoped>
.hero {
  background-size: cover;
  background-repeat: no-repeat;
}

.hero-bg-video {
  height: 100%;
}

.hero-bg-video video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.max-w-8xl{
  max-width: 90%;
}
.text-gradient {
  background: linear-gradient(90deg, #fff, red);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-gradient-2 {
  background: linear-gradient(90deg, #fff, red);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  padding: 14px 30px;
  background: linear-gradient(90deg, #000, red);
  color: white;
  font-weight: 600;
  border-radius: 50px;
  transition: all 0.3s ease;
  border: 1px solid #fff;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 7px 20px red;
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  padding: 14px 30px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: white;
  font-weight: 600;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: white;
  backdrop-filter: blur(5px);
  font-size: 18px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.social-icon:hover {
  transform: translateY(-5px);
  background: linear-gradient(90deg, #fff, red);
}

.hero-image-container {
  perspective: 1000px;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-scroll {
  animation: scroll 2s ease-in-out infinite;
}

/* Animations */
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
}

@keyframes scroll {
  0% { transform: translateY(0); opacity: 1; }
  50% { transform: translateY(10px); opacity: 0.5; }
  100% { transform: translateY(0); opacity: 1; }
}

.animate-fade-in-down {
  opacity: 0;
  transform: translateY(-20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.animate-fade-in {
  opacity: 0;
  transition: opacity 1s ease 0.3s;
}

.animate-fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s;
}

.animate-visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 1024px) {
  .hero {
    min-height: 700px;
  }
  
  .hero h1 {
    font-size: 3rem;
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: 100vh;
  }
  
  .hero h1 {
    font-size: 2.2rem;
  }
  
  .social-icons {
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    justify-content: center;
    flex-direction: row;
  }
}
</style>