<template>
  <!-- Page Contact Us Start -->
  <div class="page-contact-us">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <!-- Contact Us Content Start -->
          <div class="contact-us-content">
            <!-- Contact Info Image Start -->
            <div class="contact-info-image">
              <figure class="image-anime reveal">
                <img src="/assets/images/38.jpg" alt="Our locations">
              </figure>
            </div>
            <!-- Contact Info Image End -->

            <!-- Location Tabs Start -->
     
            <!-- Location Tabs End -->
          </div>
          <!-- Contact Us Content End -->
        </div>

        <div class="col-lg-6">
          <!-- Contact Us Form Start -->
          <div class="contact-us-form">
            <!-- Section Title Start -->
            <div class="section-title">
              <h3 class="wow fadeInUp">Contact us</h3>
              <h2 class="text-anime-style-2" data-cursor="-opaque">Reach out to us <span>anytime</span></h2>
            </div>
            <!-- Section Title End -->

            <!-- Contact Form Start -->
        <div class="contact-form">
    <form @submit.prevent="handleSubmit" class="wow fadeInUp" data-wow-delay="0.4s">
      <div class="row">                                
        <div class="form-group col-md-6 mb-4">
          <input 
            type="text" 
            v-model="form.name"
            class="form-control" 
            placeholder="Your name" 
            required
          >
        </div>

        <div class="form-group col-md-6 mb-4">
          <input 
            type="email" 
            v-model="form.email"
            class="form-control" 
            placeholder="Your email" 
            required
          >
        </div>

        <div class="form-group col-md-12 mb-4">
          <input 
            type="tel" 
            v-model="form.phone"
            class="form-control" 
            placeholder="Your phone number"
          >
        </div>

        <div class="form-group col-md-12 mb-5">
          <textarea 
            v-model="form.message"
            class="form-control" 
            rows="4" 
            placeholder="Your message" 
            required
          ></textarea>
        </div>

        <div class="col-md-12">
          <button 
            type="submit" 
            class="btn-default"
            :disabled="loading"
          >
            <span v-if="!loading">Send message</span>
            <span v-else>Sending...</span>
          </button>
        </div>
      </div>
      
      <div v-if="successMessage" class="mt-4 text-green-500">
        {{ successMessage }}
      </div>
      <div v-if="errorMessage" class="mt-4 text-red-500">
        {{ errorMessage }}
      </div>
    </form>
  </div>
            <!-- Contact Form End -->
          </div>
          <!-- Contact Us Form End -->
        </div>
      </div>
    </div>
  </div>
  <!-- Page Contact Us End -->
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const activeTab = ref(0);

const locations = ref([
  {
    city: "lebanon",
    phone: "+971 48769398",
    phone2: "+971 48769398",
    email: "info@promo-fix.com",
    email2: "info@promo-fix.com",
    address: "kornish almazraa",
    hours: "Mon-Fri: 9AM-4PM"
  },
  {
    city: "Qatar",
    phone: "+1 212 555 1234",
    phone2: "+1 646 555 5678",
    email: "ny@promofix.com",
    address: "456 Innovation Ave, Suite 200, NY 10001",
    hours: "Mon-Fri: 8AM-5PM EST"
  },
  {
    city: "Dubai",
    phone: "+971 4 123 4567",
    email: "uae@promofix.com",
    email2: "me.support@promofix.com",
    address: "789 Business Tower, Sheikh Zayed Road, Dubai",
    hours: "Sun-Thu: 9AM-6PM GST"
  },
  {
    city: "Singapore",
    phone: "+65 6123 4567",
    email: "sg@promofix.com",
    address: "101 Tech Park, Singapore 138589",
    hours: "Mon-Fri: 9AM-6PM SGT"
  }
]);

const runtimeConfig = useRuntimeConfig();
const apiBaseUrl = runtimeConfig.public.apiBase || 'http://localhost:8000';

const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
});

const loading = ref(false);
const successMessage = ref('');
const errorMessage = ref('');

const handleSubmit = async () => {
  loading.value = true;
  errorMessage.value = '';
  successMessage.value = '';

  try {
    const response = await axios.post(`${apiBaseUrl}/contact`, form, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    console.log(response.data);
    
    if (response.data.success) {
      successMessage.value = response.data.message;
      // Reset form
      Object.keys(form).forEach(key => {
        form[key] = '';
      });
    }
  } catch (error) {
    console.error('Error:', error);
    if (error.response && error.response.data && error.response.data.errors) {
      errorMessage.value = Object.values(error.response.data.errors).flat().join(' ');
    } else {
      errorMessage.value = 'An error occurred. Please try again later.';
    }
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
/* Base Styles */
.contact-info-image figure {
  visibility: visible;
  margin-bottom: 30px;
}

/* Location Tabs */
.location-tabs {
  background: black;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  overflow: hidden;
}

.tab-buttons {
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #000;
}

.tab-buttons button {
  padding: 12px 20px;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 600;
  color: #fff;
  transition: all 0.3s ease;
  position: relative;
}

.tab-buttons button:hover {
  color: #000;
}

.tab-buttons button.active {
  color: #e53e3e;
}

.tab-buttons button.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #e53e3e;
}

.tab-content {
  padding: 25px;
}

/* Contact Info Items */
.contact-info-list-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
}

.icon-box {
  margin-right: 15px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  border-radius: 50%;
}

.contact-info-title h3 {
  margin: 0 0 5px 0;
  font-size: 18px;
}

.contact-info-title p {
  margin: 0;
  font-size: 14px;
  color: #fff;
}

.contact-info-title a {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s;
}
.contact-info-title a{
    color:white;
}
.contact-info-title a:hover {
  color: #e53e3e;
}

/* Social Icons */
.contact-social-list ul {
  display: flex;
  gap: 15px;
  padding: 0;
  margin: 25px 0 0 0;
  list-style: none;
}

.contact-social-list a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #000;
  border-radius: 50%;
  color: #fff;
  transition: all 0.3s;
}

.contact-social-list a:hover {
  background: #e53e3e;
  color: white;
}

/* Form Select */
.form-control {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}

select.form-control {
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 15px center;
  background-size: 16px;
}

/* Responsive */
@media (max-width: 768px) {
  .tab-buttons {
    overflow-x: auto;
    white-space: nowrap;
    padding-bottom: 5px;
  }
  
  .tab-buttons button {
    padding: 10px 15px;
    font-size: 14px;
  }
  
  .contact-info-list-item {
    flex-direction: column;
  }
  
  .icon-box {
    margin-bottom: 10px;
  }
}
</style>