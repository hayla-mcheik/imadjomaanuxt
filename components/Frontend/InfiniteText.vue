<template>
    <!-- Scrolling Ticker Section Start -->
    <div class="our-scrolling-ticker">
        <!-- Scrolling Ticker Start -->
        <div class="scrolling-ticker-box">
            <div class="scrolling-content">
                <span><img src="/assets/images/promomedia-logo-black.png" alt=""></span>
                <span><img src="/assets/images/Amazon ADS.png" alt=""></span>
                <span><img src="/assets/images/promomedia-logo-black.png" alt=""></span>
                <span><img src="/assets/images/promomedia-logo-black.png" alt=""></span>
                <span><img src="/assets/images/promomedia-logo-black.png" alt=""></span>
                <span><img src="/assets/images/promomedia-logo-black.png" alt=""></span>
                <span><img src="/assets/images/promomedia-logo-black.png" alt=""></span>
                <span><img src="/assets/images/promomedia-logo-black.png" alt=""></span>
                <span><img src="/assets/images/promomedia-logo-black.png" alt=""></span>
                <span><img src="/assets/images/promomedia-logo-black.png" alt=""></span>
</div>
            <div class="scrolling-content">
                         <span><img src="/assets/images/promomedia-logo-black.png" alt=""></span>
                <span><img src="/assets/images/promomedia-logo-black.png" alt=""></span>
                <span><img src="/assets/images/promomedia-logo-black.png" alt=""></span>
                <span><img src="/assets/images/promomedia-logo-black.png" alt=""></span>
                <span><img src="/assets/images/promomedia-logo-black.png" alt=""></span>
                <span><img src="/assets/images/promomedia-logo-black.png" alt=""></span>
                <span><img src="/assets/images/promomedia-logo-black.png" alt=""></span>
                <span><img src="/assets/images/promomedia-logo-black.png" alt=""></span>
                <span><img src="/assets/images/promomedia-logo-black.png" alt=""></span>
                <span><img src="/assets/images/promomedia-logo-black.png" alt=""></span>
            </div>
        </div>
        <!-- Scrolling Ticker End -->
    </div>
    <!-- Scrolling Ticker Section End -->
</template>

<script setup>

</script>

<style scoped>

.our-scrolling-ticker{
	background-color: var(--white-color);
	padding: 26px 0;
}

.scrolling-ticker-box{
	--gap: 40px;
	position: relative;
	display: flex;
	overflow: hidden;
	user-select: none;
	gap: var(--gap);
	align-items: center;
}

.scrolling-content{
	flex-shrink: 0;
	display: flex;
	gap: var(--gap);
	min-width: 100%;
	animation: scroll 40s linear infinite;
}

.scrolling-content span{
	display: inline-block;
	font-size: 40px;
	font-weight: 700;
	line-height: 1.2em;
	color: var(--dark-color);
	vertical-align: middle;
}

.scrolling-content span img{
	width: 100%;
	max-width: 100px;
	margin-right: 40px;
}

@keyframes scroll{
	from{
		transform: translateX(0);
	}

	to{
		transform: translateX(calc(-100% - var(--gap)));
	}
}
</style>