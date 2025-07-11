<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold text-gray-800">Events Management</h1>
      <button
        @click="openCreateModal"
        class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <i class="fas fa-plus mr-2"></i>
        Add New Event
      </button>
    </div>

    <div class="bg-white rounded-lg shadow overflow-hidden">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="event in events" :key="event.id">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full object-cover" :src="event.image" alt="" />
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">{{ event.title }}</div>
                    <div class="text-sm text-gray-500 line-clamp-1">{{ event.description }}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ formatDate(event.date) }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button
                  @click="openEditModal(event)"
                  class="text-blue-600 hover:text-blue-900 mr-3"
                >
                  Edit
                </button>
                <button
                  @click="confirmDelete(event.id)"
                  class="text-red-600 hover:text-red-900"
                >
                  Delete
                </button>
              </td>
            </tr>
            <tr v-if="events.length === 0">
              <td colspan="3" class="px-6 py-4 text-center text-sm text-gray-500">
                No events found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Create/Edit Event Modal -->
    <div v-if="showModal" class="fixed z-10 inset-0 overflow-y-auto">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div>
            <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4">
              {{ isEditing ? 'Edit Event' : 'Create New Event' }}
            </h3>
            <form class="space-y-4">
              <div>
                <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
                <input
                  v-model="modalForm.title"
                  type="text"
                  id="title"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  required
                />
              </div>

              <div>
                <label for="date" class="block text-sm font-medium text-gray-700">Date</label>
                <input
                  v-model="modalForm.date"
                  type="date"
                  id="date"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  required
                />
              </div>

              <div>
                <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  v-model="modalForm.description"
                  id="description"
                  rows="4"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  required
                ></textarea>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700">Event Image</label>
                <div class="mt-1 flex items-center">
                  <span v-if="!modalForm.image" class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                    <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                  <img v-else-if="typeof modalForm.image === 'string'" :src="modalForm.image" class="h-32 w-auto object-cover rounded" />
                  <img v-else :src="URL.createObjectURL(modalForm.image)" class="h-32 w-auto object-cover rounded" />
                  <button
                    type="button"
                    @click="openModalFilePicker"
                    class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Change
                  </button>
                  <input
                    ref="modalFileInput"
                    type="file"
                    class="hidden"
                    accept="image/*"
                    @change="handleModalImageUpload"
                  />
                </div>
              </div>
            </form>
          </div>
          <div class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
            <button
              type="button"
              @click="saveEvent"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:col-start-2 sm:text-sm"
              :disabled="modalLoading"
            >
              <span v-if="modalLoading">Saving...</span>
              <span v-else>{{ isEditing ? 'Update' : 'Create' }}</span>
            </button>
            <button
              type="button"
              @click="closeModal"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:col-start-1 sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <div v-if="showDeleteModal" class="fixed z-10 inset-0 overflow-y-auto">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div>
            <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
              <i class="fas fa-exclamation-triangle text-red-600"></i>
            </div>
            <div class="mt-3 text-center sm:mt-5">
              <h3 class="text-lg leading-6 font-medium text-gray-900">Delete Event</h3>
              <div class="mt-2">
                <p class="text-sm text-gray-500">Are you sure you want to delete this event? This action cannot be undone.</p>
              </div>
            </div>
          </div>
          <div class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
            <button
              type="button"
              @click="deleteEvent"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:col-start-2 sm:text-sm"
              :disabled="deleteLoading"
            >
              <span v-if="deleteLoading">Deleting...</span>
              <span v-else>Delete</span>
            </button>
            <button
              type="button"
              @click="showDeleteModal = false"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:col-start-1 sm:text-sm"
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
import { ref, onMounted } from 'vue';

const events = ref([]);
const showModal = ref(false);
const showDeleteModal = ref(false);
const isEditing = ref(false);
const modalLoading = ref(false);
const deleteLoading = ref(false);
const eventToDelete = ref(null);
const modalFileInput = ref(null);

const modalForm = ref({
  id: null,
  title: '',
  description: '',
  date: '',
  image: null
});

const fetchEvents = async () => {
  try {
    const { data } = await useFetch('/api/admin/events');
    if (data.value) {
      events.value = data.value;
    }
  } catch (error) {
    console.error('Error fetching events:', error);
  }
};

const openCreateModal = () => {
  resetModalForm();
  isEditing.value = false;
  showModal.value = true;
};

const openEditModal = (event) => {
  modalForm.value = {
    id: event.id,
    title: event.title,
    description: event.description,
    date: event.date.split('T')[0],
    image: event.image
  };
  isEditing.value = true;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const saveEvent = async () => {
  modalLoading.value = true;
  try {
    const formData = new FormData();
    formData.append('title', modalForm.value.title);
    formData.append('description', modalForm.value.description);
    formData.append('date', modalForm.value.date);
    
    if (typeof modalForm.value.image !== 'string') {
      if (modalForm.value.image) {
        formData.append('image', modalForm.value.image);
      }
    }

    if (isEditing.value) {
      const { data } = await useFetch(`/api/admin/events/${modalForm.value.id}`, {
        method: 'PUT',
        body: formData
      });
      
      if (data.value) {
        const index = events.value.findIndex(e => e.id === modalForm.value.id);
        if (index !== -1) {
          events.value[index] = data.value;
        }
        useNuxtApp().$toast.success('Event updated successfully');
      }
    } else {
      const { data } = await useFetch('/api/admin/events', {
        method: 'POST',
        body: formData
      });
      
      if (data.value) {
        events.value.unshift(data.value);
        useNuxtApp().$toast.success('Event created successfully');
      }
    }
    
    closeModal();
  } catch (error) {
    console.error('Error saving event:', error);
    useNuxtApp().$toast.error('Failed to save event');
  } finally {
    modalLoading.value = false;
  }
};

const confirmDelete = (id) => {
  eventToDelete.value = id;
  showDeleteModal.value = true;
};

const deleteEvent = async () => {
  deleteLoading.value = true;
  try {
    await useFetch(`/api/admin/events/${eventToDelete.value}`, {
      method: 'DELETE'
    });
    
    events.value = events.value.filter(e => e.id !== eventToDelete.value);
    useNuxtApp().$toast.success('Event deleted successfully');
  } catch (error) {
    console.error('Error deleting event:', error);
    useNuxtApp().$toast.error('Failed to delete event');
  } finally {
    deleteLoading.value = false;
    showDeleteModal.value = false;
    eventToDelete.value = null;
  }
};

const openModalFilePicker = () => {
  modalFileInput.value.click();
};

const handleModalImageUpload = (e) => {
  const file = e.target.files[0];
  if (file) {
    modalForm.value.image = file;
  }
};

const resetModalForm = () => {
  modalForm.value = {
    id: null,
    title: '',
    description: '',
    date: '',
    image: null
  };
};

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

onMounted(() => {
  fetchEvents();
});
</script>