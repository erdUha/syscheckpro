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
	transition: 0.9s cubic-bezier(0.250, 0.460, 0.450, 0.940);
	opacity: 0;
	transform: translateY(-40px) scale(1.2);
}
.fade-show {
	opacity: 1;
	transform: translateY(0px) scale(1);
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
	})
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
