<template>
    <!-- Company Experience Section Start -->
    <div class="company-experience">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <!-- Company Experience Content Start -->
                    <div class="company-experience-content">
                        <!-- Section Title Start -->
                        <div class="section-title">
                            <h3 class="wow fadeInUp">Company experience</h3>
                            <h2 class="text-anime-style-2" data-cursor="-opaque">Transforming ideas into digital <span>experiences</span></h2>
                            <p class="wow fadeInUp" data-wow-delay="0.2s">We bring your ideas to life with innovative digital solutions, creating seamless, engaging, and impactful experiences tailored to your audience.</p>
                        </div>
                        <!-- Section Title End -->

                        <!-- Experience Counter List Start -->
                        <div class="experience-counter-list">
                            <!-- Experience Counter Item Start -->
                            <div class="experience-counter-item">
                                <h3><span class="counter">25</span>+</h3>
                                <p>Year of experience</p>
                            </div>
                            <!-- Experience Counter Item End -->
                            
                            <!-- Experience Counter Item Start -->
                            <div class="experience-counter-item">
                                <h3><span class="counter">36</span>k+</h3>
                                <p>Project complete</p>
                            </div>
                            <!-- Experience Counter Item End -->
                            
                            <!-- Experience Counter Item Start -->
                            <div class="experience-counter-item">
                                <h3><span class="counter">500</span>+</h3>
                                <p>Happy customer</p>
                            </div>
                            <!-- Experience Counter Item End -->
                        </div>
                        <!-- Experience Counter List End -->
                        
                        <!-- Experience Counter Footer Start -->
                        <div class="about-us-footer experience-counter-footer wow fadeInUp" data-wow-delay="0.4s">
                            <!-- Hero Button Start -->
                            <div class="about-btn">
                                <a to="contact.html" class="btn-default">contact us</a>
                            </div>
                            <!-- Hero Button End -->

                            <!-- Hero Contact Box Start -->
                            <div class="about-contact-box">
                                <div class="icon-box">
                                    <img src="/assets/images/icon-phone-accent.svg" alt="">
                                </div>
                                <div class="about-contact-content">
                                    <p>Need help!</p>
                                    <h3><a to="tel:123456789">+123 456 789</a></h3>
                                </div>
                            </div>
                            <!-- Hero Contact Box End -->
                        </div>
                        <!-- Experience Counter Footer End -->
                    </div>
                    <!-- Company Experience Content End -->
                </div>

                <div class="col-lg-6">
                    <!-- Company Experience Image Start -->
                    <div class="company-experience-images">
                        <!-- Experience Image Box 1 Start -->
                        <div class="experience-image-box-1">
                            <!-- Experience Support Box Start -->
                            <div class="company-support-box wow fadeInUp">
                                <div class="company-support-content">
                                    <h3>24/7 support</h3>
                                    <p>we provide 24/7 service our agency customer</p>
                                </div>
                                <div class="company-support-btn">
                                    <a to="contact.html"><img src="/assets/images/arrow-accent.svg" alt=""></a>
                                </div>
                            </div>
                            <!-- Experience Support Box End -->

                            <!-- Experience Image Start -->
                            <div class="experience-image">
                                <figure class="image-anime reveal">
                                    <img src="/assets/images/company-experience-img-1.jpg" alt="">
                                </figure>
                            </div>
                            <!-- Experience Image End -->
                        </div>
                        <!-- Experience Image Box 1 End -->
                        
                        <!-- Experience Image Box 2 Start -->
                        <div class="experience-image-box-2">
                            <figure class="image-anime reveal">
                                <img src="/assets/images/company-experience-img-2.jpg" alt="">
                            </figure>
                        </div>
                        <!-- Experience Image Box 2 End -->
                    </div>
                    <!-- Company Experience Image End -->
                </div>
            </div>
        </div>
    </div>
    <!-- Company Experience Section End -->

  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import { initCarousels } from 'flowbite';
  
  onMounted(() => {
    initCarousels();
  });
  </script>
  
