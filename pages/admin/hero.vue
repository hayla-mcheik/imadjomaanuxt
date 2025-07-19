<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold text-gray-800">Hero Management</h1>
    </div>

    <div class="bg-white rounded-lg shadow p-6">
      <form @submit.prevent="savehero" class="space-y-6">
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
            <input
              v-model="form.title"
              type="text"
              id="title"
              class="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>

        </div>

        <div>
          <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            v-model="form.description"
            id="description"
            rows="4"
            class="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          ></textarea>
        </div>

        
        <div>
          <label class="block text-sm font-medium text-gray-700"> Image</label>
          <div class="mt-1 flex items-center">
            <span v-if="!form.image" class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
              <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
            <img v-else :src="form.image" class="h-32 w-auto object-cover rounded" />
            <button
              type="button"
              @click="openFilePicker"
              class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Change
            </button>
            <input
              ref="fileInput"
              type="file"
              class="hidden"
              accept="image/*"
              @change="handleImageUpload"
            />
          </div>
        </div>

        <div class="flex justify-end">
          <button
            type="button"
            @click="resetForm"
            class="mr-3 bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Reset
          </button>
          <button
            type="submit"
            class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            :disabled="loading"
          >
            <span v-if="loading">Saving...</span>
            <span v-else>Save Changes</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
const authStore = useAuthStore();
const toast = useToast()

definePageMeta({
  layout: 'admin',
});

useHead({
  title: 'Hero'
});

const fileInput = ref(null);
const loading = ref(false);
const form = ref({
  title: '',
  description: '',
  image: null,
  imagePreview: null
});

// API base URL - configure this in your nuxt.config.js
const runtimeConfig = useRuntimeConfig();
const apiBaseUrl = runtimeConfig.public.apiBase || 'http://127.0.0.1:8000';
const mediaBase = runtimeConfig.public.mediaBase || 'http://127.0.0.1:8000';
const fetchhero = async () => {
  try {
    const response = await axios.get(`${apiBaseUrl}/heroslider`,{
      headers: {
        Authorization: `Bearer ${authStore.token}`
      }
    });
    console.log(response);
if (response.data?.hero) {
  const hero = response.data.hero;
  console.log(hero);
  form.value = {
    title: hero.title || '',
    description: hero.description || '',
    image: typeof form.value.image === 'object' ? form.value.image : hero.image,
    imagePreview: hero.image ? hero.image : null
  };
}

  } catch (error) {
    console.error('Error fetching hero:', error);
      toast.add({
    title: 'error',
    description: 'Failed to fetch hero data',
    color: 'danger'
  })
  }
};



const savehero = async () => {
  loading.value = true;
  try {
    const formData = new FormData();
    
    // Append all fields except image
    Object.keys(form.value).forEach(key => {
      if (key !== 'image' && key !== 'imagePreview' && form.value[key] !== null) {
        formData.append(key, form.value[key]);
      }
    });
    
    // Handle image
    if (form.value.image instanceof File) {
      formData.append('image', form.value.image);
    } else if (typeof form.value.image === 'string') {
      // If image is a string (existing image path), send it as a regular field
      formData.append('image', form.value.image);
    }

    const response = await axios.post(`${apiBaseUrl}/heroslider`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${authStore.token}`
      }
    });
    console.log(response);

    if (response.data) {
      form.value.image = response.data.image;
      form.value.imagePreview = response.data.image ? `${mediaBase}${response.data.image}` : null;
        toast.add({
    title: 'Success',
    description: 'hero updated successfully.',
    color: 'success'
  });
      console.log('Saved data:', response.data);
    }
  } catch (error) {
    console.error('Error saving hero:', error);
    if (error.response?.status === 401) {
      await authStore.logout();
      navigateTo('/admin/login');
    }
          toast.add({
    title: 'error',
    description: 'Failed to update hero',
    color: 'error'
  })
  } finally {
    loading.value = false;
  }
};

const openFilePicker = () => {
  fileInput.value.click();
};

const handleImageUpload = (e) => {
  const file = e.target.files[0];
  if (file) {
    // Create preview URL while keeping the original file
    const reader = new FileReader();
    reader.onload = (event) => {
      form.value = {
        ...form.value,
        image: file, // Keep the file object
        imagePreview: event.target.result // Add preview URL
      };
    };
    reader.readAsDataURL(file);
  }
};

const resetForm = () => {
  fetchhero();
};

onMounted(() => {
  fetchhero();
});
</script>