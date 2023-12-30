<template>
	<div>
		<div id="main-articles">
			<div class="article-item">
				<router-link class="article-item-link" to="first-nodejs">Схемотехника</router-link>
			</div>
		</div>
	</div>
</template>

<style scoped>
.article-item-link {
}
.article-item *:hover {
	text-decoration: none;
}
.article-item * {
	color: #000;
	text-decoration: underline;
	font-size: 1.5rem;
}
.article-item {
	margin-top: 4rem;
}
</style>

<script>
export default {
	name: 'MainArticles',
}
</script>
