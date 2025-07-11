<template>
  <div>
    <h1 class="text-2xl font-bold mb-6">Dashboard</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <!-- Stats cards -->
      <div class="bg-white p-6 rounded-lg shadow">
        <div class="flex items-center">
          <div class="p-3 rounded-full bg-blue-100 text-blue-600">
            <i class="fas fa-users text-xl"></i>
          </div>
          <div class="ml-4">
            <h3 class="text-gray-500 text-sm">Total Users</h3>
            <p class="text-2xl font-bold">1,234</p>
          </div>
        </div>
      </div>
      
      <!-- Add more stats cards as needed -->
    </div>
    
    <!-- Recent activity or other dashboard components -->
    <div class="bg-white p-6 rounded-lg shadow">
      <h2 class="text-xl font-semibold mb-4">Recent Activity</h2>
      <!-- Activity content -->
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'admin',

});

useHead({
  title: 'Dashboard'
});


</script>