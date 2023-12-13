<script setup>
</script>

<template>
	<NavBar />
	<div id="router-wrapper">
		<router-view id="router" v-slot="{ Component, route }">
			<transition :name="route.meta.transition || 'slide-right'">
				<component :is="Component" />
			</transition>
		</router-view>
	</div>
</template>

<style lang="sass" src="./styles/style.sass"></style>
<style src="./styles/transitions.css"></style>

<style>
html, body {
	padding: 0; margin: 0;
}
#page-two {
	background-color: yellow;
}
#page-one {
	background-color: cyan;
}
.pages {
	padding-top: 50px;
	width: 100%;
	height: 100vh;
}
#router {
}
#router-wrapper {
	display: grid; /* Для того, чтобы при анимации, 2 состояния роутера были на одном и том-же месте */
	grid-template-areas: "stack";
}
#router-wrapper > * {
	grid-area: stack;
}
#app {
	position: relative;
	overflow: hidden;
	width: 100%; 
}
</style>

<script>
import NavBar from './components/NavBar.vue'
import { onMounted } from 'vue'
export default {
  name: 'App',
  components: {
		NavBar,
  }
}
</script>
