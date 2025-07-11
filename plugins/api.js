export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  
  // Create API instance without auth headers initially
  const $api = $fetch.create({
    baseURL: config.public.apiBase,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  });

  return {
    provide: {
      api: $api
    }
  }
});