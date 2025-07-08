<template>

  <div class="what-we-do">
        <div class="container">
            <div class="row section-row">
                <div class="col-lg-7">
                    <!-- Section Title Start -->
                    <div class="section-title">
                        <h3 class="wow fadeInUp">what we do</h3>
                        <h2 class="text-anime-style-2" data-cursor="-opaque">Creating digital <span>solution</span></h2>
                    </div>
                    <!-- Section Title End -->
                </div>

                <div class="col-lg-5">
                    <!-- Section Button Start -->
                    <div class="section-btn wow fadeInUp" data-wow-delay="0.2s">
                        <a to="contact.html" class="btn-default">contact us</a>
                    </div>
                    <!-- Section Button End -->
                </div>
            </div>

            <div class="row">
                <div class="col-lg-4">
                    <!-- What We Do Box Start -->
                    <div class="what-we-do-box">
                        <!-- What We Do Item Start -->
                        <div class="what-we-do-item wow fadeInUp">
                            <div class="what-do-item-content">
                                <p>With over 16k+ successful Web Design  projects Complete.</p>
                            </div>
                            <div class="what-do-body-box">
                                <div class="what-do-body-title">
                                    <h3><span>16k+</span>Project web complete</h3>
                                </div>
                                <div class="icon-box">
                                    <img src="/assets/images/icon-what-do-item-1.svg" alt="">
                                </div>
                            </div>
                        </div>
                        <!-- What We Do Item End -->
    
                       <!-- What We Do Box Image Start -->
                       <div class="what-do-item-image">
                            <figure class="image-anime reveal">
                                <img src="/assets/images/what-we-do-img-1.jpg" alt="">
                            </figure>
                        </div>
                        <!-- What We Do Box Image End -->
                    </div>
                    <!-- What We Do Box End -->
                </div>
    
                <div class="col-lg-4">
                    <!-- What We Do Image Start -->
                    <div class="what-we-do-image">
                        <!-- What We Do Body Start -->
                        <div class="what-do-body-title wow fadeInUp">
                            <h3><span>98%</span>Performance Grow in agency</h3>
                        </div>
                        <!-- What We Do Body End -->
                        
                        <!-- What We Do Content Start -->
                        <div class="what-we-do-content wow fadeInUp" data-wow-delay="0.2s">
                            <p>Achieving a 98% performance growth, we focus on delivering results-driven strategies that optimize</p>
                        </div>
                        <!-- What We Do Content End -->
                        
                        <!-- What Do Image Start -->
                        <div class="what-do-image">
                            <figure class="image-anime">
                                <img src="/assets/images/what-we-do-img-2.jpg" alt="">
                            </figure>
                        </div>
                        <!-- What Do Image End -->
                    </div>
                    <!-- What We Do Image End -->
                </div>
                
                <div class="col-lg-4">
                    <!-- What We Do Box Start -->
                    <div class="what-we-do-box">
                        <!-- What We Do Box Image Start -->
                        <div class="what-do-item-image">
                            <figure class="image-anime reveal">
                                <img src="/assets/images/what-we-do-img-3.jpg" alt="">
                            </figure>
                        </div>
                        <!-- What We Do Box Image End -->

                        <!-- What We Do Item Start -->
                        <div class="what-we-do-item wow fadeInUp">
                            <div class="what-do-item-content">
                                <p>Win over 24k+  Winning  Award Our Web Agency science 2024.</p>
                            </div>
                            <div class="what-do-body-box">
                                <div class="what-do-body-title">
                                    <h3><span>24k+</span>Award win web agency</h3>
                                </div>
                                <div class="icon-box">
                                    <img src="/assets/images/icon-what-do-item-2.svg" alt="">
                                </div>
                            </div>
                        </div>
                        <!-- What We Do Item End -->
                    </div>
                    <!-- What We Do Box End -->
                </div>
            </div>
        </div>
    </div>

  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import { initCarousels } from 'flowbite';

  onMounted(() => {
    initCarousels();
  });
  </script>
  
