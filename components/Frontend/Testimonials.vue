<script setup>

// Import Swiper modules
import Swiper from 'swiper';
import { Autoplay, EffectFade , Navigation , Pagination} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { onMounted } from 'vue';
onMounted(() => {
new Swiper(".say-about-slider", {
      modules : [Autoplay , Pagination , Navigation],
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,
    navigation: {
      nextEl: ".about-next-btn",
      prevEl: ".about-prev-btn",
    },
    pagination: {
      el: ".swiper-pagination2",
      clickable: true,
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      386: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
    },
  });
});


</script>

<template>
    <div class="say-about-section mb-110">
        <img src="assets/img/home1/testimonial-vector-2.png" alt="" class="vector3">
        <img src="assets/img/home1/testimonial-vector-1.png" alt="" class="vector4">
         <div class="container">
      <div class="section-title">
                        <h2 class="text-anime-style-2" data-cursor="-opaque">Our <span>Testimonials</span></h2>
                    </div>
      
            <div class="say-about-wrapper">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="swiper say-about-slider">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="say-about-card">
                                        <div class="say-about-card-top">
                                            <ul>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                            </ul>
                                        </div>
                                        <p>“I was recommended snaga from a dear friendest onest Gives energy, strength & mostly youm motivationt goint and WOW!!! Gives energy, strength & mostlydat youm motivation”</p>
                                        <div class="say-about-card-bottom">
                                            <div class="author-area">
                                                <div class="author-img">
                                                    <img src="/assets/images/author-2.jpg" alt="">
                                                </div>
                                                <div class="author">
                                                    <h5>Jayden Carter</h5>
                                                    <p>Manager at Global Business</p>
                                                </div>
                                            </div>
                                            <div class="quote">
                                                <svg width="59" height="41" viewBox="0 0 59 41" xmlns="http://www.w3.org/2000/svg">
                                                    <g opacity="0.05">
                                                        <path
                                                            d="M27.8217 13.4959C27.7944 13.2156 27.7396 12.9284 27.6712 12.6481C27.062 5.56517 21.1144 0 13.8664 0C6.2077 0 0 6.20099 0 13.8514C0 21.283 5.85865 27.3268 13.2093 27.6686C11.4367 30.4649 8.58264 32.7278 5.09894 33.7944L4.98259 33.8286C3.36735 34.3208 2.25175 35.8933 2.40232 37.6435C2.57342 39.6604 4.34608 41.1576 6.37196 40.9867C12.3333 40.4808 18.2946 37.4384 22.3464 32.4954C24.3791 30.0341 25.9533 27.1353 26.9114 23.9767C27.8765 20.8249 28.205 17.4202 27.8765 14.0633L27.8217 13.4959Z" />
                                                        <path
                                                            d="M58.8217 13.4959C58.7944 13.2156 58.7396 12.9284 58.6712 12.6481C58.062 5.56517 52.1144 0 44.8664 0C37.2077 0 31 6.20099 31 13.8514C31 21.283 36.8586 27.3268 44.2093 27.6686C42.4367 30.4649 39.5826 32.7278 36.0989 33.7944L35.9826 33.8286C34.3674 34.3208 33.2517 35.8933 33.4023 37.6435C33.5734 39.6604 35.3461 41.1576 37.372 40.9867C43.3333 40.4808 49.2946 37.4384 53.3464 32.4954C55.3791 30.0341 56.9533 27.1353 57.9114 23.9767C58.8765 20.8249 59.205 17.4202 58.8765 14.0633L58.8217 13.4959Z" />
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="say-about-card">
                                        <div class="say-about-card-top">
                                            <ul>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                            </ul>
                                        </div>
                                        <p>“I was recommended snaga from a dear friendest onest Gives energy, strength & mostly youm motivationt goint and WOW!!! Gives energy, strength & mostlydat youm motivation”</p>
                                        <div class="say-about-card-bottom">
                                            <div class="author-area">
                                                <div class="author-img">
                                                 <img src="/assets/images/author-2.jpg" alt="">
                                                </div>
                                                <div class="author">
                                                    <h5>Colton Roman</h5>
                                                    <p>Ceo at Global Business</p>
                                                </div>
                                            </div>
                                            <div class="quote">
                                                <svg width="59" height="41" viewBox="0 0 59 41" xmlns="http://www.w3.org/2000/svg">
                                                    <g opacity="0.05">
                                                        <path
                                                            d="M27.8217 13.4959C27.7944 13.2156 27.7396 12.9284 27.6712 12.6481C27.062 5.56517 21.1144 0 13.8664 0C6.2077 0 0 6.20099 0 13.8514C0 21.283 5.85865 27.3268 13.2093 27.6686C11.4367 30.4649 8.58264 32.7278 5.09894 33.7944L4.98259 33.8286C3.36735 34.3208 2.25175 35.8933 2.40232 37.6435C2.57342 39.6604 4.34608 41.1576 6.37196 40.9867C12.3333 40.4808 18.2946 37.4384 22.3464 32.4954C24.3791 30.0341 25.9533 27.1353 26.9114 23.9767C27.8765 20.8249 28.205 17.4202 27.8765 14.0633L27.8217 13.4959Z" />
                                                        <path
                                                            d="M58.8217 13.4959C58.7944 13.2156 58.7396 12.9284 58.6712 12.6481C58.062 5.56517 52.1144 0 44.8664 0C37.2077 0 31 6.20099 31 13.8514C31 21.283 36.8586 27.3268 44.2093 27.6686C42.4367 30.4649 39.5826 32.7278 36.0989 33.7944L35.9826 33.8286C34.3674 34.3208 33.2517 35.8933 33.4023 37.6435C33.5734 39.6604 35.3461 41.1576 37.372 40.9867C43.3333 40.4808 49.2946 37.4384 53.3464 32.4954C55.3791 30.0341 56.9533 27.1353 57.9114 23.9767C58.8765 20.8249 59.205 17.4202 58.8765 14.0633L58.8217 13.4959Z" />
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="say-about-card">
                                        <div class="say-about-card-top">
                                            <ul>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                            </ul>
                                        </div>
                                        <p>“I was recommended snaga from a dear friendest onest Gives energy, strength & mostly youm motivationt goint and WOW!!! Gives energy, strength & mostlydat youm motivation”</p>
                                        <div class="say-about-card-bottom">
                                            <div class="author-area">
                                                <div class="author-img">
                                            <img src="/assets/images/author-2.jpg" alt="">
                                                </div>
                                                <div class="author">
                                                    <h5>Lincoln Miles</h5>
                                                    <p>Director at Global Business</p>
                                                </div>
                                            </div>
                                            
                                            <div class="quote">
                                                <svg width="59" height="41" viewBox="0 0 59 41" xmlns="http://www.w3.org/2000/svg">
                                                    <g opacity="0.05">
                                                        <path
                                                            d="M27.8217 13.4959C27.7944 13.2156 27.7396 12.9284 27.6712 12.6481C27.062 5.56517 21.1144 0 13.8664 0C6.2077 0 0 6.20099 0 13.8514C0 21.283 5.85865 27.3268 13.2093 27.6686C11.4367 30.4649 8.58264 32.7278 5.09894 33.7944L4.98259 33.8286C3.36735 34.3208 2.25175 35.8933 2.40232 37.6435C2.57342 39.6604 4.34608 41.1576 6.37196 40.9867C12.3333 40.4808 18.2946 37.4384 22.3464 32.4954C24.3791 30.0341 25.9533 27.1353 26.9114 23.9767C27.8765 20.8249 28.205 17.4202 27.8765 14.0633L27.8217 13.4959Z" />
                                                        <path
                                                            d="M58.8217 13.4959C58.7944 13.2156 58.7396 12.9284 58.6712 12.6481C58.062 5.56517 52.1144 0 44.8664 0C37.2077 0 31 6.20099 31 13.8514C31 21.283 36.8586 27.3268 44.2093 27.6686C42.4367 30.4649 39.5826 32.7278 36.0989 33.7944L35.9826 33.8286C34.3674 34.3208 33.2517 35.8933 33.4023 37.6435C33.5734 39.6604 35.3461 41.1576 37.372 40.9867C43.3333 40.4808 49.2946 37.4384 53.3464 32.4954C55.3791 30.0341 56.9533 27.1353 57.9114 23.9767C58.8765 20.8249 59.205 17.4202 58.8765 14.0633L58.8217 13.4959Z" />
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                     <div class="swiper-slide">
                                    <div class="say-about-card">
                                        <div class="say-about-card-top">
                                            <ul>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                            </ul>
                                        </div>
                                        <p>“I was recommended snaga from a dear friendest onest Gives energy, strength & mostly youm motivationt goint and WOW!!! Gives energy, strength & mostlydat youm motivation”</p>
                                        <div class="say-about-card-bottom">
                                            <div class="author-area">
                                                <div class="author-img">
                                     <img src="/assets/images/author-2.jpg" alt="">
                                                </div>
                                                <div class="author">
                                                    <h5>Jayden Carter</h5>
                                                    <p>Manager at Global Business</p>
                                                </div>
                                            </div>
                                            <div class="quote">
                                                <svg width="59" height="41" viewBox="0 0 59 41" xmlns="http://www.w3.org/2000/svg">
                                                    <g opacity="0.05">
                                                        <path
                                                            d="M27.8217 13.4959C27.7944 13.2156 27.7396 12.9284 27.6712 12.6481C27.062 5.56517 21.1144 0 13.8664 0C6.2077 0 0 6.20099 0 13.8514C0 21.283 5.85865 27.3268 13.2093 27.6686C11.4367 30.4649 8.58264 32.7278 5.09894 33.7944L4.98259 33.8286C3.36735 34.3208 2.25175 35.8933 2.40232 37.6435C2.57342 39.6604 4.34608 41.1576 6.37196 40.9867C12.3333 40.4808 18.2946 37.4384 22.3464 32.4954C24.3791 30.0341 25.9533 27.1353 26.9114 23.9767C27.8765 20.8249 28.205 17.4202 27.8765 14.0633L27.8217 13.4959Z" />
                                                        <path
                                                            d="M58.8217 13.4959C58.7944 13.2156 58.7396 12.9284 58.6712 12.6481C58.062 5.56517 52.1144 0 44.8664 0C37.2077 0 31 6.20099 31 13.8514C31 21.283 36.8586 27.3268 44.2093 27.6686C42.4367 30.4649 39.5826 32.7278 36.0989 33.7944L35.9826 33.8286C34.3674 34.3208 33.2517 35.8933 33.4023 37.6435C33.5734 39.6604 35.3461 41.1576 37.372 40.9867C43.3333 40.4808 49.2946 37.4384 53.3464 32.4954C55.3791 30.0341 56.9533 27.1353 57.9114 23.9767C58.8765 20.8249 59.205 17.4202 58.8765 14.0633L58.8217 13.4959Z" />
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="say-about-card">
                                        <div class="say-about-card-top">
                                            <ul>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                            </ul>
                                        </div>
                                        <p>“I was recommended snaga from a dear friendest onest Gives energy, strength & mostly youm motivationt goint and WOW!!! Gives energy, strength & mostlydat youm motivation”</p>
                                        <div class="say-about-card-bottom">
                                            <div class="author-area">
                                                <div class="author-img">
                                                  <img src="/assets/images/author-2.jpg" alt="">
                                                </div>
                                                <div class="author">
                                                    <h5>Colton Roman</h5>
                                                    <p>Ceo at Global Business</p>
                                                </div>
                                            </div>
                                            <div class="quote">
                                                <svg width="59" height="41" viewBox="0 0 59 41" xmlns="http://www.w3.org/2000/svg">
                                                    <g opacity="0.05">
                                                        <path
                                                            d="M27.8217 13.4959C27.7944 13.2156 27.7396 12.9284 27.6712 12.6481C27.062 5.56517 21.1144 0 13.8664 0C6.2077 0 0 6.20099 0 13.8514C0 21.283 5.85865 27.3268 13.2093 27.6686C11.4367 30.4649 8.58264 32.7278 5.09894 33.7944L4.98259 33.8286C3.36735 34.3208 2.25175 35.8933 2.40232 37.6435C2.57342 39.6604 4.34608 41.1576 6.37196 40.9867C12.3333 40.4808 18.2946 37.4384 22.3464 32.4954C24.3791 30.0341 25.9533 27.1353 26.9114 23.9767C27.8765 20.8249 28.205 17.4202 27.8765 14.0633L27.8217 13.4959Z" />
                                                        <path
                                                            d="M58.8217 13.4959C58.7944 13.2156 58.7396 12.9284 58.6712 12.6481C58.062 5.56517 52.1144 0 44.8664 0C37.2077 0 31 6.20099 31 13.8514C31 21.283 36.8586 27.3268 44.2093 27.6686C42.4367 30.4649 39.5826 32.7278 36.0989 33.7944L35.9826 33.8286C34.3674 34.3208 33.2517 35.8933 33.4023 37.6435C33.5734 39.6604 35.3461 41.1576 37.372 40.9867C43.3333 40.4808 49.2946 37.4384 53.3464 32.4954C55.3791 30.0341 56.9533 27.1353 57.9114 23.9767C58.8765 20.8249 59.205 17.4202 58.8765 14.0633L58.8217 13.4959Z" />
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="say-about-card">
                                        <div class="say-about-card-top">
                                            <ul>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                            </ul>
                                        </div>
                                        <p>“I was recommended snaga from a dear friendest onest Gives energy, strength & mostly youm motivationt goint and WOW!!! Gives energy, strength & mostlydat youm motivation”</p>
                                        <div class="say-about-card-bottom">
                                            <div class="author-area">
                                                <div class="author-img">
                                                                <img src="/assets/images/author-2.jpg" alt="">
                                                </div>
                                                <div class="author">
                                                    <h5>Lincoln Miles</h5>
                                                    <p>Director at Global Business</p>
                                                </div>
                                            </div>
                                            
                                            <div class="quote">
                                                <svg width="59" height="41" viewBox="0 0 59 41" xmlns="http://www.w3.org/2000/svg">
                                                    <g opacity="0.05">
                                                        <path
                                                            d="M27.8217 13.4959C27.7944 13.2156 27.7396 12.9284 27.6712 12.6481C27.062 5.56517 21.1144 0 13.8664 0C6.2077 0 0 6.20099 0 13.8514C0 21.283 5.85865 27.3268 13.2093 27.6686C11.4367 30.4649 8.58264 32.7278 5.09894 33.7944L4.98259 33.8286C3.36735 34.3208 2.25175 35.8933 2.40232 37.6435C2.57342 39.6604 4.34608 41.1576 6.37196 40.9867C12.3333 40.4808 18.2946 37.4384 22.3464 32.4954C24.3791 30.0341 25.9533 27.1353 26.9114 23.9767C27.8765 20.8249 28.205 17.4202 27.8765 14.0633L27.8217 13.4959Z" />
                                                        <path
                                                            d="M58.8217 13.4959C58.7944 13.2156 58.7396 12.9284 58.6712 12.6481C58.062 5.56517 52.1144 0 44.8664 0C37.2077 0 31 6.20099 31 13.8514C31 21.283 36.8586 27.3268 44.2093 27.6686C42.4367 30.4649 39.5826 32.7278 36.0989 33.7944L35.9826 33.8286C34.3674 34.3208 33.2517 35.8933 33.4023 37.6435C33.5734 39.6604 35.3461 41.1576 37.372 40.9867C43.3333 40.4808 49.2946 37.4384 53.3464 32.4954C55.3791 30.0341 56.9533 27.1353 57.9114 23.9767C58.8765 20.8249 59.205 17.4202 58.8765 14.0633L58.8217 13.4959Z" />
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-pagination2"></div>
            </div>
         </div>
    </div>
