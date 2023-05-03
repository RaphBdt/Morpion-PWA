<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      round: 1,
      playerRound: 1,
      message: '',
      positions: [
        {
            position: 1,
            player: 0,
            selected: false
        },
        {
            position: 2,
            player: 0,
            selected: false
        },
        {
            position: 3,
            player: 0,
            selected: false
        },
        {
            position: 4,
            player: 0,
            selected: false
        },
        {
            position: 5,
            player: 0,
            selected: false
        },
        {
            position: 6,
            player: 0,
            selected: false
        },
        {
            position: 7,
            player: 0,
            selected: false
        },
        {
            position: 8,
            player: 0,
            selected: false
        },
        {
            position: 9,
            player: 0,
            selected: false
        },
      ]
    }
  },
  methods: {
    newRound(positionSelected: Number) {
        if (this.round < 10) {
            let positionToHandle = this.positions.find(element => element.position == positionSelected);

            if (positionToHandle?.selected == false) {
                positionToHandle.selected = true;
                positionToHandle.player = this.playerRound;
                if (this.round % 2 == 0) {
                    document.getElementById(`box${positionSelected}`).style.backgroundColor = "#FC440F";
                    this.playerRound = 1;
                } else {
                    document.getElementById(`box${positionSelected}`).style.backgroundColor = "#1F01B9";
                    this.playerRound = 2;
                }
                this.round++;
                this.message = '';
                console.log(positionSelected);
            } else {
                this.message = 'Always selected';
            }

        } else {
            this.message = 'Finished';
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
  <p v-if="message">{{ message }}</p>
  <div class="morpion">
    <div @click="newRound(1)" id="box1"></div>
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
