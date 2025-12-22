<script setup>  
</script>

<template>
  <v-layout>
    <TheNavigation />
    <router-view v-slot="{Component}">
      <transition  name="fade" mode="out-in">
          <component :is="Component" :key="$route.path"></component>
      </transition>
      </router-view>
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

<style lang="css">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>