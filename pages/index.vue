<template>
<HeroSlider />
<InfiniteText />
<AboutNew />
<MilestoneTest />
  <Projects />
  <Brand />
    <!-- <Milestone /> -->
<Events />
<News /> 
<Map />
</template>

<script setup>
import About from '~/components/Frontend/About.vue';
import AboutNew from '~/components/Frontend/AboutNew.vue';
import Brand from '~/components/Frontend/Brand.vue';
import Events from '~/components/Frontend/Events.vue';
import HeroSlider from '~/components/Frontend/HeroSlider.vue';
import InfiniteText from '~/components/Frontend/InfiniteText.vue';
import Map from '~/components/Frontend/Map.vue';
import Milestone from '~/components/Frontend/Milestone.vue';
import MilestoneTest from '~/components/Frontend/MilestoneTest.vue';
import News from '~/components/Frontend/News.vue';
import Projects from '~/components/Frontend/Projects.vue';

useHead({
    title: 'Home Page'
});
definePageMeta({
  layout: 'default' 
});

</script>

