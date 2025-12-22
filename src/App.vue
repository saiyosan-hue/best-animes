<script setup>  
</script>

<template>
  <v-layout>
    <TheNavigation />
      <router-view></router-view>
    <v-main class="d-flex align-center justify-center">
    </v-main>
  </v-layout>
</template>

<style scoped></style>

<script>
  import TheNavigation from './components/TheNavigation.vue'

  export default {
    components: {TheNavigation} 
  }
</script>