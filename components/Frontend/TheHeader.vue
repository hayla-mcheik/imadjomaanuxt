<template>

  <!-- Main Layout -->
  <div >
    <!-- Vertical Navbar for Desktop -->
    <nav class="vertical-navbar hidden md:block">
      <div class="vertical-navbar-inner">
        <!-- Logo -->
        <NuxtLink class="navbar-brand mt-4" to="/">
          <img src="/assets/images/logooo.jpg" class="logo" alt="Logo">
        </NuxtLink>
        
        <!-- Vertical Menu -->
        <ul class="vertical-menu pt-5">
          <li class="bg-silver-gradient"><NuxtLink class="nav-link text-white font-bold italic" to="/imadjoma">Imad Jomaa</NuxtLink></li>
          <li><NuxtLink class="nav-link" to="/about" :class="{'active-link': $route.path === '/about'}">My Story</NuxtLink></li>
          <li><NuxtLink class="nav-link" to="/company" :class="{'active-link': $route.path === '/company'}">Companies</NuxtLink></li>
          <li><NuxtLink class="nav-link" to="/technologies" :class="{'active-link': $route.path === '/technologies'}">Technologies</NuxtLink></li>
          <li><NuxtLink class="nav-link" to="/events" :class="{'active-link': $route.path === '/events'}">Events</NuxtLink></li>
                  <li><NuxtLink class="nav-link" to="/news" :class="{'active-link': $route.path === '/news'}">News</NuxtLink></li>
          <li><NuxtLink class="nav-link" to="/contact">Contact Us</NuxtLink></li>
        </ul>
        
        <!-- Contact Info -->
        <div class="vertical-navbar-footer">

<div class="social-icons grid grid-cols-5 gap-4 text-center text-white text-xl">
  <a href="#" target="_blank" aria-label="X / Twitter">
    <i class="fab fa-x-twitter"></i>
  </a>
  <a href="#" target="_blank" aria-label="Facebook">
    <i class="fab fa-facebook-f"></i>
  </a>
  <a href="#" target="_blank" aria-label="YouTube">
    <i class="fab fa-youtube"></i>
  </a>
  <a href="#" target="_blank" aria-label="LinkedIn Alt">
    <i class="fab fa-linkedin-in"></i>
  </a>

  <a href="#" target="_blank" aria-label="Instagram">
    <i class="fab fa-instagram"></i>
  </a>
  <a href="#" target="_blank" aria-label="Snapchat">
    <i class="fab fa-snapchat"></i>
  </a>
  <a href="#" target="_blank" aria-label="TikTok">
    <i class="fab fa-tiktok"></i>
  </a>
  <a href="#" target="_blank" aria-label="Threads">
    <i class="fab fa-threads"></i>
  </a>
  <a href="#" target="_blank" aria-label="Call">
    <i class="fas fa-phone-alt"></i>
  </a>
