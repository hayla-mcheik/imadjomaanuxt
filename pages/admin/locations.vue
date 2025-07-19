<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Header Section -->
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
      <div>
        <h1 class="text-3xl font-bold text-gray-800">locations Management</h1>
      </div>
      <button
        @click="openCreateModal"
        class="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
      >
        <i class="fas fa-plus mr-2"></i>
        Create locations
      </button>
    </div>

    <!-- locations Table -->
    <div class="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">locations Name</th>
              <th scope="col" class="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">phone</th>
              <th scope="col" class="px-6 py-4 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-100">
            <tr v-for="locations in locations" :key="locations.id" class="hover:bg-gray-50 transition-colors">
              <td class="px-6 py-5">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-12 w-12">
        <img 
  v-if="locations.image" 
  class="h-12 w-12 rounded-lg object-cover border border-gray-200" 
  :src="`${mediaBase}/${locations.image}`" 
  alt="locations image" 
/>

                    <div v-else class="h-12 w-12 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center">
                      <i class="fas fa-calendar text-gray-400 text-xl"></i>
                    </div>
                  </div>
                  <div class="ml-4">
                    <div class="text-base font-semibold text-gray-900">{{ locations.name }}</div>
                    <div class="text-base font-semibold text-gray-900">{{ locations.phone }}</div>
                    <div class="text-base font-semibold text-gray-900">{{ locations.email }}</div>
                    <div class="text-sm text-gray-500 line-clamp-2 mt-1">{{ locations.description }}</div>
                  </div>
                </div>
              </td>
      
              <td class="px-6 py-5 text-right">
                <div class="flex justify-end space-x-3">
                  <button
                    @click="openEditModal(locations)"
                    class="text-blue-600 hover:text-blue-800 p-2 rounded-full hover:bg-blue-50 transition-colors"
                    title="Edit"
                  >
                    <i class="fas fa-pencil-alt"></i>
                  </button>
                  <button
                    @click="confirmDelete(locations.id)"
                    class="text-red-600 hover:text-red-800 p-2 rounded-full hover:bg-red-50 transition-colors"
                    title="Delete"
                  >
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </div>
              </td>
            </tr>
            <tr v-if="locations.length === 0 && !loading">
              <td colspan="3" class="px-6 py-8 text-center">
                <div class="text-gray-500 flex flex-col items-center">
                  <i class="fas fa-calendar-times text-4xl text-gray-300 mb-3"></i>
                  <p class="text-lg">No locations found</p>
                  <button 
                    @click="openCreateModal"
                    class="mt-4 text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Create your first locations
                  </button>
                </div>
              </td>
            </tr>
            <tr v-if="loading">
              <td colspan="3" class="px-6 py-8 text-center">
                <div class="flex justify-center items-center space-x-2 text-blue-600">
                  <i class="fas fa-spinner fa-spin text-2xl"></i>
                  <span>Loading locations...</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Create/Edit locations Modal -->
    <div v-if="showModal" class="fixed z-50 inset-0 overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <!-- Overlay -->
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        
        <!-- Modal Content -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div class="relative z-1 inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
          <div class="bg-white px-6 py-5 sm:p-8">
            <div class="flex justify-between items-start">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">
                {{ isEditing ? 'Edit locations' : 'Create New locations' }}
              </h3>
              <button 
                @click="closeModal" 
                class="text-gray-400 hover:text-gray-500"
                :disabled="modalLoading"
              >
                <i class="fas fa-times text-xl"></i>
              </button>
            </div>
            
            <form class="space-y-6" @submit.prevent="savelocations">
              <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div class="sm:col-span-2">
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-1">locations Title *</label>
                  <input
                    v-model="modalForm.name"
                    type="text"
                    id="name"
                    class="form-control block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-3 px-4 border"
                    placeholder="Enter locations title"
                    required
                  />
                </div>

                <div class="sm:col-span-2">
                  <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                  <input
                    v-model="modalForm.phone"
                    type="text"
                    id="phone"
                    class="form-control block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-3 px-4 border"
                    placeholder="Where is the locations happening?"
                    required
                  />
                </div>
                  <div class="sm:col-span-2">
                  <label for="date" class="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    v-model="modalForm.email"
                    type="email"
                    id="email"
                    class="form-control block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-3 px-4 border"
                    placeholder="Where is the locations happening?"
                    required
                  />
                </div>

                <div class="sm:col-span-2">
                  <label for="description" class="block text-sm font-medium text-gray-700 mb-1">Description *</label>
                  <textarea
                    v-model="modalForm.description"
                    id="description"
                    rows="4"
                    class="form-control block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-3 px-4 border"
                    placeholder="Tell people about your locations..."
                    required
                  ></textarea>
                </div>

                <div class="sm:col-span-2">
                  <label class="block text-sm font-medium text-gray-700 mb-2">locations Image</label>
                  <div class="flex items-center space-x-6">
                    <div class="flex-shrink-0">
                      <div v-if="!modalForm.image" class="h-32 w-32 rounded-lg bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                        <i class="fas fa-image text-gray-400 text-3xl"></i>
                      </div>
 <img 
  v-else 
  :src="typeof modalForm.image === 'string' ? `${mediaBase}/${modalForm.image}` : createObjectURL(modalForm.image)" 
  class="h-32 w-32 rounded-lg object-cover border border-gray-200" 
