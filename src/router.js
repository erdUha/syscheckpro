// Роутер для навигации между страничками. Не влияет на NavBar

import { createRouter, createWebHistory } from 'vue-router'
import PageOne from './components/Pages/PageOne.vue'
import PageTwo from './components/Pages/PageTwo.vue'
import Test from './components/Pages/test.vue'


console.log(window.location.href);
export const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: PageOne,
			meta: { transition: 'fade' },
		},
		{
			path: '/about',
			name: 'about',
			component: PageTwo,
			meta: { transition: 'fade' },
		},
		{
			path: '/test',
			name: 'test',
			component: Test,
			meta: { transition: 'fade' },
		}
	]
})
