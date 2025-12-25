<template>
  <div class="flip-card" @click="handleFlip">
    <div class="flip-card-inner" :class="{ 'is-flipped': isFlipped || isMatched }">
      <!-- Back of card (Visible initially) -->
      <div class="flip-card-back">
        <slot name="back">
          <v-card color="pink-lighten-4" width="200px" height="200px" class="d-flex align-center justify-center">            <v-icon size="48" color="white">mdi-help-circle</v-icon>
          </v-card>
        </slot>
      </div>
      <!-- Front of card (Hidden initially) -->
      <div class="flip-card-front">
        <slot name="front"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['isFlipped', 'isMatched']);
const emit = defineEmits(['flip']);

const handleFlip = () => {
  if (!props.isFlipped && !props.isMatched) {
    emit('flip');
  }
};
</script>

<style scoped>
.flip-card {
  perspective: 1000px;
  cursor: pointer;
  height: 200px;
}
.flip-card-inner {  position: relative;
  width: 100%;
  height: 100%;  transition: transform 0.6s;
  transform-style: preserve-3d;
}.is-flipped {
  transform: rotateY(180deg);
}
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 8px;
}
.flip-card-front {
  transform: rotateY(180deg);
}
</style>