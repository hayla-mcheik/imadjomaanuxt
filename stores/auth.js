import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
    isAuthenticated: false,
    _initialized: false 
  }),

  actions: {
    async login(credentials, apiClient) {
      try {
        const response = await apiClient('/login', {
          method: 'POST',
          body: credentials
        });

        this.$patch({
          user: response.user,
          token: response.token,
          isAuthenticated: true,
          _initialized: true
        });
        
        if (process.client) {
          localStorage.setItem('auth_token', response.token);
        }
        
        return response;
      } catch (error) {
        this.clearAuth();
        throw error;
      }
    },

  clearAuth() {
      this.$patch({
        user: null,
        token: null,
        isAuthenticated: false,
        _initialized: true
      });
      
      if (process.client) {
        localStorage.removeItem('auth_token');
      }
    },

    // Make sure this matches your other actions
    async logout(apiClient) {
      try {
        if (apiClient) {
          await apiClient('/logout', { method: 'POST' });
        }
        this.clearAuth();
      } catch (error) {
        this.clearAuth();
      }
    },

    initialize(apiClient) {
      if (this._initialized) return;
      
      if (process.client) {
        const token = localStorage.getItem('auth_token');
        if (token) {
          this.token = token;
          this.isAuthenticated = true;
          this._initialized = true;
          
   
        }
      }
      this._initialized = true;
    }
  }
});