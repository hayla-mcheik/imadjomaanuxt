<template>
<Breadcrumbs />
  <Events />

</template>

<script setup>
import Breadcrumbs from '~/components/Frontend/Breadcrumbs.vue';
import Events from '~/components/Frontend/Events.vue';

useHead({
    title: 'Home Page'
});
definePageMeta({
  layout: 'default' 
});

</script>

