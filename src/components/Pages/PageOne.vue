<script setup>
</script>

<template>
	<div>
		<div class="pages" id="page-one">
			<div data-aos="zoom-out-down">
				<h1>Главная страничка</h1>
			</div>
			<div id="bruh" class="fade-hidden">
				<h2>This is animated</h2>
			</div>
		</div>
	</div>
</template>

<style scoped>
#bruh {
	position: relative;
	color: #000;
	top: 1000px;
}
@media only screen and (max-width: 768px) {
	h1 {
		color: red;
	}
}
</style>

<script>
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry)
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
		} else {
			entry.target.classList.remove('show');
		}
	})
})
const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))
export default {
	name: "PageOne",
}
</script>
