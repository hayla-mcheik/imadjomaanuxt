<template>
   <!-- page Book Appointment Start -->
    <div class="page-book-appointment">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <!-- Our Appointment Content Start -->
                    <div class="our-appointment-content">
                        <!-- Section Title Start -->
                        <div class="section-title">
                            <h3 class="wow fadeInUp">appointment</h3>
                            <h2 class="text-anime-style-3" data-cursor="-opaque">Make an appointment</h2>
                        </div>
                        <!-- Section Title End -->

                        <!-- Appointment Content Body Start -->
                        <div class="appointment-content-body">
                            <!-- Appointment Item Start -->
                            <div class="appointment-item wow fadeInUp" data-wow-delay="0.2s">
                                <div class="icon-box">
                               
                                </div>
                                <div class="appointment-item-content">
                                    <h3>Customer Services</h3>
                                    <p><a to="tel:+96170003161">+96170003161</a></p>
                                </div>
                            </div>
                            <!-- Appointment Item End -->

                            <!-- Appointment Item Start -->
                            <div class="appointment-item wow fadeInUp" data-wow-delay="0.4s">
                                <div class="icon-box">
                                  
                                </div>
                                <div class="appointment-item-content">
                                    <h3>Opening Hours</h3>
                                    <p>Mon - Sat ( 09:00 - 21:00 )</p>
                                    <p>Sunday Closed</p>
                                </div>
                            </div>
                            <!-- Appointment Item End -->
                        </div>
                        <!-- Appointment Content Body End -->
                    </div>
                    <!-- Our Appointment Content End -->
                </div>

                <div class="col-lg-6">
                    <!-- Appointment Form Start -->
                    <div class="appointment-form">
                        <!-- Contact Us Form Start -->
                        <form id="appointmentForm" action="#" method="POST" data-toggle="validator" class="wow fadeInUp">
                            <div class="row">
                                <div class="form-group col-md-6 mb-4">
                                    <input type="text" name="fname" class="form-control" id="fname" placeholder="First Name" required="">
                                    <div class="help-block with-errors"></div>
                                </div>

                                <div class="form-group col-md-6 mb-4">
                                    <input type="text" name="lname" class="form-control" id="lname" placeholder="Last Name" required="">
                                    <div class="help-block with-errors"></div>
                                </div>

                                <div class="form-group col-md-12 mb-4">
                                    <input type="email" name="email" class="form-control" id="email" placeholder="Email Address" required="">
                                    <div class="help-block with-errors"></div>
                                </div>
                                
                                <div class="form-group col-md-12 mb-4">
                                    <input type="text" name="phone" class="form-control" id="phone" placeholder="Phone Number" required="">
                                    <div class="help-block with-errors"></div>
                                </div>

                                <div class="form-group col-md-6 mb-4">
                                    <select name="doctor" class="form-control form-select" id="doctor" required="">
                                        <option value="" disabled="" selected="">Choose Doctor</option>
                                        <option value="beginner_yoga_classes">Dr. Mouhammad Obeid</option>
                          
                                    </select>
                                    <div class="help-block with-errors"></div>
                                </div>

                                <div class="form-group col-md-6 mb-5">
                                    <input type="date" name="date" class="form-control" id="date" required="">
                                    <div class="help-block with-errors"></div>
                                </div>

                                <div class="col-lg-12">
                                    <div class="contact-form-btn">
                                        <button type="submit" class="btn-default">book an appointment</button>
                                        <div id="msgSubmit" class="h3 hidden"></div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <!-- Contact Us Form End -->
                    </div>
                    <!-- Appointment Form Start -->
                </div>
            </div>
        </div>
    </div>
    <!-- page Book Appointment End -->
</template>

<script setup>

</script>

<style scoped>

</style>