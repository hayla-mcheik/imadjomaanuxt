<template>
    <!-- Scrolling Ticker Section Start -->
    <div class="our-scrolling-ticker">
        <!-- Scrolling Ticker Start -->
        <div class="scrolling-ticker-box">
            <div class="scrolling-content">
                <span><img src="/assets/images/loggoone.png" alt=""></span>
                <span><img src="/assets/images/loggotwo.png" alt=""></span>
                <span><img src="/assets/images/loggofour.png" alt=""></span>
                <span><img src="/assets/images/loggofive.png" alt=""></span>
                <span><img src="/assets/images/loggosix.png" alt=""></span>
				                <span><img src="/assets/images/loggoone.png" alt=""></span>
                <span><img src="/assets/images/loggotwo.png" alt=""></span>
</div>
            <div class="scrolling-content">
				                <span><img src="/assets/images/loggoone.png" alt=""></span>
                <span><img src="/assets/images/loggotwo.png" alt=""></span>
              <span><img src="/assets/images/loggoone.png" alt=""></span>
                <span><img src="/assets/images/loggotwo.png" alt=""></span>
                <span><img src="/assets/images/loggofour.png" alt=""></span>
                <span><img src="/assets/images/loggofive.png" alt=""></span>
                <span><img src="/assets/images/loggosix.png" alt=""></span>
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
	background-color: var(--black-color);
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
	justify-content: center;
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
	margin: auto;
}

.scrolling-content span img{
	width: 100%;
	max-width: 80px;
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