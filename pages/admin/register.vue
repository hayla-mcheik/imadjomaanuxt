<template>
  <div class="min-h-screen flex items-center justify-center bg-black">
    <div class="w-full max-w-md p-8 space-y-8 bg-black rounded-lg shadow-md">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-gray-900">Admin Register</h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="login">
        <div class="rounded-md shadow-sm space-y-4">
          <div>
            <label for="email" class="sr-only">Email address</label>
            <input
              id="email"
              v-model="form.email"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="form-control appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              v-model="form.password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="form-control appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>

        <div v-if="error" class="text-red-500 text-sm">
          {{ error }}
        </div>

        <div class="text-center">
          <button
            type="submit"
            class="text-center inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-red-900 text-white font-bold rounded-full text-lg hover:from-red-700 hover:to-red-900 transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-red-900/30"
            :disabled="loading"
          >
            <span v-if="!loading">Sign in</span>
            <span v-else>Signing in...</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
const { $api } = useNuxtApp();
const authStore = useAuthStore();
const router = useRouter();
const form = ref({
  email: '',
  password: ''
});
const error = ref('');
const loading = ref(false);

const login = async () => {
  error.value = '';
  loading.value = true;
  try {
    await authStore.login(form.value, $api);
    // Wait for state to fully update
    await nextTick();
    // Explicitly redirect after successful login
    await navigateTo('/admin/dashboard', { replace: true });
  } catch (err) {
    error.value = err.data?.message || 'Login failed. Please try again.';
  } finally {
    loading.value = false;
  }
};

// Initialize auth state - but don't await it
onMounted(() => {
  authStore.initialize($api);
});
</script>