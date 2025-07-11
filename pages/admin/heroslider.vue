<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold text-gray-800">Hero Slider Management</h1>
    </div>

    <div class="bg-white rounded-lg shadow p-6">
      <form @submit.prevent="saveHeroSlider" class="space-y-6">
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
            <input
              v-model="form.title"
              type="text"
              id="title"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>

          <div>
            <label for="smalldesc" class="block text-sm font-medium text-gray-700">Short Description</label>
            <input
              v-model="form.smalldesc"
              type="text"
              id="smalldesc"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            v-model="form.description"
            id="description"
            rows="4"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          ></textarea>
        </div>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label for="mission" class="block text-sm font-medium text-gray-700">Mission</label>
            <textarea
              v-model="form.mission"
              id="mission"
              rows="3"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            ></textarea>
          </div>

          <div>
            <label for="vision" class="block text-sm font-medium text-gray-700">Vision</label>
            <textarea
              v-model="form.vision"
              id="vision"
              rows="3"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            ></textarea>
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Hero Image</label>
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
import { ref, onMounted } from 'vue';

const fileInput = ref(null);
const loading = ref(false);
const form = ref({
  title: '',
  smalldesc: '',
  description: '',
  mission: '',
  vision: '',
  image: null
});

const fetchHeroSlider = async () => {
  try {
    const { data } = await useFetch('/api/admin/heroslider');
    if (data.value) {
      form.value = data.value;
    }
  } catch (error) {
    console.error('Error fetching hero slider:', error);
  }
};

const saveHeroSlider = async () => {
  loading.value = true;
  try {
    const formData = new FormData();
    Object.keys(form.value).forEach(key => {
      if (key === 'image' && typeof form.value[key] !== 'string') {
        if (form.value[key]) {
          formData.append(key, form.value[key]);
        }
      } else if (form.value[key] !== null) {
        formData.append(key, form.value[key]);
      }
    });

    const { data } = await useFetch('/api/admin/heroslider', {
      method: 'POST',
      body: formData
    });

    if (data.value) {
      form.value.image = data.value.image;
      useNuxtApp().$toast.success('Hero slider updated successfully');
    }
  } catch (error) {
    console.error('Error saving hero slider:', error);
    useNuxtApp().$toast.error('Failed to update hero slider');
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
    form.value.image = file;
    // Create preview URL
    const reader = new FileReader();
    reader.onload = (event) => {
      form.value.image = event.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const resetForm = () => {
  fetchHeroSlider();
};

onMounted(() => {
  fetchHeroSlider();
});
</script>