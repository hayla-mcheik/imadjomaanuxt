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
                                <img src="/assets/images/contact-info-image.jpg" alt="">
                            </figure>
                        </div>
                        <!-- Contact Info Image End -->

                        <!-- Contact Info Box Start -->
                        <div class="contact-info-box">
                            <!-- Contact Info List Start -->
                            <div class="contact-info-list wow fadeInUp">
                                <!-- Contact Info List Item Start -->
                                <div class="contact-info-list-item">
                                    <div class="icon-box">
                                        <img src="images/icon-phone.svg" alt="">
                                    </div>
                                    <div class="contact-info-title">
                                        <h3><a to="tel:+123456789">+123 456 789</a></h3>
                                    </div>
                                </div>
                                <!-- Contact Info List Item End -->
                                
                                <!-- Contact Info List Item Start -->
                                <div class="contact-info-list-item">
                                    <div class="icon-box">
                                        <img src="images/icon-mail.svg" alt="">
                                    </div>
                                    <div class="contact-info-title">
                                        <h3><a to="#">infodomain@gmail.com</a></h3>
                                    </div>
                                </div>
                                <!-- Contact Info List Item End -->
                                
                                <!-- Contact Info List Item Start -->
                                <div class="contact-info-list-item">
                                    <div class="icon-box">
                                        <img src="images/icon-location.svg" alt="">
                                    </div>
                                    <div class="contact-info-title">
                                        <h3>123 Creative Lane, SW1 1AA UK</h3>
                                    </div>
                                </div>
                                <!-- Contact Info List Item End -->
                            </div>
                            <!-- Contact Info List End -->

                            <!-- Contact Social List Start -->
                            <div class="contact-social-list wow fadeInUp" data-wow-delay="0.2s">
                                <ul>
                                    <li><a to="#"><i class="fa-brands fa-pinterest-p"></i></a></li>
                                    <li><a to="#"><i class="fa-brands fa-x-twitter"></i></a></li>
                                    <li><a to="#"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a to="#"><i class="fa-brands fa-instagram"></i></a></li>
                                </ul>
                            </div>
                            <!-- Contact Social List End -->
                        </div>
                        <!-- Contact Info Box End -->
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
                            <form id="contactForm" action="#" method="POST" data-toggle="validator" class="wow fadeInUp" data-wow-delay="0.4s">
                                <div class="row">                                
                                    <div class="form-group col-md-6 mb-4">
                                        <input type="text" name="fname" class="form-control" id="fname" placeholder="First name" required="">
                                        <div class="help-block with-errors"></div>
                                    </div>
    
                                    <div class="form-group col-md-6 mb-4">
                                        <input type="text" name="lname" class="form-control" id="lname" placeholder="Last name" required="">
                                        <div class="help-block with-errors"></div>
                                    </div>
    
                                    <div class="form-group col-md-12 mb-4">
                                        <input type="text" name="phone" class="form-control" id="phone" placeholder="Enter your mobile no." required="">
                                        <div class="help-block with-errors"></div>
                                    </div>
    
                                    <div class="form-group col-md-12 mb-4">
                                        <input type="email" name="email" class="form-control" id="email" placeholder="Enter your e-mail" required="">
                                        <div class="help-block with-errors"></div>
                                    </div>
    
                                    <div class="form-group col-md-12 mb-5">
                                        <textarea name="message" class="form-control" id="message" rows="4" placeholder="Write message..."></textarea>
                                        <div class="help-block with-errors"></div>
                                    </div>
    
                                    <div class="col-md-12">
                                        <button type="submit" class="btn-default"><span>send message</span></button>
                                        <div id="msgSubmit" class="h3 hidden"></div>
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

    <!-- Google Map Section Start -->
    <div class="google-map">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <!-- Google Map IFrame Start -->
                    <div class="google-map-iframe">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96737.10562045308!2d-74.08535042841811!3d40.739265258395164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1703158537552!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <!-- Google Map IFrame End -->
                </div>
            </div>
        </div>
    </div>
    <!-- Google Map Section End -->

</template>

<script setup>

</script>

<style scoped>
.contact-info-image figure {
    visibility: visible;
}
</style>