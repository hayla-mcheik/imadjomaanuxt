export default defineNuxtRouteMiddleware(async (to) => {
  const authStore = useAuthStore();
  const { $api } = useNuxtApp();
  
  // Initialize auth state
  await authStore.initialize($api);

  // Protected admin routes
  if (to.path.startsWith('/admin') && !to.path.includes('/login')) {
    if (!authStore.isAuthenticated) {
      return navigateTo('/admin/login');
    }
  }

  // Redirect if logged in and trying to access login page
  if (to.path === '/admin/login' && authStore.isAuthenticated) {
    return navigateTo('/admin/dashboard');
  }
});