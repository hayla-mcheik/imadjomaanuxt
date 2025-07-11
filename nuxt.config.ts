// nuxt.config.js
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
    ssr: false,
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  vite: {
  plugins: [
    tailwindcss(),
  ],
},

  css: [
    'swiper/css',
    'swiper/css/effect-creative',
  ],
  
  app: {
    head: {
      title: 'Promofix - Imad Jomaa',
      meta: [
        { charset: 'utf-8' },
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1' },
        { name: 'description', content: '' },
        { name: 'keywords', content: '' },
        { name: 'author', content: 'Awaiken' }
      ],
      link: [
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/images/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"' 
        },
    
        { 
          rel: 'stylesheet', 
          href: 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
          integrity: 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=',
          crossorigin: '' 
        },
        { rel: 'stylesheet', href: '/assets/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: '/assets/css/slicknav.min.css' },
        { rel: 'stylesheet', href: '/assets/css/swiper-bundle.min.css' },
        { rel: 'stylesheet', href: '/assets/css/all.min.css' },
        { rel: 'stylesheet', href: '/assets/css/animate.css' },
        { rel: 'stylesheet', href: '/assets/css/magnific-popup.css' },
        { rel: 'stylesheet', href: '/assets/css/mousecursor.css' },
        { rel: 'stylesheet', href: '/assets/css/custom.css' }
      ],
      script: [
        // Leaflet script
        {
          src: 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
          integrity: 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=',
          crossorigin: '',
          tagPosition: 'bodyClose'
        },
        
        // All other scripts with body placement
        { src: '/assets/js/jquery-3.7.1.min.js', tagPosition: 'bodyClose' },
        { src: '/assets/js/bootstrap.min.js', tagPosition: 'bodyClose' },
        { src: '/assets/js/validator.min.js', tagPosition: 'bodyClose' },
        { src: '/assets/js/jquery.slicknav.js', tagPosition: 'bodyClose' },
        { src: '/assets/js/swiper-bundle.min.js', tagPosition: 'bodyClose' },
        { src: '/assets/js/jquery.waypoints.min.js', tagPosition: 'bodyClose' },
        { src: '/assets/js/jquery.counterup.min.js', tagPosition: 'bodyClose' },
        { src: '/assets/js/jquery.magnific-popup.min.js', tagPosition: 'bodyClose' },
        { src: '/assets/js/SmoothScroll.js', tagPosition: 'bodyClose' },
        { src: '/assets/js/parallaxie.js', tagPosition: 'bodyClose' },
        { src: '/assets/js/gsap.min.js', tagPosition: 'bodyClose' },
        { src: '/assets/js/magiccursor.js', tagPosition: 'bodyClose' },
        { src: '/assets/js/SplitText.js', tagPosition: 'bodyClose' },
        { src: '/assets/js/ScrollTrigger.min.js', tagPosition: 'bodyClose' },
        { src: '/assets/js/jquery.mb.YTPlayer.min.js', tagPosition: 'bodyClose' },
        { src: '/assets/js/wow.min.js', tagPosition: 'bodyClose' },
        { src: '/assets/js/function.js', tagPosition: 'bodyClose' }
      ],
      noscript: [
    { textContent: 'JavaScript is required' }
      ]
    }
  },

  // Optional: Add experimental features for better performance
  experimental: {
    payloadExtraction: true,
  },

  nitro: {
    prerender: {
      crawlLinks: true
    }
  },
  runtimeConfig: {
        public: {
            apiBase: process.env.API_BASE_URL || 'http://localhost:8000/api',
        }
    },

    modules: [
        'nuxt-swiper',
        '@pinia/nuxt',
    ],

})