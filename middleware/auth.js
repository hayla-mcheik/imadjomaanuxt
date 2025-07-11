export default defineNuxtRouteMiddleware(async (to) => {
  const authStore = useAuthStore();
  const { $api } = useNuxtApp();
  
  // Initialize auth state
  if (process.client) {
    const token = localStorage.getItem('auth_token');
    if (token && !authStore.isAuthenticated) {
      authStore.token = token;
      authStore.isAuthenticated = true;
      try {
        await authStore.fetchUser($api);
      } catch (error) {
        authStore.$reset();
        if (process.client) {
          localStorage.removeItem('auth_token');
        }
      }
    }
  }

  // Protected admin routes
  if (to.path.startsWith('/admin') && !to.path.includes('/login')) {
    if (!authStore.isAuthenticated) {
      return navigateTo('/admin/login');
    }
    
    // Verify user role
    if (authStore.user?.role !== 'admin') {
      return navigateTo('/');
    }
  }

  // Redirect if logged in and trying to access login page
  if (to.path === '/admin/login' && authStore.isAuthenticated) {
    return navigateTo('/admin/dashboard');
  }
});