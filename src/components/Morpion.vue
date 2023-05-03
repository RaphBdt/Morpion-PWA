<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      round: 1,
      playerRound: 1
    }
  },
  methods: {
    newRound(position: Number) {
        if (this.round < 10) {
            if (this.round % 2 == 0) {
                this.playerRound = 1;
            } else {
                this.playerRound = 2;
            }

            this.round++;
            console.log(position);
        }
    }
  }
})
</script>

<template>
  <div v-if="round < 10">
    Round #{{ round }}
    <p :class="'player' + playerRound">Player {{ playerRound }}</p>
  </div>
  <div class="morpion">
    <div @click="newRound(1)"></div>
    <div @click="newRound(2)"></div>
    <div @click="newRound(3)"></div>
    <div @click="newRound(4)"></div>
    <div @click="newRound(5)"></div>
    <div @click="newRound(6)"></div>
    <div @click="newRound(7)"></div>
    <div @click="newRound(8)"></div>
    <div @click="newRound(9)"></div>
  </div>
</template>

<style scoped>
    .morpion {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }

    .morpion div {
        width: 70px;
        height: 70px;
        border: 1px solid #7C9299;
    }

    .player1, .player2 {
        color: #ffffff;
    }

    .player1 {
        background-color: #1F01B9;
    }

    .player2 {
        background-color: #FC440F;
    }
</style>
