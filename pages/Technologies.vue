<template>
<div class="">
 <Brand />
</div>
</template>

<script setup>
import Brand from '~/components/Frontend/Brand.vue';
import Breadcrumbs from '~/components/Frontend/Breadcrumbs.vue';

useHead({
    title: 'Home Page'
});
definePageMeta({
  layout: 'default' 
});

</script>