</div>

        </div>
      </div>
    </nav>

    <!-- Mobile Header -->
    <header class="main-header md:hidden">
      <nav class="navbar">
        <div class="container max-w-8xl">
          <!-- Logo -->
          <NuxtLink class="navbar-brand" to="/">
            <img src="/assets/images/logooo.jpg" class="logo" alt="Logo">
          </NuxtLink>
          <div class="flex justify-end items-center">
            <!-- Burger Button -->
            <button class="menu-toggle" @click="toggleDrawer">
              <div class="menu-icon w-[25px]">
                <img src="/assets/images/menu.svg" class="w-[25px]"/>
              </div>
            </button>
          </div>
        </div>
      </nav>

         <!-- Fixed Drawer with Menu -->
      <div class="drawer" :class="{ open: drawerOpen }">
        <div class="drawer-header">
          <div class="drawer-logo">
            <img src="/assets/images/logooo.jpg" alt="Logo">
          </div>
          <button class="close-button" @click="toggleDrawer">
            <i class="fas fa-times"></i>
          </button>
        </div>
        
        <div class="drawer-content">
          <ul class="mobile-menu">
            <li><NuxtLink class="mobile-nav-link" :class="{'active-link': $route.path === '/'}" to="/imadjoma" @click="toggleDrawer">Imad Jomaa</NuxtLink></li>
            <li><NuxtLink class="mobile-nav-link" :class="{'active-link': $route.path === '/about'}" to="/about" @click="toggleDrawer">Our Story</NuxtLink></li>
            <li><NuxtLink class="mobile-nav-link" :class="{'active-link': $route.path === '/company'}" to="/company" @click="toggleDrawer">Companies</NuxtLink></li>
            <li><NuxtLink class="mobile-nav-link" :class="{'active-link': $route.path === '/technologies'}" to="/technologies" @click="toggleDrawer">Technologies</NuxtLink></li>
            <li><NuxtLink class="mobile-nav-link" :class="{'active-link': $route.path === '/events'}" to="/events" @click="toggleDrawer">Events</NuxtLink></li>
                        <li><NuxtLink class="mobile-nav-link" :class="{'active-link': $route.path === '/news'}" to="/news" @click="toggleDrawer">News</NuxtLink></li>
            <li><NuxtLink class="mobile-nav-link" to="/contact" @click="toggleDrawer">Contact Us</NuxtLink></li>
          </ul>
          
          <!-- <div class="mobile-contact">
            <h3 class="contact-title">Contact Info</h3>
            <a to="tel:+96170003161" class="contact-link">
              <i class="fas fa-phone"></i> +961 78 913 139
            </a>
            <a to="mailto:info@promo-fix.com" class="contact-link">
              <i class="fas fa-envelope"></i> info@promo-fix.com
            </a>
          </div>
           -->
          <div class="mobile-social">
            <h3 class="social-title">Follow Us</h3>
     <div class="social-icons grid grid-cols-5 gap-4 text-center text-white text-xl">
  <a href="#" target="_blank" aria-label="X / Twitter">
    <i class="fab fa-x-twitter"></i>
  </a>
  <a href="#" target="_blank" aria-label="Facebook">
    <i class="fab fa-facebook-f"></i>
  </a>
  <a href="#" target="_blank" aria-label="LinkedIn">
    <i class="fab fa-linkedin"></i>
  </a>
  <a href="#" target="_blank" aria-label="YouTube">
    <i class="fab fa-youtube"></i>
  </a>


  <a href="#" target="_blank" aria-label="Instagram">
    <i class="fab fa-instagram"></i>
  </a>
  <a href="#" target="_blank" aria-label="Snapchat">
    <i class="fab fa-snapchat"></i>
  </a>
  <a href="#" target="_blank" aria-label="TikTok">
    <i class="fab fa-tiktok"></i>
  </a>
  <a href="#" target="_blank" aria-label="Threads">
    <i class="fab fa-threads"></i>
  </a>
  <a href="#" target="_blank" aria-label="Call">
    <i class="fas fa-phone-alt"></i>
  </a>
</div>

            
          </div>
        </div>
      </div>
      
      
      <!-- Overlay -->
      <div class="overlay" :class="{ open: drawerOpen }" @click="toggleDrawer"></div>
    </header>

  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'

const drawerOpen = ref(false)

const toggleDrawer = () => {
  drawerOpen.value = !drawerOpen.value
  if (drawerOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

onMounted(() => {
  const navbar = document.querySelector('.navbar')
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        navbar.classList.add('scrolled')
      } else {
        navbar.classList.remove('scrolled')
      }
    })
  }
})
</script>

<style scoped>
.vertical-menu .nav-link{
  font-size: 18px;
}
/* Top Bar Styles */
.top-bar {
  background: #000;
  color: white;
  padding: 12px 0;
  font-size: 14px;
}

.top-bar-left {
  display: flex;
  gap: 30px;
  justify-content: center;
}
/* Desktop */
.vertical-menu .nav-link.active-link {
  color: #c00;
  font-weight: 600;
  position: relative;
}

/* Mobile */
.mobile-nav-link.active-link {
  color: #c00 !important;
  font-weight: 600;
}
.vertical-menu .nav-link.active-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: #c00;
  animation: underline 0.3s ease;
}

