<template>
         <!-- <div class="footer-contact-btn">
                            <NuxtLink to="" class="btn-default">Chat on Whatsapp</NuxtLink> 
                        </div> -->
    <!-- Footer Start -->
    <footer class="main-footer pl-md-250px">

        <!-- Footer Main Start -->
		<div class="footer-main">
			<div class="container max-w-8xl">
				<div class="row">
          
                    <div class="col-lg-12">
                        <!-- Footer CTA Box Start -->
                        <div class="footer-cta-box">
                            <!-- Footer Newsletter Form Start -->
                            <div class="footer-newsletter-form">
                                <h3>Subscribe our newsletter:</h3>
                                <form id="newslettersForm" action="#" method="POST">
                                    <div class="form-group">
                                        <input type="email" name="mail" class="form-control" id="mail" placeholder="Enter Email" required="">
                                        <button type="submit" class="btn-highlighted">subscribe</button>
                                    </div>
                                </form>
                            </div>
                            <!-- Footer Newsletter Form End -->

                            <!-- Footer Social Links Start -->
                            <div class="footer-social-links">
                                <span>Follow on: </span>
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
                            <!-- Footer Social Links End -->
                        </div>
                        <!-- Footer CTA Box End -->
                    </div>

                    <div class="col-lg-12">
                        <!-- Footer Copyright Text Start -->
                        <div class="footer-copyright-text">
                            <p>Copyright © 2025 All Rights Reserved.</p>
                        </div>
                        <!-- Footer Copyright Text End -->
                    </div>
				</div>
			</div>
		</div>
		<!-- Footer Main End -->
    </footer>
    <!-- Footer End -->

</template>

<script setup>

</script>

<style scoped>
.footer-contact-btn{
    position: fixed;
    bottom: 1%;
    right:0%;
    z-index: 999;
}
.max-w-8xl{
    max-width: 90%;
}
.social-icons a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: #fff;
  transition: all 0.3s ease;
}

</style>