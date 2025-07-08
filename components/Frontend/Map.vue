<template>
  <div class="map-section relative py-16 overflow-hidden bg-black">
    <!-- Decorative Elements -->
    <div class="absolute inset-0 z-0">
      <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-black rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div class="absolute bottom-1/3 right-1/4 w-72 h-72 bg-black rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
    </div>
    
    <div class="container relative z-10 mx-auto px-4 max-w-7xl">
      <div class="section-title mb-12 text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-white">Our <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Locations</span></h2>
        <p class="text-gray-400 mt-4 max-w-2xl mx-auto">Find our offices and service centers around the world</p>
      </div>
      
      <div class="map-container flex flex-col lg:flex-row gap-8">
        <!-- Map Controls -->
        <div class="map-controls lg:w-1/4 bg-black backdrop-blur-sm rounded-xl p-6 border border-gray-700">
          <h3 class="text-xl font-bold text-white mb-4">Office Locations</h3>
          
          <div class="location-list space-y-4 max-h-[400px] overflow-y-auto pr-2">
            <div 
              v-for="(location, index) in locations" 
              :key="index"
              class="location-card p-4 rounded-lg bg-gray-700/40 hover:bg-blue-800/30 transition-all cursor-pointer border border-gray-600 hover:border-blue-500"
              @click="focusLocation(location)"
              :class="{ 'bg-blue-800/40 border-red-500': activeLocation === location.id }"
            >
              <div class="flex items-start gap-3">
                <div class="location-icon mt-1">
                  <i :class="location.icon" class="text-red-400 text-lg"></i>
                </div>
                <div>
                  <h4 class="text-white font-medium">{{ location.name }}</h4>
                  <p class="text-gray-400 text-sm mt-1">{{ location.address }}</p>
                  <div class="flex gap-2 mt-2">
                    <span class="inline-block px-2 py-1 text-xs  rounded text-white-300">{{ location.type }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="mt-6">
            <h4 class="text-white font-medium mb-2">Legend</h4>
            <div class="space-y-2">
              <div class="flex items-center gap-2">
                <div class="w-4 h-4 rounded-full bg-blue-500"></div>
                <span class="text-gray-300 text-sm">Headquarters</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-4 h-4 rounded-full bg-green-500"></div>
                <span class="text-gray-300 text-sm">Regional Office</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-4 h-4 rounded-full bg-yellow-500"></div>
                <span class="text-gray-300 text-sm">Service Center</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Map Display -->
        <div class="map-display lg:w-3/4 h-[500px] rounded-xl overflow-hidden border-2 border-gray-700 shadow-xl relative">
          <div ref="mapContainer" class="w-full h-full"></div>
          
          <!-- Map Attribution -->
          <div class="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded z-[1000]">
            &copy; <a to="https://www.openstreetmap.org/copyright" target="_blank" class="text-blue-300">OpenStreetMap</a> contributors
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// Fix for default marker icons in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png'
});

const mapContainer = ref(null);
let map = null;
const activeLocation = ref(null);

const locations = [
  {
    id: 1,
    name: "Global Headquarters",
    address: "123 Innovation Blvd, San Francisco, CA 94103",
    type: "Headquarters",
    lat: 37.7749,
    lng: -122.4194,
    icon: "fas fa-building",
    description: "Our main office where all strategic decisions are made. Home to our executive team and innovation labs.",
    phone: "78913139",
    email: "info@promo-fix.com",
    link: "https://maps.google.com/?q=37.7749,-122.4194"
  },
  {
    id: 2,
    name: "EMEA Regional Office",
    address: "456 Tech Park, London, UK",
    type: "Regional Office",
    lat: 51.5074,
    lng: -0.1278,
    icon: "fas fa-globe-europe",
    description: "Serving Europe, Middle East and Africa with dedicated support teams and regional management.",
    phone: "78913139",
    email: "info@promo-fix.com",
    link: "https://maps.google.com/?q=51.5074,-0.1278"
  },
  {
    id: 3,
    name: "Asia-Pacific Service Center",
    address: "789 Digital Avenue, Singapore 038987",
    type: "Service Center",
    lat: 1.3521,
    lng: 103.8198,
    icon: "fas fa-cogs",
    description: "Our primary technical support and service hub for the Asia-Pacific region, open 24/7.",
    phone: "78913139",
    email: "info@promo-fix.com",
    link: "https://maps.google.com/?q=1.3521,103.8198"
  },
  {
    id: 4,
    name: "Latin America Office",
    address: "Avenida Paulista, 1000, São Paulo, Brazil",
    type: "Regional Office",
    lat: -23.5505,
    lng: -46.6333,
    icon: "fas fa-globe-americas",
    description: "Regional headquarters for Latin American operations with sales and support teams.",
    phone: "78913139",
    email: "info@promo-fix.com",
    link: "https://maps.google.com/?q=-23.5505,-46.6333"
  },
  {
    id: 5,
    name: "Middle East Hub",
    address: "Dubai Internet City, Dubai, UAE",
    type: "Service Center",
    lat: 25.1107,
    lng: 55.1594,
    icon: "fas fa-tools",
    description: "Technical support and implementation center serving the Middle East region.",
    phone: "78913139",
    email: "info@promo-fix.com",
    link: "https://maps.google.com/?q=25.1107,55.1594"
  }
];

