<template>
<div class="">
  <NewsPage />
</div>


</template>

<script setup>
import Breadcrumbs from '~/components/Frontend/Breadcrumbs.vue';
import News from '~/components/Frontend/News.vue';
import NewsPage from '~/components/Frontend/NewsPage.vue';

useHead({
    title: 'Home Page'
});
definePageMeta({
  layout: 'default' 
});

</script>

