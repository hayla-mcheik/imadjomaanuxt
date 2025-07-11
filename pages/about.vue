<template>
    <StoryPageHeader/>
    <MilestoneTest />
<AboutSection />
</template>

<script setup>
import AboutSection from '~/components/Frontend/AboutSection.vue';
import Breadcrumbs from '~/components/Frontend/Breadcrumbs.vue';
import MilestoneTest from '~/components/Frontend/MilestoneTest.vue';
import StoryPageHeader from '~/components/Frontend/StoryPageHeader.vue';

useHead({
    title: 'About Us Page'
})
</script>

<style scoped>

</style>