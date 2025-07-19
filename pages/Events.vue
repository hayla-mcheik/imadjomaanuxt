<template>
<div class="">
  <EventsPage />
</div>


</template>

<script setup>
import Breadcrumbs from '~/components/Frontend/Breadcrumbs.vue';
import Events from '~/components/Frontend/Events.vue';
import EventsPage from '~/components/Frontend/EventsPage.vue';

useHead({
    title: 'Home Page'
});
definePageMeta({
  layout: 'default' 
});

</script>

