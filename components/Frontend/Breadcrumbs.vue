<template>
    <!-- Page Header Start -->
    <div class="page-header bg-section dark-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="page-header-box">
                        <h1 class="text-anime-style-3" data-cursor="-opaque">Breadcrumbs</h1>
                        <nav class="wow fadeInUp">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <NuxtLink to="/">Home</NuxtLink>
                                </li>
                                <!-- <li 
                                    v-for="(crumb, index) in breadcrumbs" 
                                    :key="index"
                                    class="breadcrumb-item"
                                    :class="{ 'active': index === breadcrumbs.length - 1 }"
                                    aria-current="page"
                                >
                                    <NuxtLink v-if="index !== breadcrumbs.length - 1" :to="crumb.path">/ {{ crumb.title }}</NuxtLink>
                                    <span v-else>{{ crumb.title }}</span>
                                </li> -->
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// import { computed } from 'vue';
// import { usePage } from '@inertiajs/vue3';

// const page = usePage();

// // Get page title from controller
// const pageTitle = computed(() => {
//     return page.props.title || 'Our Page';
// });

// // Generate breadcrumbs based on route
// const breadcrumbs = computed(() => {
//     const pathArray = page.url.split('/').filter(item => item);
//     const breadcrumbs = [];
//     let accumulatedPath = '';

//     // Start from index 1 to skip the first empty string
//     pathArray.forEach((segment, index) => {
//         accumulatedPath += `/${segment}`;
        
//         // Only add breadcrumb for the current page
//         if (index === pathArray.length - 1) {
//             breadcrumbs.push({
//                 title: pageTitle.value,
//                 path: accumulatedPath
//             });
//         }
//     });

//     return breadcrumbs;
// });
</script>