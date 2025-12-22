import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import sourceData from '../static/data.json';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('../views/NotFound.vue')
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
    props: route=> ({...route.params, id: parseInt(route.params.id)}),
    beforeEnter(to, from) {
      const exists = sourceData.filterAnimes.find(
        animes => animes.id ===parseInt(to.params.id)
      )
      if(!exists) return {
        name: '404',
        params: {pathMatch: to.path.split('/').slice(1)},
        query: to.query,
        hash: to.hash
      }
      
    }
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
  routes,
  scrollBehavior (to, from, savedPosition){
    return savedPosition || new Promise ((resolve)=>{
      setTimeout(()=>resolve({ top:0, behavior: 'smooth' }), 300)
    })
    
  }
})

export default router