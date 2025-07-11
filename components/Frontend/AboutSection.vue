<template>
     <section class="about-section py-2">
      <div class="container mx-auto px-4">
        <div class=" mt-4">
       
   <div class="row mt-5 align-items-center">
  <div class="col-md-5 col-12">
    <div class="about-mission-vision text-left">     
      <h2>Our Mission</h2>
      <p class="text-sm">To lead with foresight, invest in scalable ideas, and foster impactful partnerships that elevate industries, connect markets, and position the MENA region as a global force in media, technology, and business excellence.

Additional Statement to be used around the website.

"Challenging Limits. Creating Futures."</p>
    </div>   
  </div>

  <div class="col-md-2 d-flex justify-content-center">
    <hr class="vertical-line d-none d-md-block" />
  </div>

  <div class="col-md-5 col-12">
    <div class="about-mission-vision text-left">     
      <h2>Our Vision</h2>
      <p class="text-sm">To shape the future of the Middle East's digital economy by building globally connected, innovation-led businesses that drive sustainable growth, regional empowerment, and strategic transformation.</p>
    </div>       
  </div>
</div>

        </div>
        
      </div>
    </section>

</template>

<script setup>

</script>

<style scoped>
.about-section {
  position: relative;
  overflow: hidden;
}

.about-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px);
  background-size: 20px 20px;
  z-index: 0;
}
.vertical-line {
  width: 1px;
  height: 100px;
  background-color: #fff;
  border: none;
}

</style>