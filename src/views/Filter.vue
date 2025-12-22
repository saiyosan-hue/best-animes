<template>
    <v-container>
    <h1 class="mt-15 pa-3 text-pink">{{filterAnime.name}}</h1>
    <v-row  class="fill-height">
      <v-col  v-for="anime in filterAnime.animes" :key="anime.slug" lg="4" md="6" sm="12" xs="12">
        <v-card>
          <v-row no-gutters>
            <v-col xs="12">
          <img contain :src="`../src/assets/${anime.posterUrl}`" width="200px" height="300px" class="ma-3"> 
            </v-col>
            <v-col>
          <router-link class="text-decoration-none"
          :to="{name: 'anime.show', params: {animeSlug: anime.slug}}"
          >
          <v-card-title class="text-pink" >{{anime.titlerussian}}</v-card-title>
        </router-link>  
          <v-card-subtitle>{{anime.titlejapanese}}</v-card-subtitle>
            <v-chip class="ma-2" v-for="genre in anime.genres" :key="genre.idG">{{genre.genreName}}</v-chip>
          <v-card-text>{{anime.season}}</v-card-text>
            </v-col>
            </v-row>  
          <v-expansion-panels>
            <v-expansion-panel>
                <v-expansion-panel-title>
                    Описание
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    {{anime.about}}
                </v-expansion-panel-text>
            </v-expansion-panel>
            </v-expansion-panels>
        </v-card>
      </v-col>
      </v-row>
    </v-container>  
</template>

<script>
    import sourceData from '../static/data.json'

export default {
    props: {
       id: {type: Number, required: true} 
    },
    computed: {
        filterAnime () {
            return sourceData.filterAnimes.find(filterAnime => filterAnime.id === this.id);
        }
    }
}
</script>

<style>
  .animelink {

  }
</style>