<template>

  <Contact />

</template>

<script setup>
import Breadcrumbs from '~/components/Frontend/Breadcrumbs.vue';
import Contact from '~/components/Frontend/Contact.vue';

useHead({
    title: 'Home Page'
});
definePageMeta({
  layout: 'default' 
});

</script>