/>
                    </div>
                    <div class="flex flex-col space-y-2">
                      <button
                        type="button"
                        @click="openModalFilePicker"
                        class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        <i class="fas fa-upload mr-2"></i> Upload Image
                      </button>
                      <p class="text-xs text-gray-500">JPEG, PNG (Max 2MB)</p>
                    </div>
                    <input
                      ref="modalFileInput"
                      type="file"
                      class="hidden"
                      accept="image/*"
                      @change="handleModalImageUpload"
                    />
                  </div>
                </div>
              </div>

              <div class="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  @click="closeModal"
                  class="inline-flex items-center px-5 py-2.5 border border-gray-300 shadow-sm text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  :disabled="modalLoading"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  class="inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                  :disabled="modalLoading"
                >
                  <i v-if="modalLoading" class="fas fa-spinner fa-spin mr-2"></i>
                  <i v-else class="fas fa-save mr-2"></i>
                  {{ isEditing ? 'Update locations' : 'Create locations' }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <div v-if="showDeleteModal" class="fixed z-50 inset-0 overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div class="relative z-1 inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div class="bg-white px-6 py-8 sm:p-8">
            <div class="sm:flex sm:items-start">
              <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <i class="fas fa-exclamation-triangle text-red-600"></i>
              </div>
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 class="text-xl font-bold text-gray-900">Delete locations</h3>
                <div class="mt-4">
                  <p class="text-gray-600">Are you sure you want to delete "<span class="font-medium">{{ locations.find(e => e.id === locationsToDelete)?.title || 'this locations' }}</span>"? This action cannot be undone.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-6 py-5 sm:px-8 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              @click="deletelocations"
              class="w-full inline-flex justify-center rounded-lg border border-transparent shadow-sm px-5 py-2.5 bg-gradient-to-r from-red-600 to-red-500 text-base font-medium text-white hover:from-red-700 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm transition-colors duration-200"
              :disabled="deleteLoading"
            >
              <i v-if="deleteLoading" class="fas fa-spinner fa-spin mr-2"></i>
              <i v-else class="fas fa-trash-alt mr-2"></i>
              Delete
            </button>
            <button
              type="button"
              @click="showDeleteModal = false"
              class="mt-3 w-full inline-flex justify-center rounded-lg border border-gray-300 shadow-sm px-5 py-2.5 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              :disabled="deleteLoading"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

const authStore = useAuthStore();
const toast = useToast()

definePageMeta({
  layout: 'admin',
});

useHead({
  title: 'locations'
});

const createObjectURL = (file) => {
  try {
    if (window.URL && URL.createObjectURL) {
      return URL.createObjectURL(file);
    } else if (window.webkitURL && window.webkitURL.createObjectURL) {
      return window.webkitURL.createObjectURL(file);
    }
    return '';
  } catch (e) {
    console.error('Error creating object URL:', e);
    return '';
  }
};
// Rest of your component code remains the same...
const locations = ref([]);
const showModal = ref(false);
const showDeleteModal = ref(false);
const isEditing = ref(false);
const modalLoading = ref(false);
const deleteLoading = ref(false);
const loading = ref(false);
const locationsToDelete = ref(null);
const modalFileInput = ref(null);

const modalForm = ref({
  id: null,
  name: '',
  phone: '',
  email: '',
  description: '',
  image: null
});
const runtimeConfig = useRuntimeConfig();
const apiBaseUrl = runtimeConfig.public.apiBase || 'http://127.0.0.1:8000';
const mediaBase = runtimeConfig.public.mediaBase || 'http://127.0.0.1:8000';
const fetchlocations = async () => {
  loading.value = true;
  try {
    const response = await axios.get(`${apiBaseUrl}/locations`, {
      headers: {
        Authorization: `Bearer ${authStore.token}`
      }
    });
    
    console.log(response);
    if (Array.isArray(response.data)) {
      locations.value = response.data;
    } 
    else if (response.data.data) {
      locations.value = response.data.locations;
    }
    else {
      locations.value = [response.data];
    }
    
  } catch (error) {
    console.error('Error fetching locations:', error);
          toast.add({
    title: 'error',
    description: 'Failed to fetch locations data',
    color: 'danger'
  })
  } finally {
    loading.value = false;
  }
};

const openCreateModal = () => {
  resetModalForm();
  isEditing.value = false;
  showModal.value = true;
};

const openEditModal = (locations) => {
  modalForm.value = {
    id: locations.id,
    name: locations.name,
    phone: locations.phone,
    email: locations.email,
    description: locations.description,
    image: locations.image
  };
  isEditing.value = true;
  showModal.value = true;
};
const closeModal = () => {
  // Clean up any object URLs if they exist
  if (modalForm.value.image && typeof modalForm.value.image !== 'string') {
    URL.revokeObjectURL(modalForm.value.image);
  }
  
  // Reset the form
  resetModalForm();
  
  // Close the modal
  showModal.value = false;
  isEditing.value = false;
};

const savelocations = async () => {
  modalLoading.value = true;
  try {
    const formData = new FormData();
    formData.append('name', modalForm.value.name);
    formData.append('phone', modalForm.value.phone);
    formData.append('email', modalForm.value.email);
    formData.append('description', modalForm.value.description);
    
    // Handle image differently for create vs update
    if (isEditing.value) {
      // For edits, only append image if it's a new file
      if (modalForm.value.image && typeof modalForm.value.image !== 'string') {
        formData.append('image', modalForm.value.image);
      }
      // Add _method for Laravel to recognize PUT with FormData
      formData.append('_method', 'PUT');
    } else {
      // For creates, append image if it exists
      if (modalForm.value.image) {
        formData.append('image', modalForm.value.image);
      }
    }

    let url = isEditing.value 
      ? `${apiBaseUrl}/locations/${modalForm.value.id}`
      : `${apiBaseUrl}/locations`;

    const response = await axios.post(url, formData, {
      headers: {
        'Authorization': `Bearer ${authStore.token}`,
        'Content-Type': 'multipart/form-data'
      }
    });

    const savedlocations = response.data.locations || response.data;
    
    if (isEditing.value) {
      const index = locations.value.findIndex(e => e.id === modalForm.value.id);
      if (index !== -1) {
        locations.value[index] = savedlocations;
      }
            toast.add({
    title: 'success',
    description: 'locations updated successfully',
    color: 'success'
  })
        closeModal(); // This should close the modal
    } else {
      locations.value.unshift(savedlocations);
            toast.add({
    title: 'success',
    description: 'locations created successfully',
    color: 'success'
  })
        closeModal(); // This should close the modal
    }
    
    closeModal();
    fetchlocations();
  } catch (error) {
    console.error('Error saving locations:', error);
    console.error('Error response:', error.response);
              toast.add({
    title: 'error',
    description: 'Failed to save locations',
    color: 'danger'
  })
  } finally {
    modalLoading.value = false;
  }
};

const confirmDelete = (id) => {
  locationsToDelete.value = id;
  showDeleteModal.value = true;
};

const deletelocations = async () => {
  deleteLoading.value = true;
  try {
    await axios.delete(`${apiBaseUrl}/locations/${locationsToDelete.value}`, {
      headers: {
        Authorization: `Bearer ${authStore.token}`
      }
    });
    
    locations.value = locations.value.filter(e => e.id !== locationsToDelete.value);
              toast.add({
    title: 'success',
    description: 'locations deleted successfully',
    color: 'success'
  })
  } catch (error) {
    console.error('Error deleting locations:', error);
          toast.add({
    title: 'error',
    description: 'Failed to delete locations',
    color: 'danger'
  })
  } finally {
    deleteLoading.value = false;
    showDeleteModal.value = false;
    locationsToDelete.value = null;
  }
};

const openModalFilePicker = () => {
  modalFileInput.value.click();
};

const handleModalImageUpload = (e) => {
  const file = e.target.files[0];
  if (file) {
    if (file.size > 2 * 1024 * 1024) {
            toast.add({
    title: 'error',
    description: 'Image size should be less than 2MB',
    color: 'danger'
  })
      return;
    }
    // Revoke previous URL if it was a file object
    if (modalForm.value.image && typeof modalForm.value.image !== 'string') {
      URL.revokeObjectURL(modalForm.value.image);
    }
    modalForm.value.image = file;
  } else {
    // Keep existing image if no new file selected
    if (isEditing.value && typeof modalForm.value.image === 'string') {
      // Keep the existing image URL
    } else {
      modalForm.value.image = null;
    }
  }
};


const resetModalForm = () => {
  modalForm.value = {
    id: null,
    name: '',
    phone: '',
    email: '',
    description: '',
    image: null
  };
};

onMounted(() => {
  fetchlocations();
});
</script>

<style scoped>
/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* Smooth transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>