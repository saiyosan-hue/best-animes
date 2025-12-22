<script setup>
    import { ref, watch } from 'vue'

  const items = [
    {
      title: 'Главная',
      value: '/',
    },  
    {
      title: 'TV',
      value: 'tv',
    },
    {
      title: 'Фильмы',
      value: 'films',
    },
    {
      title: 'Полезные ссылки',
      value: 'useful-links',
    }
  ]

  const drawer = ref(false)
  const group = ref(null)

  watch(group, () => {
    drawer.value = false
  })

</script>

<template>
  
  <v-layout class="rounded rounded-md border">
    <v-app-bar :elevation="2">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <router-link to="/">
        <img style="max-width: 50px; max-height: 100px;" src="./assets/anime-icon.png" class="ml-5">
      </router-link>
      <v-app-bar-title>Самое годное аниме 
        <v-tooltip text="По скромному мнению разработчика">
          <template v-slot:activator="{ props }">
            <span v-bind="props">*</span>
          </template>
          </v-tooltip>
        </v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'bottom' : undefined"
        temporary
      >
    <v-list><v-list-item v-for="item in items" router-link :to="item.value" :key="item.title"><v-list-title>{{ item.title }}</v-list-title></v-list-item></v-list>
    </v-navigation-drawer>
      <router-view></router-view>
    <v-main class="d-flex align-center justify-center">
    </v-main>
  </v-layout>
</template>

<style scoped></style>

<script>
  import AnimeCard from './components/animes.vue'
  import AnimeFilmCard from './components/animefilms.vue'
  import UsefulLinks from './components/usefullinks.vue'

  export default {
    components: {AnimeCard, AnimeFilmCard, UsefulLinks} 
  }
</script>