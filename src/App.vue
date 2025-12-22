<script setup>
    import { ref, watch } from 'vue'

  const items = [
    {
      title: 'TV',
      value: '#tv',
    },
    {
      title: 'Фильмы',
      value: '#films',
    },
    {
      title: 'Полезные ссылки',
      value: '#links',
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
      <v-img 
        max-height="50px" 
        max-width="100px" 
        src="./assets/anime-icon.png"
      ></v-img>
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
    <v-list><v-list-item v-for="item in items" link :href="item.value"><v-list-title>{{ item.title }}</v-list-title></v-list-item></v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center">
      <v-container>
        <h2 class="mt-5 pa-3" id="tv">Аниме-сериалы</h2>
        <v-row  class="fill-height"><AnimeCard /></v-row>
        <h2 class="mt-15 pa-3" id="films">Аниме-фильмы</h2>
        <v-row  class="fill-height"><AnimeFilmCard /></v-row>
        <h2 class="mt-15 pa-3" id="links">Полезные ссылки</h2>
        <v-layout class="mb-15"><UsefulLinks /></v-layout>
      </v-container>
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