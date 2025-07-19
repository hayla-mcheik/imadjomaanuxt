<template>
    <!-- Page Header Start -->
    <div class="page-header bg-section dark-section" :style="{'background-image' : `url(${mediaBase}/${image})`}">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
              <div class="relative z-1 mx-auto px-4">
                <p class="mb-0"><span class="quote-story">”</span></p>
        <!-- <h1 class="text-3xl md:text-4xl font-bold mb-6 font-montserrat">Imad Jomaa's Story</h1> -->
        <h2 class="max-w-3xl text-2xl md:text-3xl  mb-6 font-montserrat italic">Real growth happens when we challenge limits, connect markets, and build solutions the future hasn’t asked for yet.”
, Imad Jomaa</h2>
        <div class="max-w-3xl mt-4">
          <blockquote class="text-lg md:text-lg font-medium">
<p>Founder & President, <span class="text-red font-bold text-lg italic">JGroup</span></p>

<p><span class="text-red font-bold text-lg italic">Imad Jomaa</span> is a pioneering entrepreneur, investor, and the Founder and President of <span class="text-red font-bold text-lg">JGroup</span>, a diversified business group at the forefront of media, advertising, and technology across the MENA region. Under his leadership, JGroup has built a reputation as a trusted partner for global tech and ad-tech leaders, including Google, TikTok, Snap, Amazon, and Channel Factory.</p>

<p>Driven by a forward-looking approach, deep regional expertise, and a strong commercial mindset, <span class="text-red font-bold text-lg italic">Imad</span> has positioned <span class="text-red font-bold text-lg italic">JGroup</span> as a catalyst for growth in the digital economy, empowering businesses through strategic partnerships and the development of proprietary, state-of-the-art technologies.</p>

<p>Through his vision, <span class="text-red font-bold text-lg italic">JGroup</span> continues to shape the future of the industry, fueling innovation and driving meaningful impact across the region.</p>
          </blockquote>
   
     
        </div>
        
      </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script setup>
import axios from 'axios';
const authStore = useAuthStore();
import { ref, onMounted } from 'vue';
// API base URL - configure this in your nuxt.config.js
const runtimeConfig = useRuntimeConfig();
const apiBaseUrl = runtimeConfig.public.apiBase || 'http://127.0.0.1:8000';
const mediaBase = runtimeConfig.public.mediaBase || 'http://127.0.0.1:8000';
const aboutContent = ref('');
const image = ref('');

onMounted(async () => {
  try {
      const response = await axios.get(`${apiBaseUrl}/about-data`,{
      headers: {
        Authorization: `Bearer ${authStore.token}`
      }
    });
    console.log(response);

    if (response) {
      aboutContent.value = response.data.about.description;
      image.value = response.data.about.image;
      
    }
  } catch (error) {
    console.error('Error fetching about data:', error);

  }
});
</script>
<style scoped>
.quote-story{
  font-size: 110px;
    line-height: 110px;
    margin-bottom: -30px;
    color:white;
}
</style>