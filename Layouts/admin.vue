<template>
  <div class="min-h-screen bg-black flex">
    <!-- Mobile sidebar backdrop -->
    <div v-if="sidebarOpen" class="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden" @click="sidebarOpen = false"></div>

    <!-- Sidebar -->
    <aside 
      class="fixed inset-y-0 left-0 z-30 w-64 bg-black shadow-lg transform transition-all duration-300 ease-in-out"
      :class="{'translate-x-0': sidebarOpen, '-translate-x-full lg:translate-x-0': !sidebarOpen}"
    >
      <div class="flex items-center justify-between h-16 px-4 bg-black">
          <img src="/assets/images/logooo.jpg" class="logo" alt="Logo" />
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
  to="/admin/about" 
  class="group flex text-white items-center px-3 py-2 text-sm font-medium rounded-md transition-colors"
  :class="{
    'bg-blue-50 text-blue-600': $route.path === '/admin/about',
    'text-black hover:bg-gray-100': $route.path !== '/admin/about'
  }"
>
  <i class="fas fa-images mr-3 text-gray-500 group-hover:text-blue-500"></i>
About
</NuxtLink>
<NuxtLink 
  to="/admin/hero" 
  class="group text-white flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors"
  :class="{
    'bg-blue-50 text-blue-600': $route.path === '/admin/hero',
    'text-gray-600 hover:bg-gray-100': $route.path !== '/admin/hero'
  }"
>
  <i class="fas fa-images mr-3 text-gray-500 group-hover:text-blue-500"></i>
Hero Slider
</NuxtLink>

<NuxtLink 
  to="/admin/events" 
  class="group text-white flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors"
  :class="{
    'bg-blue-50 text-blue-600': $route.path === '/admin/events',
    'text-gray-600 hover:bg-gray-100': $route.path !== '/admin/events'
  }"
>
  <i class="fas fa-calendar-alt mr-3 text-gray-500 group-hover:text-blue-500"></i>
  Events
</NuxtLink>
<NuxtLink 
  to="/admin/news" 
  class="group text-white flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors"
  :class="{
    'bg-blue-50 text-blue-600': $route.path === '/admin/news',
    'text-gray-600 hover:bg-gray-100': $route.path !== '/admin/news'
  }"
>
  <i class="fas fa-calendar-alt mr-3 text-gray-500 group-hover:text-blue-500"></i>
  News
</NuxtLink>

<NuxtLink 
  to="/admin/milestone" 
  class="group text-white flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors"
  :class="{
    'bg-blue-50 text-blue-600': $route.path === '/admin/milestone',
    'text-gray-600 hover:bg-gray-100': $route.path !== '/admin/milestone'
  }"
>
  <i class="fas fa-calendar-alt mr-3 text-gray-500 group-hover:text-blue-500"></i>
  Milestone
</NuxtLink>
<NuxtLink 
  to="/admin/projects" 
  class="group text-white flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors"
  :class="{
    'bg-blue-50 text-blue-600': $route.path === '/admin/projects',
    'text-gray-600 hover:bg-gray-100': $route.path !== '/admin/projects'
  }"
>
  <i class="fas fa-calendar-alt mr-3 text-gray-500 group-hover:text-blue-500"></i>
  Projects
</NuxtLink>

<NuxtLink 
  to="/admin/technologies" 
  class="group text-white flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors"
  :class="{
    'bg-blue-50 text-blue-600': $route.path === '/admin/technologies',
    'text-gray-600 hover:bg-gray-100': $route.path !== '/admin/technologies'
  }"
>
  <i class="fas fa-calendar-alt mr-3 text-gray-500 group-hover:text-blue-500"></i>
  Technologies
</NuxtLink>
<NuxtLink 
  to="/admin/logos" 
  class="group text-white flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors"
  :class="{
    'bg-blue-50 text-blue-600': $route.path === '/admin/logos',
    'text-gray-600 hover:bg-gray-100': $route.path !== '/admin/logos'
  }"
>
  <i class="fas fa-calendar-alt mr-3 text-gray-500 group-hover:text-blue-500"></i>
  Logos
</NuxtLink>
<NuxtLink 
  to="/admin/locations" 
  class="group text-white flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors"
  :class="{
    'bg-blue-50 text-blue-600': $route.path === '/admin/locations',
    'text-gray-600 hover:bg-gray-100': $route.path !== '/admin/locations'
  }"
>
  <i class="fas fa-calendar-alt mr-3 text-gray-500 group-hover:text-blue-500"></i>
  Locations
</NuxtLink>
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
            <h2 class="text-lg font-semibold text-black">{{ currentPageTitle }}</h2>
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
      <main class="flex-1 p-6 bg-black">
        <div class="max-w-7xl mx-auto">
          <slot />
          
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/auth';
definePageMeta({
  layout: 'admin',
  key: 'Admin management',

}); 
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