</template>

<style scope>

/*........................ 
  Say About section
........................*/
.section-title2.style-2 h3::after {
  width: 100px;
}
.section-title2.style-3 {
  padding: 0 3%;
  position: relative;
  margin-bottom: 100px;
}
@media (max-width: 991px) {
  .section-title2.style-3 {
    padding: 0 3%;
    margin-bottom: 80px;
  }
}
.section-title2.style-3::after {
  content: "";
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  width: 61%;
  height: 2px;
  background: #000;
  border-radius: 5px;
}
@media (max-width: 991px) {
  .section-title2.style-3::after {
    width: 80%;
  }
}
.section-title2.style-3 h3::after {
  display: none;
}
.section-title2.style-4 h3::after {
  width: 100%;
}
.say-about-section {
  padding: 100px 0;
  overflow: hidden;
  position: relative;
  z-index: 1;
}
@media (max-width: 991px) {
  .say-about-section {
    padding: 90px 0;
  }
}
.say-about-section .vector3 {
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
}
@media (max-width: 767px) {
  .say-about-section .vector3 {
    display: none;
    visibility: hidden;
  }
}
.say-about-section .vector4 {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
}
@media (max-width: 767px) {
  .say-about-section .vector4 {
    display: none;
    visibility: hidden;
  }
}
.say-about-section .say-about-wrapper {
  padding: 0 5%;
}
.say-about-section .say-about-wrapper .swiper-wrapper {
  position: relative;
  padding: 0 40px;
}
@media (max-width: 576px) {
  .say-about-section .say-about-wrapper .swiper-wrapper {
    padding: 0;
  }
}
.say-about-section .say-about-wrapper .say-about-card {
  position: relative;
  max-width: 470px;
  width: 100%;
}
@media (max-width: 991px) {
  .say-about-section .say-about-wrapper .say-about-card {
    padding-left: 10px;
  }
}
.say-about-section .say-about-wrapper .say-about-card::after {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -25px;
  width: 1px;
  height: 150px;
  background-color:#000;
}
@media (max-width: 576px) {
  .say-about-section .say-about-wrapper .say-about-card::after {
    display: none;
  }
}
.say-about-section .say-about-wrapper .say-about-card .say-about-card-top {
  margin-bottom: 10px;
}
.say-about-section .say-about-wrapper .say-about-card .say-about-card-top ul {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 8px;
}
.say-about-section .say-about-wrapper .say-about-card .say-about-card-top ul li i {
  color: #000;
}
.say-about-section .say-about-wrapper .say-about-card p {
  color: #fff;
  font-size: 20px;
  font-family: var(--font-Jost);
  line-height: 1.9;
  margin-bottom: 30px;
}
@media (min-width: 1200px) and (max-width: 1399px) {
  .say-about-section .say-about-wrapper .say-about-card p {
    font-size: 18px;
  }
}
@media (max-width: 991px) {
  .say-about-section .say-about-wrapper .say-about-card p {
    font-size: 18px;
  }
}
.say-about-section .say-about-wrapper .say-about-card .say-about-card-bottom {
  max-width: 470px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.say-about-section .say-about-wrapper .say-about-card .say-about-card-bottom .author-area {
  display: flex;
  align-items: center;
  gap: 15px;
}
.say-about-section .say-about-wrapper .say-about-card .say-about-card-bottom .author-area .author-img {
  height: 75px;
  width: 75px;
  border-radius: 50%;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
}
.say-about-section .say-about-wrapper .say-about-card .say-about-card-bottom .author-area .author-img img {
  height: 65px;
  width: 65px;
  border-radius: 50%;
}
.say-about-section .say-about-wrapper .say-about-card .say-about-card-bottom .author h5 {
  color: var(--primary-color1);
  font-size: 21px;
  font-family: var(--font-Jost);
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0.42px;
  margin-bottom: 10px;
}
.say-about-section .say-about-wrapper .say-about-card .say-about-card-bottom .author p {
  color:#000;
  font-size: 15px;
  font-family: var(--font-Jost);
  line-height: 1;
  margin-bottom: 0;
}
.say-about-section .say-about-wrapper .swiper-pagination2 {
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
}
.say-about-section .say-about-wrapper .swiper-pagination2 .swiper-pagination-bullet {
  width: 13px;
  height: 13px;
  border: 1px solid var(--back-color);
  background-color: transparent;
  opacity: 1;
  margin: 0;
}
.say-about-section .say-about-wrapper .swiper-pagination2 .swiper-pagination-bullet.swiper-pagination-bullet-active {
  background: var(--back-color);
  margin: 0;
}
</style>