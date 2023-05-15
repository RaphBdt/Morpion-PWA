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
      box2P1: false,
      box2P2: false,
      box3P1: false,
      box3P2: false,
      box4P1: false,
      box4P2: false,
      box5P1: false,
      box5P2: false,
      box6P1: false,
      box6P2: false,
      box7P1: false,
      box7P2: false,
      box8P1: false,
      box8P2: false,
      box9P1: false,
      box9P2: false,
    }
  },
  methods: {
    newRound(positionSelected: Number) {
        if (this.round < 10 && this.winner == 0) {
            let positionToHandle = this.positions.find(element => element.position == positionSelected);

            if (positionToHandle?.player == 0) {
                positionToHandle.player = this.playerRound;
                if (positionSelected == 1) {
                    if (this.round % 2 == 0) {
                        this.box1P2 = !this.box1P2;
                        this.playerRound = 1;
                    } else {
                        this.box1P1 = !this.box1P1;
                        this.playerRound = 2;
                    }
                } else if (positionSelected == 2) {
                    if (this.round % 2 == 0) {
                        this.box2P2 = !this.box2P2;
                        this.playerRound = 1;
                    } else {
                        this.box2P1 = !this.box2P1;
                        this.playerRound = 2;
                    }
                } else if (positionSelected == 3) {
                    if (this.round % 2 == 0) {
                        this.box3P2 = !this.box3P2;
                        this.playerRound = 1;
                    } else {
                        this.box3P1 = !this.box3P1;
                        this.playerRound = 2;
                    }
                } else if (positionSelected == 4) {
                    if (this.round % 2 == 0) {
                        this.box4P2 = !this.box4P2;
                        this.playerRound = 1;
                    } else {
                        this.box4P1 = !this.box4P1;
                        this.playerRound = 2;
                    }
                } else if (positionSelected == 5) {
                    if (this.round % 2 == 0) {
                        this.box5P2 = !this.box5P2;
                        this.playerRound = 1;
                    } else {
                        this.box5P1 = !this.box5P1;
                        this.playerRound = 2;
                    }
                } else if (positionSelected == 6) {
                    if (this.round % 2 == 0) {
                        this.box6P2 = !this.box6P2;
                        this.playerRound = 1;
                    } else {
                        this.box6P1 = !this.box6P1;
                        this.playerRound = 2;
                    }
                } else if (positionSelected == 7) {
                    if (this.round % 2 == 0) {
                        this.box7P2 = !this.box7P2;
                        this.playerRound = 1;
                    } else {
                        this.box7P1 = !this.box7P1;
                        this.playerRound = 2;
                    }
                } else if (positionSelected == 8) {
                    if (this.round % 2 == 0) {
                        this.box8P2 = !this.box8P2;
                        this.playerRound = 1;
                    } else {
                        this.box8P1 = !this.box8P1;
                        this.playerRound = 2;
                    }
                } else if (positionSelected == 9) {
                    if (this.round % 2 == 0) {
                        this.box9P2 = !this.box9P2;
                        this.playerRound = 1;
                    } else {
                        this.box9P1 = !this.box9P1;
                        this.playerRound = 2;
                    }
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
    <div @click="newRound(2)" :class="{ player1: box2P1, player2: box2P2 }"></div>
    <div @click="newRound(3)" :class="{ player1: box3P1, player2: box3P2 }"></div>
    <div @click="newRound(4)" :class="{ player1: box4P1, player2: box4P2 }"></div>
    <div @click="newRound(5)" :class="{ player1: box5P1, player2: box5P2 }"></div>
    <div @click="newRound(6)" :class="{ player1: box6P1, player2: box6P2 }"></div>
    <div @click="newRound(7)" :class="{ player1: box7P1, player2: box7P2 }"></div>
    <div @click="newRound(8)" :class="{ player1: box8P1, player2: box8P2 }"></div>
    <div @click="newRound(9)" :class="{ player1: box9P1, player2: box9P2 }"></div>
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