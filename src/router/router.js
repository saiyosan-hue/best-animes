import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/tv',
    name: 'TV',
    // Ленивая загрузка компонента
    component: () => import('../views/TV.vue')
  },
  {
    path: '/films',
    name: 'Фильмы',
    // Ленивая загрузка компонента
    component: () => import('../views/Films.vue')
  },
  {
    path: '/useful-links',
    name: 'Полезные ссылки',
    // Ленивая загрузка компонента
    component: () => import('../views/UsefulLinks.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router