<template>
<Breadcrumbs />
  <News />

</template>

<script setup>
import Breadcrumbs from '~/components/Frontend/Breadcrumbs.vue';
import News from '~/components/Frontend/News.vue';

useHead({
    title: 'Home Page'
});
definePageMeta({
  layout: 'default' 
});

</script>

