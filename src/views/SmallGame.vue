<template>
	<v-container d-flex justify-center>
	<v-container class="mt-15 text-center" max-width="850px">
    <p>А&nbsp;это маленькая игра на&nbsp;запоминание, старая-добрая «переверни карточку». Вставлена, потому что нужно изучать слоты. Ну&nbsp;и&nbsp;еще потому что мне нравятся такие игры. Картинок пока мало, но&nbsp;это наживное, главное&nbsp;— снова сесть рисовать когда-нибудь.</p>
    <!-- Controls & Feedback -->
    <v-row justify="center" class="ma-4">
      <v-btn 
        :color="gameStarted ? 'pink-lighten-4' : 'pink-lighten-3'" 
        size="large" 
        @click="startGame"
      >
        {{ gameStarted ? 'Играть заново' : 'Играть' }}
      </v-btn>
    </v-row>
    <v-row justify="center" class="ma-4">
      <transition name="fade">
        <div v-if="isGameWon">
          <span class="text-h4 text-success font-weight-bold">You win!</span>
        </div>
      </transition>
    </v-row>

    <!-- Game Board: Only visible when started and not yet won -->
    <v-row v-if="gameStarted && !isGameWon">
      <v-col v-for="(card, index) in cards" :key="index" lg="3" sm="2">
        <MemoryCard 
          :is-flipped="flippedCards.includes(index)"
          :is-matched="card.matched"
          @flip="flipCard(index)"
        >
          <template #front>
            <v-card width="200px" height="200px" class="pa-2">
              <v-img :src="card.img" width="180px" height="180px" contain></v-img>
            </v-card>
          </template>
        </MemoryCard>
      </v-col>
    </v-row>
    
    <!-- Placeholder when board is hidden -->
    <v-row v-else-if="!gameStarted" justify="center" class="mt-10">
      <p class="text-grey">Нажмите на кнопку, чтобы поиграть</p>    </v-row>
  </v-container>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue';
import MemoryCard from '../components/Card.vue';

const images = [
  '../src/assets/game/dragon1.png',
  '../src/assets/game/dragon2.png',
  '../src/assets/game/dragon3.png',
  '../src/assets/game/dragon4.png'
];

const cards = ref([]);
const flippedCards = ref([]);
const lockBoard = ref(false);
const gameStarted = ref(false);

const isGameWon = computed(() => {
  return gameStarted.value && cards.value.length > 0 && cards.value.every(card => card.matched);
});

const startGame = () => {
  const deck = [...images, ...images]
    .sort(() => Math.random() - 0.5)
    .map(img => ({ img, matched: false }));
  
  cards.value = deck;
  flippedCards.value = [];
  gameStarted.value = true;
};

const flipCard = (index) => {
  if (lockBoard.value || flippedCards.value.includes(index)) return;
  
  flippedCards.value.push(index);
  if (flippedCards.value.length === 2) checkMatch();
};

const checkMatch = () => {
  lockBoard.value = true;
  const [idx1, idx2] = flippedCards.value;

  if (cards.value[idx1].img === cards.value[idx2].img) {
    cards.value[idx1].matched = true;
    cards.value[idx2].matched = true;
    resetSelection();
  } else {
    setTimeout(() => resetSelection(), 1000);
  }
};

const resetSelection = () => {
  flippedCards.value = [];
  lockBoard.value = false;
};
</script>

<style scoped>.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>