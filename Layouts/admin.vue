<template>
  <div class="min-h-screen bg-gray-50 flex">
    <!-- Mobile sidebar backdrop -->
    <div v-if="sidebarOpen" class="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden" @click="sidebarOpen = false"></div>

    <!-- Sidebar -->
    <aside 
      class="fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform transition-all duration-300 ease-in-out"
      :class="{'translate-x-0': sidebarOpen, '-translate-x-full lg:translate-x-0': !sidebarOpen}"
    >
      <div class="flex items-center justify-between h-16 px-4 bg-gradient-to-r from-blue-600 to-blue-500">
        <h1 class="text-white font-bold text-xl">Admin Panel</h1>
        <button @click="sidebarOpen = false" class="lg:hidden text-white focus:outline-none">
          <i class="fas fa-times"></i>
        </button>
      </div>
      
      <div class="h-[calc(100%-4rem)] overflow-y-auto">
        <nav class="px-2 py-4">
          <div class="space-y-1">
            <NuxtLink 
              to="/admin/dashboard" 
              class="group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors"
              :class="{
                'bg-blue-50 text-blue-600': $route.path === '/admin/dashboard',
                'text-gray-600 hover:bg-gray-100': $route.path !== '/admin/dashboard'
              }"
            >
              <i class="fas fa-tachometer-alt mr-3 text-gray-500 group-hover:text-blue-500"></i>
              Dashboard
            </NuxtLink>
            
<NuxtLink 
  to="/admin/heroslider" 
  class="group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors"
  :class="{
    'bg-blue-50 text-blue-600': $route.path === '/admin/heroslider',
    'text-gray-600 hover:bg-gray-100': $route.path !== '/admin/heroslider'
  }"
>
  <i class="fas fa-images mr-3 text-gray-500 group-hover:text-blue-500"></i>
  Hero Slider
</NuxtLink>

<NuxtLink 
  to="/admin/events" 
  class="group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors"
  :class="{
    'bg-blue-50 text-blue-600': $route.path === '/admin/events',
    'text-gray-600 hover:bg-gray-100': $route.path !== '/admin/events'
  }"
>
  <i class="fas fa-calendar-alt mr-3 text-gray-500 group-hover:text-blue-500"></i>
  Events
</NuxtLink>
          </div>
          
          <div class="mt-8">
            <h3 class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Reports
            </h3>
            <div class="mt-1 space-y-1">
              <a href="#" class="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100">
                <i class="fas fa-chart-line mr-3 text-gray-400 group-hover:text-gray-500"></i>
                Analytics
              </a>
              <a href="#" class="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100">
                <i class="fas fa-file-alt mr-3 text-gray-400 group-hover:text-gray-500"></i>
                Reports
              </a>
            </div>
          </div>
        </nav>
      </div>
    </aside>

    <!-- Main content -->
    <div class="flex-1 flex flex-col lg:ml-64">
      <!-- Header -->
      <header class="sticky top-0 z-10 bg-white shadow-sm">
        <div class="flex items-center justify-between px-6 py-4">
          <div class="flex items-center">
            <button @click="sidebarOpen = true" class="mr-4 text-gray-500 focus:outline-none lg:hidden">
              <i class="fas fa-bars"></i>
            </button>
            <h2 class="text-lg font-semibold text-gray-900">{{ currentPageTitle }}</h2>
          </div>
          
          <div class="flex items-center space-x-4">
            <button class="p-1 text-gray-500 hover:text-gray-700 focus:outline-none">
              <i class="fas fa-bell"></i>
            </button>
            
            <div class="relative">
              <button 
                @click="userDropdownOpen = !userDropdownOpen" 
                class="flex items-center space-x-2 focus:outline-none"
                @blur="setTimeout(() => userDropdownOpen = false, 200)"
              >
                <div class="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
                  {{ userInitials }}
                </div>
                <span class="hidden md:inline text-gray-700">{{ user?.name }}</span>
                <i class="fas fa-chevron-down text-gray-500 text-xs"></i>
              </button>
              
              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <div 
                  v-show="userDropdownOpen"
                  class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <div class="py-1">
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                    <button 
                      @click="logout"
                      class="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </header>

      <!-- Page content -->
      <main class="flex-1 p-6 bg-gray-50">
        <div class="max-w-7xl mx-auto">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/auth';

const authStore = useAuthStore();
const route = useRoute();
const sidebarOpen = ref(false);
const userDropdownOpen = ref(false);

const isLoggedIn = computed(() => authStore.isAuthenticated);
const user = computed(() => authStore.user);

const userInitials = computed(() => {
  if (!user.value?.name) return '?';
  return user.value.name.split(' ').map(n => n[0]).join('').toUpperCase();
});

const currentPageTitle = computed(() => {
  const path = route.path;
  if (path.includes('dashboard')) return 'Dashboard';
  if (path.includes('users')) return 'User Management';
  if (path.includes('settings')) return 'Settings';
  return 'Admin Panel';
});

const logout = async () => {
  await authStore.logout();
  navigateTo('/admin/login');
};
</script>

<style>
/* Smooth transitions for sidebar */
.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from, .slide-leave-to {
  transform: translateX(-100%);
}
</style>