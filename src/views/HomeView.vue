<script>
  
</script>

<template>
      <v-container class="ma-15">
          <v-row  justify="center" >
            <v-col lg="6" md="8" sm="12" xs="12" class="pa-4">
              <h2>Приветствую!</h2>
              <p>
                Я&nbsp;часто сталкиваюсь с&nbsp;вопросом «что посмотреть из&nbsp;аниме»&nbsp;— от&nbsp;друзей, знакомых и&nbsp;даже не&nbsp;очень знакомых людей. Оно и&nbsp;неудивительно, количество просмотренных тайтлов уже перевалило за&nbsp;тысячу, и&nbsp;даже если я&nbsp;что-то не&nbsp;смотрю, то&nbsp;все равно могу вспомнить и&nbsp;порекомендовать (это касается в&nbsp;основном ужасных ужасов с&nbsp;нездоровым уровнем жестокости&nbsp;— для этого нервы слабоваты). Но&nbsp;внутренняя база данных дырявая и&nbsp;медленная, названия и&nbsp;сюжеты периодически вываливаются из&nbsp;нее или забиваются в&nbsp;такие дальние углы, что не&nbsp;достать.
              </p>
              <p>
                Если этот учебный проект когда-нибудь увидит свет, то&nbsp;буду собирать здесь самое, на&nbsp;мой взгляд, интересное и&nbsp;качественное. С&nbsp;коротенькими обзорами, фильтрами по&nbsp;жанрам и&nbsp;годам, с&nbsp;возможностью вносить в&nbsp;списки и&nbsp;оставлять комментарии. Но&nbsp;пока это все только в&nbsp;перспективе.
              </p>
            </v-col>
            <v-col lg="3" md="4" sm="12" xs="12" class="pa-4">
              <img src="../assets/homeview-image.png" style="max-width: 250px;" class="ma-3">
            </v-col>
          </v-row>
          <v-row  justify="center">
            <v-col lg="3" md="4" sm="6" xs="12">
              <v-btn class="bg-pink-lighten-5" rounded="xl" text="Посмотреть на неделю" router-link to="/1/tv"></v-btn>
            </v-col>
            <v-col lg="3" md="4" sm="6" xs="12">
              <v-btn class="bg-pink-lighten-5" rounded="xl" text="Посмотреть на вечер" router-link to="/2/films"></v-btn>
            </v-col>
            <v-col lg="3" md="4" sm="6" xs="12">
              <v-btn class="bg-pink-lighten-5" rounded="xl" text="Найти и почитать" router-link to="/useful-links"></v-btn>
            </v-col>
          </v-row>
      </v-container>
</template>

<style scoped></style>