<script>
  export default {
    name: "UsefulLinks",
    data: () => ({
      usefulLinks: [
        {
          id: 0,
          logo: 'world-art.jpg',
          name: 'World-art',
          websiteurl: 'https://world-art.ru/animation/',
          description: 'Сайт, где можно посмотреть будущие новинки (и трейлеры, если есть выход на ютуб), очередность сезонов, сейю и прочую инфу. Там же можно вести списки просмотренного, они достаточно удобные.'
        },
        {
          id: 1,
          logo: 'animejoy.jpg',
          name: 'Animejoya',
          websiteurl: 'https://animejoya.ru/',
          description: 'Бедняги постоянно переезжают, так что ссылки долго не держатся. А все потому, что ркн не любит, когда люди смотрят японские мультики. Меж тем там для зарегистрированных просто рай, столько всего на посмотреть и с субтитрами, а не с богомерзкой озвучкой! А за маленький донат можно отключить рекламу на сайте и в их плеере.'
        },
        {
          id: 2,
          logo: 'shikimori.jpg',
          name: 'Shikimori',
          websiteurl: 'https://shikimori.one/',
          description: 'Тоже в общем-то большая база по аниме с обзорами, комментариями, списками персонажей и прочей информацией.'
        }
      ]
    })
  }
</script>

<template>
    <v-card v-for="link in usefulLinks" link :href="link.websiteurl" target="_blank" :key="link.id" class="ma-3">
        <v-avatar size="36px" class="ma-3">
            <img contain :src="`../assets/${link.logo}`" alt="Logo">
        </v-avatar>
        <v-card-title>{{ link.name }}</v-card-title>
        <v-card-text>{{link.description}}</v-card-text>
    </v-card>
</template>