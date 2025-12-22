import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/useful-links',
    name: 'Полезные ссылки',
    // Ленивая загрузка компонента
    component: () => import('../views/UsefulLinks.vue')
  },
  {
    path: '/:id/:slug',
    name: 'filterAnime.show',
    component: () => import('../views/Filter.vue'),
    props: route=> ({...route.params, id: parseInt(route.params.id)})
  },
  {
    path: '/:id/:slug/:animeSlug',
    name: 'anime.show',
    component: () => import('../views/OneTitle.vue'),
    props:  route=> ({...route.params, id: parseInt(route.params.id)})
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router