<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      round: 1,
      playerRound: 1,
      message: '',
      winner: 0,
      positions: [
        {
            position: 1,
            player: 0,
        },
        {
            position: 2,
            player: 0,
        },
        {
            position: 3,
            player: 0,
        },
        {
            position: 4,
            player: 0,
        },
        {
            position: 5,
            player: 0,
        },
        {
            position: 6,
            player: 0,
        },
        {
            position: 7,
            player: 0,
        },
        {
            position: 8,
            player: 0,
        },
        {
            position: 9,
            player: 0,
        },
      ],
      box1P1: false,
      box1P2: false,
    }
  },
  methods: {
    newRound(positionSelected: Number) {
        this.box1P1 = !this.box1P1;
        if (this.round < 10 && this.winner == 0) {
            let positionToHandle = this.positions.find(element => element.position == positionSelected);

            if (positionToHandle?.player == 0) {
                positionToHandle.player = this.playerRound;
                if (this.round % 2 == 0) {
                    this.box1P2 = !this.box1P2;
                    this.playerRound = 1;
                } else {
                    this.box1P1 = !this.box1P1;
                    this.playerRound = 2;
                }
                this.round++;
                this.message = '';
                this.checkWinner();
            } else {
                this.message = 'Always selected';
            }

        }
    },
    checkWinner() {
        for (let i = 1; i <= 2; i++) {
            if (this.positions[0].player == i && this.positions[1].player == i && this.positions[2].player == i) {
                this.winner = i;
                this.message = `Player ${i} won`;
            }
            if (this.positions[3].player == i && this.positions[4].player == i && this.positions[5].player == i) {
                this.winner = i;
                this.message = `Player ${i} won`;
            }
            if (this.positions[6].player == i && this.positions[7].player == i && this.positions[8].player == i) {
                this.winner = i;
                this.message = `Player ${i} won`;
            }
            if (this.positions[0].player == i && this.positions[3].player == i && this.positions[6].player == i) {
                this.winner = i;
                this.message = `Player ${i} won`;
            }
            if (this.positions[1].player == i && this.positions[4].player == i && this.positions[7].player == i) {
                this.winner = i;
                this.message = `Player ${i} won`;
            }
            if (this.positions[2].player == i && this.positions[5].player == i && this.positions[8].player == i) {
                this.winner = i;
                this.message = `Player ${i} won`;
            }
            if (this.positions[0].player == i && this.positions[4].player == i && this.positions[8].player == i) {
                this.winner = i;
                this.message = `Player ${i} won`;
            }
            if (this.positions[2].player == i && this.positions[4].player == i && this.positions[6].player == i) {
                this.winner = i;
                this.message = `Player ${i} won`;
            }
        }
    }
  },
})
</script>

<template>
  <div v-if="round < 10 && winner == 0">
    Round #{{ round }}
    <p :class="'player' + playerRound">Player {{ playerRound }}</p>
  </div>
  <p v-if="message">{{ message }}</p>
  <div class="morpion">
    <div @click="newRound(1)" :class="{ player1: box1P1, player2: box1P2 }"></div>
    <div @click="newRound(2)" id="box2"></div>
    <div @click="newRound(3)" id="box3"></div>
    <div @click="newRound(4)" id="box4"></div>
    <div @click="newRound(5)" id="box5"></div>
    <div @click="newRound(6)" id="box6"></div>
    <div @click="newRound(7)" id="box7"></div>
    <div @click="newRound(8)" id="box8"></div>
    <div @click="newRound(9)" id="box9"></div>
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