/* Main Layout */
.main-layout {
  display: flex;
  min-height: 100vh;
}

/* Vertical Navbar Styles */
.vertical-navbar {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 250px;
  background: black;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  border-right: 1px solid #fff;
}

.vertical-navbar-inner {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 15px;
}

.navbar-brand {
  display: block;
  text-align: center;
}


.vertical-menu {
  list-style: none;
  padding: 0;
  margin-left: 20px;
  flex-grow: 1;
}

.vertical-menu li {
  margin-bottom: 5px;
}

.vertical-menu .nav-link {
  display: block;
  padding: 12px 10px;
  color: white;
  text-decoration: none;
  font-weight: 500;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.vertical-menu .nav-link:hover {
  background: rgba(200, 0, 0, 0.1);
  color: red;
}

.vertical-navbar-footer {
  padding: 20px 0 0;
  border-top: 1px solid #000;
  margin-top: auto;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fff;
  font-size: 14px;
  text-decoration: none;
}

.contact-link:hover {
  color: #c00;
}

.social-icons {
  display: grid;
  gap: 15px;
  justify-content: center;
}

.social-icons a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: #fff;
  transition: all 0.3s ease;
}

.social-icons a:hover {
  color: red;
}
.social-icons a i {
  font-size: 16px;
}
/* Content Area */
.content-area {
  flex-grow: 1;
  margin-left: 250px; /* Match vertical navbar width */
  padding: 20px;
  min-height: 100vh;
}

/* Mobile Header (only shown on mobile) */
.main-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  transition: background-color 0.3s, box-shadow 0.3s;
  background-color: #000;
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
}
.menu-icon  img {
  filter: brightness(0.5) invert(1);
}
/* Drawer Styles */
.drawer {
  position: fixed;
  top: 0;
  right: -100%;
  width: 85%;
  max-width: 320px;
  height: 100%;
  background: black;
  z-index: 1100;
  transition: right 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);
  box-shadow: -5px 0 25px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
}

.drawer.open {
  right: 0;
}

.drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
}

.drawer-logo img {
  height: 40px;
}

.close-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
  transition: color 0.3s;
}

.close-button:hover {
  color: #c00;
}

.drawer-content {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
}

.mobile-menu {
  list-style: none;
  padding: 0;
  margin: 0 0 30px;
}

.mobile-nav-link {
  display: block;
  padding: 15px 0;
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  border-bottom: 1px solid #f0f0f0;
  transition: all 0.3s;
}

.mobile-nav-link:hover,
.mobile-nav-link:focus {
  color: #c00;
  padding-left: 10px;
}

.mobile-contact,
.mobile-social {
  margin-top: 25px;
}

.contact-title,
.social-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 15px;
  padding-bottom: 8px;
  border-bottom: 1px solid #eee;
}

.mobile-contact .contact-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
  color: #555;
  text-decoration: none;
  font-size: 0.95rem;
}

.mobile-contact .contact-link:hover {
  color: #c00;
}

.mobile-social .social-icons {
  display: flex;
  gap: 15px;
  margin-top: 10px;
}

.mobile-social .social-icons a {
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: all 0.3s;
}

.mobile-social .social-icons a:hover {
  background: #c00;
  color: white;
  transform: translateY(-3px);
}

/* Overlay Styles */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.overlay.open {
  opacity: 1;
  visibility: visible;
}

/* Adjustments for mobile */
@media (max-width: 767px) {
  .logo {
  height: 60px;
  max-width: 80%;
}

  .vertical-navbar {
    display: none;
  }
  
  .content-area {
    margin-left: 0;
    padding-top: 80px; /* Space for mobile header */
  }
  
  .main-header {
    display: block;
  }
}

@media (min-width: 768px) {
  .vertical-menu li {
    width: 140px;
  }
  .main-header {
    display: none;
  }
  
  .drawer,
  .overlay {
    display: none !important;
  }
}

/* Animation for menu toggle */
.menu-toggle {
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  transition: transform 0.3s;
}

.menu-toggle:hover {
  transform: scale(1.1);
}
.bg-silver-gradient{
background: gray;
}
</style>