const markers = [];

const initMap = () => {
  if (!mapContainer.value) return;
  
  // Initialize map
  map = L.map(mapContainer.value, {
    zoomControl: false,
    attributionControl: false
  }).setView([20, 0], 2);
  
  // Add tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
  }).addTo(map);
  
  // Add zoom control
  L.control.zoom({ position: 'bottomright' }).addTo(map);
  
  // Create custom icons
  const iconColors = {
    "Headquarters": "blue",
    "Regional Office": "green",
    "Service Center": "gold"
  };
  
  const createCustomIcon = (color) => {
    return L.divIcon({
      className: 'custom-icon',
      html: `<div class="relative">
        <svg width="30" height="42" viewBox="0 0 30 42" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 0C6.71573 0 0 6.71573 0 15C0 26.25 15 42 15 42C15 42 30 26.25 30 15C30 6.71573 23.2843 0 15 0Z" fill="${color}"/>
          <circle cx="15" cy="15" r="8" fill="white"/>
        </svg>
      </div>`,
      iconSize: [30, 42],
      iconAnchor: [15, 42]
    });
  };
  
  // Add markers to the map
  locations.forEach(location => {
    const color = iconColors[location.type] || "blue";
    const marker = L.marker([location.lat, location.lng], {
      icon: createCustomIcon(color)
    }).addTo(map);
    
    // Create popup content
    const popupContent = `
      <div class="leaflet-popup-content min-w-[250px]">
        <div class="flex items-start gap-3">
          <div class="mt-1 text-${color}-500">
            <i class="${location.icon} text-lg"></i>
          </div>
          <div>
            <h3 class="font-bold text-lg mb-1">${location.name}</h3>
            <p class="text-gray-600 mb-2">${location.address}</p>
            <div class="flex gap-2 mb-3">
              <span class="inline-block px-2 py-1 text-xs bg-${color}-100 rounded text-${color}-800">${location.type}</span>
            </div>
            <p class="text-sm mb-3">${location.description}</p>
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-2">
                <i class="fas fa-phone text-gray-500"></i>
                <span class="text-sm">${location.phone}</span>
              </div>
              <div class="flex items-center gap-2">
                <i class="fas fa-envelope text-gray-500"></i>
                <span class="text-sm">${location.email}</span>
              </div>
            </div>
            <div class="mt-3">
              <a to="${location.link}" target="_blank" class="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800">
                <i class="fas fa-map-marker-alt"></i>
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
    
    marker.bindPopup(popupContent);
    markers.push(marker);
    
    // Open popup when location is active
    if (activeLocation.value === location.id) {
      marker.openPopup();
    }
  });
};

const focusLocation = (location) => {
  activeLocation.value = location.id;
  map.setView([location.lat, location.lng], 8);
  
  // Open the popup for this location
  markers.forEach(marker => {
    if (marker.getLatLng().lat === location.lat && 
        marker.getLatLng().lng === location.lng) {
      marker.openPopup();
    }
  });
};

onMounted(() => {
  initMap();
  // Set default active location
  activeLocation.value = locations[0].id;
  focusLocation(locations[0]);
});

onBeforeUnmount(() => {
  if (map) {
    map.remove();
  }
});
</script>

<style scoped>
.map-section {
  background: black;
}

.location-list::-webkit-scrollbar {
  width: 6px;
}

.location-list::-webkit-scrollbar-track {
  background: black;
  border-radius: 4px;
}

.location-list::-webkit-scrollbar-thumb {
  background: red;
  border-radius: 4px;
}

.location-list::-webkit-scrollbar-thumb:hover {
  background: red;
}

/* Leaflet custom marker styling */
:deep(.leaflet-popup-content) {
  margin: 12px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

:deep(.leaflet-popup-content-wrapper) {
  border-radius: 8px;
  box-shadow: 0 3px 14px rgba(0, 0, 0, 0.4);
}

:deep(.leaflet-popup-tip) {
  background: white;
}

:deep(.leaflet-container a.leaflet-popup-close-button) {
  color: #999;
  font-size: 20px;
  padding: 6px 8px 0 0;
}

:deep(.leaflet-container a.leaflet-popup-close-button:hover) {
  color: #555;
}

:deep(.leaflet-control-zoom) {
  border: none;
  border-radius: 4px;
  overflow: hidden;
}

:deep(.leaflet-control-zoom a) {
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  border-bottom: 1px solid #ddd;
  width: 30px;
  height: 30px;
  line-height: 30px;
}

:deep(.leaflet-control-zoom a:hover) {
  background: #f8f8f8;
}

:deep(.leaflet-control-zoom a:first-child) {
  border-radius: 4px 4px 0 0;
}

:deep(.leaflet-control-zoom a:last-child) {
  border-bottom: none;
  border-radius: 0 0 4px 4px;
}

/* Animation for location cards */
.location-card {
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform-origin: center;
}

.location-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px red;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .map-container {
    flex-direction: column;
  }
  
  .map-controls, .map-display {
    width: 100%;
  }
  
  .map-display {
    height: 400px;
  }
}

@media (max-width: 768px) {
  .map-display {
    height: 350px;
  }
}

.max-w-7xl {
  max-width: 90%;
}
</style>