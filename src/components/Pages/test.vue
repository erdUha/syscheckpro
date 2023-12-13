<script setup>
</script>

<template>
	<div>
		<div id="test">
			<h3 class="fade-hidden">bruh</h3>
			<h1 class="fade-hidden">Test</h1>
		</div>
	</div>
</template>

<style scoped>
.fade-hidden {
	opacity: 0;
	transition: 0.9s ease-out;
}
.fade-show {
	opacity: 1;
}
h1 {
	position: relative;
	top: 1500px;
	color: #000;
}
#test {
	height: 3000px;
}
</style>

<script>
import { onMounted } from 'vue'

function Observe() { // Создание Intersection observerer для анимации
	const observer = new IntersectionObserver((entries) => {
		if (entries) {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('fade-show')
				} else {
					entry.target.classList.remove('fade-show')
				}
			})
		}
	}, {threshold: 1.0})
	const hiddenElements = document.querySelectorAll('.fade-hidden')
	hiddenElements.forEach((e) => {
		observer.observe(e)
	})
}
export default {
	name: "Test",
	setup() {
		onMounted(() => {
			Observe()
		})
	},
}
</script>
