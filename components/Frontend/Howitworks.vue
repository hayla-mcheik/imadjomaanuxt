<template>

   <!-- How It Work Section Start -->
    <div class="how-it-work">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <!-- How Work Content Start -->
                    <div class="how-work-content">
                        <!-- Section Title Start -->
                        <div class="section-title">
                            <h3 class="wow fadeInUp">how it work</h3>
                            <h2 class="text-anime-style-3" data-cursor="-opaque">Simple steps to stunning transformations</h2>
                            <p class="wow fadeInUp" data-wow-delay="0.2s">Discover a seamless process designed to enhance your beauty personalized consultations to expert procedures and dedicated aftercare, we guide you every step of the way toward achieving stunning.</p>
                        </div>
                        <!-- Section Title End -->

                        <!-- How Work Button Start -->
                        <div class="how-work-btn wow fadeInUp" data-wow-delay="0.4s">
                            <NuxtLink to="/contact" class="appointment-btn">contact us</NuxtLink> 
                        </div>
                        <!-- How Work Button End -->
                    </div>
                    <!-- How Work Content End -->
                </div>

                <div class="col-lg-6">
                    <!-- How Work Steps Start -->
                    <div class="how-work-steps">
                        <!-- How Work Step Item Start -->
                        <div class="how-work-step-item wow fadeInUp">
                            <div class="icon-box">
                                <img src="/assets/images/icon-how-work-step-1.svg" alt="">
                            </div>
                            <div class="how-work-step-content">
                                <h3>01. loreum ipsum</h3>
                                <p>loreum ipsum loreum ipsum loreum ipsum loreum ipsum loreum ipsum loreum ipsum</p>
                            </div>
                        </div>
                        <!-- How Work Step Item End -->

                        <!-- How Work Step Item Start -->
                        <div class="how-work-step-item wow fadeInUp" data-wow-delay="0.2s">
                            <div class="icon-box">
                                <img src="/assets/images/icon-how-work-step-2.svg" alt="">
                            </div>
                            <div class="how-work-step-content">
                                <h3>02. loreum ipsum</h3>
                                <p>loreum ipsum loreum ipsum loreum ipsum loreum ipsum loreum ipsum loreum ipsum.</p>
                            </div>
                        </div>
                        <!-- How Work Step Item End -->

                        <!-- How Work Step Item Start -->
                        <div class="how-work-step-item wow fadeInUp" data-wow-delay="0.4s">
                            <div class="icon-box">
                                <img src="/assets/images/icon-how-work-step-3.svg" alt="">
                            </div>
                            <div class="how-work-step-content">
                                <h3>03. loreum ipsum</h3>
                                <p>loreum ipsum loreum ipsum loreum ipsum loreum ipsum loreum ipsum loreum ipsums.</p>
                            </div>
                        </div>
                        <!-- How Work Step Item End -->

                        <!-- How Work Step Item Start -->
                        <div class="how-work-step-item wow fadeInUp" data-wow-delay="0.6s">
                            <div class="icon-box">
                                <img src="/assets/images/icon-how-work-step-4.svg" alt="">
                            </div>
                            <div class="how-work-step-content">
                                <h3>04. loreum ipsum</h3>
                                <p>loreum ipsum loreum ipsum loreum ipsum loreum ipsum loreum ipsum loreum ipsum.</p>
                            </div>
                        </div>
                        <!-- How Work Step Item End -->
                    </div>
                    <!-- How Work Steps End -->
                </div>
            </div>
        </div>
    </div>
    <!-- How It Work Section End -->
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import { initCarousels } from 'flowbite';
  
  onMounted(() => {
    initCarousels();
  });
  </script>
  
