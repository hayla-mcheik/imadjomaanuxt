<template>
<Breadcrumbs />
  <!-- <Contact /> -->

</template>

<script setup>
import Breadcrumbs from '~/components/Frontend/Breadcrumbs.vue';

useHead({
    title: 'Home Page'
});
definePageMeta({
  layout: 'default' 
});

</script>

