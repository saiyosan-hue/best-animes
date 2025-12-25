<script setup>
    import { ref, watch } from 'vue'
    const drawer = ref(false)
    const group = ref(null)
    watch(group, () => {
        drawer.value = false
    })
</script>

<template>
    <v-app-bar :elevation="2">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <router-link to="/">
        <img style="max-width: 50px; max-height: 100px;" src="../assets/anime-icon.png" class="ml-5">
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
        :location="$vuetify.display.mobile ? 'top' : undefined"
        temporary
      >
    <v-list>
        <v-list-item router-link to="/">
            <v-list-item-title>Главная</v-list-item-title>
        </v-list-item>
        <v-list-item v-for="filterAnime in filterAnimes" router-link :to="{name:'filterAnime.show', params:{id: filterAnime.id, slug: filterAnime.slug}}" :key="filterAnime.id">
            <v-list-item-title>{{ filterAnime.name }}</v-list-item-title>
        </v-list-item>
        <v-list-item router-link to="/useful-links">
            <v-list-item-title>Полезные ссылки</v-list-item-title>
        </v-list-item>
        <v-list-item router-link to="/small-game">
            <v-list-item-title>Мини-игра</v-list-item-title>
        </v-list-item>
    </v-list>
    </v-navigation-drawer>
</template>

<script>
import sourceData from '../static/data.json'
    export default {
        data () {
            return {
                filterAnimes: sourceData.filterAnimes
            }
        }
    }
</script>
