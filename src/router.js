// Роутер для навигации между страничками. Не влияет на NavBar

import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './components/Pages/MainPage.vue'
import LogIn from './components/LogIn.vue'
import SignUp from './components/SignUp.vue'
import SupportComp from './components/SupportComp.vue'
import MainArticles from './components/Pages/Articles/MainArticles.vue'
import Shemotekhnica from './components/Pages/Articles/Shemotekhnica.vue'
import GetSupport from './components/GetSupport.vue'
import CheckCpu from './components/Pages/CheckCpu.vue'

export const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: MainPage,
			meta: { transition: 'fade-noslide' },
		},
		{
			path: '/signin',
			name: 'signin',
			component: LogIn,
			meta: { transition: 'slide-right' }
		},
		{
			path: '/signup',
			name: 'signup',
			component: SignUp, 
			meta: { transition: 'slide-left' }
		},
		{
			path: '/support',
			name: 'support',
			component: SupportComp, 
			meta: { transition: 'slide-right' }
		},
		{
			path: '/articles',
			name: 'articles',
			component: MainArticles, 
			meta: { transition: 'fade' }
		},
		{
			path: '/first-nodejs',
			name: 'First Nodejs',
			component: Shemotekhnica, 
			meta: { transition: 'slide-right' }
		},
		{
			path: '/get-support',
			name: 'get support',
			component: GetSupport, 
			meta: { transition: 'slide-right' }
		},
		{
			path: '/check-cpu',
			name: 'check cpu',
			component: CheckCpu, 
			meta: { transition: 'fade' }
		},
	]
})
