<template>
    <v-container>
        <h1 class="mt-15 pa-3">{{anime.titlerussian}}</h1>
        <h3 class="pl-3 mb-3">{{anime.titlejapanese}}</h3>
            <v-row no-gutters>
                <v-col lg="3" md="3" sm="4" xs="12">
                    <img contain :src="`../../../src/assets/${anime.posterUrl}`" width="200px" height="300px" class="ma-3"> 
                </v-col>
                <v-col>  
                    <v-card-subtitle></v-card-subtitle>
                    <v-chip class="ma-2" v-for="genre in anime.genres" :key="genre.idG">{{genre.genreName}}</v-chip>
                    <p>{{anime.season}}</p>
                    <h2 class="mt-3">Описание</h2>
                    <p>{{anime.about}}</p>
                </v-col>
            </v-row>
    </v-container>
</template>

<script>
import sourceData from '../static/data.json'

export default {
    props:{
      id: {type: Number, required: true},
      animeSlug: {type: String, required: true}
  },
  computed:{
    filterAnime(){
      return sourceData.filterAnimes.find(
        filterAnime => filterAnime.id === this.id
      )
    },
    anime(){
      return this.filterAnime.animes.find(
        anime=> anime.slug === this.animeSlug
      )
    }
  }
}
</script>
