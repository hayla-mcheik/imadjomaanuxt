export default defineNuxtRouteMiddleware(async (to) => {
  const authStore = useAuthStore();
  const { $api } = useNuxtApp();
  
  // Initialize auth state if token exists
  if (process.client) {
    const token = localStorage.getItem('auth_token');
    if (token && !authStore.isAuthenticated) {
      authStore.token = token;
      authStore.isAuthenticated = true;
      console.log('auth exist');
    }
  }

  // Protected admin routes
  if (to.path.startsWith('/admin') && !to.path.includes('/login')) {
    if (!authStore.isAuthenticated) {
      return navigateTo('/admin/login');
    }
    
    // Verify user role
    // if (authStore.user?.role !== 'admin') {
    //   return navigateTo('/');
    // }
  }

  // Redirect if logged in and trying to access login page
  if (to.path === '/admin/login' && authStore.isAuthenticated) {
    console.log('navigate to admin/dashboard');
    return navigateTo('/admin/dashboard');
  }
});