<template>
    <footer class="bg-black text-white pt-12 pb-8 px-4 sm:px-6 lg:px-8 pl-md-250px">
        <!-- Main Footer Content -->
        <div class="container mx-auto max-w-7xl">
            <!-- Newsletter Section -->
            <!-- <div class="flex flex-col items-center mb-12">
             <h3 class="text-2xl font-bold mb-6 text-center mb-4">Subscribe to our newsletter</h3>
    <form @submit.prevent="handleSubscribe" class="w-full max-w-md">
      <div class="flex flex-col sm:flex-row gap-2">
        <input 
          type="email" 
          v-model="email"
          placeholder="Enter your email" 
          class="flex-grow px-4 py-3 rounded-lg bg-black border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
          required
        >
        <button 
          type="submit" 
          class="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-red-900 text-white font-bold rounded-lg text-lg hover:from-red-700 hover:to-red-900 transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-red-900/30"
          :disabled="loading"
        >
          <span v-if="!loading">Subscribe</span>
          <span v-else>Subscribing...</span>
        </button>
      </div>
      <p v-if="successMessage" class="mt-2 text-green-500 text-sm">{{ successMessage }}</p>
      <p v-if="errorMessage" class="mt-2 text-red-500 text-sm">{{ errorMessage }}</p>
    </form>
            </div> -->

            <!-- Social Links -->
            <div class="flex flex-col items-center mb-12">
                <p class="text-gray-400 mb-4">Follow us on social media</p>
                <div class="flex flex-wrap justify-center gap-4">
                    <a href="#" class="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors duration-200 group">
                        <i class="fab fa-x-twitter text-gray-300 group-hover:text-white"></i>
                    </a>
                    <a href="#" class="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors duration-200 group">
                        <i class="fab fa-facebook-f text-gray-300 group-hover:text-white"></i>
                    </a>
                    <a href="#" class="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors duration-200 group">
                        <i class="fab fa-instagram text-gray-300 group-hover:text-white"></i>
                    </a>
                    <a href="#" class="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors duration-200 group">
                        <i class="fab fa-linkedin-in text-gray-300 group-hover:text-white"></i>
                    </a>
                    <a href="#" class="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors duration-200 group">
                        <i class="fab fa-youtube text-gray-300 group-hover:text-white"></i>
                    </a>
                    <a href="#" class="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors duration-200 group">
                        <i class="fab fa-tiktok text-gray-300 group-hover:text-white"></i>
                    </a>
                            <a href="#" class="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors duration-200 group">
                        <i class="fab fa-snapchat text-gray-300 group-hover:text-white"></i>
                    </a>
                            <a href="#" class="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors duration-200 group">
                        <i class="fab fa-threads text-gray-300 group-hover:text-white"></i>
                    </a>
                            <a href="#" class="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors duration-200 group">
                        <i class="fas fa-phone-alt text-gray-300 group-hover:text-white"></i>
                    </a>
                </div>
            </div>

    
            <!-- Copyright -->
            <div class="pt-8 border-t border-gray-800 text-center text-gray-400">
                <p>© 2025 Promofix. All rights reserved.</p>
            </div>
        </div>

        <!-- WhatsApp Float Button -->
        <!-- <div class="fixed bottom-6 right-6 z-50">
            <a href="#" class="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-colors duration-200">
                <i class="fab fa-whatsapp text-white text-2xl"></i>
            </a>
        </div> -->
    </footer>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();
const apiBaseUrl = runtimeConfig.public.apiBase || 'http://localhost:8000';

const email = ref('');
const loading = ref(false);
const successMessage = ref('');
const errorMessage = ref('');

const handleSubscribe = async () => {
  loading.value = true;
  errorMessage.value = '';
  successMessage.value = '';

  try {
    const response = await $fetch(`${apiBaseUrl}/subscribe`, {
      method: 'POST',
      body: JSON.stringify({
        email: email.value
      }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    console.log(response);

    if (response.success) {
      successMessage.value = response.message;
      email.value = '';
    }
  } catch (error) {
    if (error.data && error.data.errors) {
      errorMessage.value = Object.values(error.data.errors).flat().join(' ');
    } else {
      errorMessage.value = 'An error occurred. Please try again later.';
    }
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
/* Smooth hover transitions */
a, button {
    transition: all 0.2s ease;
}

/* WhatsApp button animation */
.fixed a {
    animation: pulse 2s infinite;
}
.rounded-lg {
    border-radius: calc(var(--ui-radius) * 2);
}
@keyframes pulse {
    0% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
    }
    70% {
        transform: scale(1.05);
        box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
    }
    100% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
    }
}
</style>