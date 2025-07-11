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
            <div class="location-tabs wow fadeInUp">
              <div class="tab-buttons">
                <button 
                  v-for="(location, index) in locations" 
                  :key="index"
                  @click="activeTab = index"
                  :class="{ active: activeTab === index }"
                >
                  {{ location.city }}
                </button>
              </div>
              
              <div class="tab-content">
                <div 
                  v-for="(location, index) in locations" 
                  :key="index"
                  v-show="activeTab === index"
                  class="contact-info-box"
                >
                  <!-- Contact Info List Start -->
                  <div class="contact-info-list">
                    <!-- Contact Info List Item Start -->
                    <div class="contact-info-list-item">
                   
                      <div class="contact-info-title">
                        <h3><a class="text-xs" :href="`tel:${location.phone}`">{{ location.phone }}</a></h3>
                        <p class="text-xs" v-if="location.phone2"><a :href="`tel:${location.phone2}`">{{ location.phone2 }}</a></p>
                      </div>
                    </div>
                    <!-- Contact Info List Item End -->
                    
                    <!-- Contact Info List Item Start -->
                    <div class="contact-info-list-item">
            
                      <div class="contact-info-title">
                        <h3><a class="text-xs" :href="`mailto:${location.email}`">{{ location.email }}</a></h3>
                        <p class="text-xs" v-if="location.email2"><a :href="`mailto:${location.email2}`">{{ location.email2 }}</a></p>
                      </div>
                    </div>
                    <!-- Contact Info List Item End -->
                    
                    <!-- Contact Info List Item Start -->
                    <div class="contact-info-list-item">
              
                    </div>
                    <!-- Contact Info List Item End -->
                  </div>
                  <!-- Contact Info List End -->

                  <!-- Contact Social List Start -->
          
                  <!-- Contact Social List End -->
                </div>
              </div>
            </div>
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
              <form id="contactForm" action="#" method="POST" class="wow fadeInUp" data-wow-delay="0.4s">
                <div class="row">                                
                  <div class="form-group col-md-6 mb-4">
                    <input type="text" name="fname" class="form-control" id="fname" placeholder="First name" required>
                  </div>
  
                  <div class="form-group col-md-6 mb-4">
                    <input type="text" name="lname" class="form-control" id="lname" placeholder="Last name" required>
                  </div>
  
                  <div class="form-group col-md-12 mb-4">
                    <input type="text" name="phone" class="form-control" id="phone" placeholder="Enter your mobile no." required>
                  </div>
  
                  <div class="form-group col-md-12 mb-4">
                    <input type="email" name="email" class="form-control" id="email" placeholder="Enter your e-mail" required>
                  </div>

                  <div class="form-group col-md-12 mb-4">
                    <select name="location" class="form-control" required>
                      <option value="">Select location</option>
                      <option v-for="(location, index) in locations" :key="index" :value="location.city">
                        {{ location.city }}
                      </option>
                    </select>
                  </div>
  
                  <div class="form-group col-md-12 mb-5">
                    <textarea name="message" class="form-control" id="message" rows="4" placeholder="Write message..." required></textarea>
                  </div>
  
                  <div class="col-md-12">
                    <button type="submit" class="btn-default"><span>send message</span></button>
                  </div>
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