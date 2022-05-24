import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Intro from '../views/Intro.vue'

const routes = [
	{
		path: '/',
		name: 'Intro',
		component: Intro
	},
	{
		path: '/participation',
		name: 'Main',
		component: Main
	},
]

const router = createRouter({
	history: createWebHistory('/'),
	routes
})

export default router
