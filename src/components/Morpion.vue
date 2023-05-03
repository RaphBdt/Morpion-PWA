<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      round: 1
    }
  },
  methods: {
    newRound(position: Number) {
        console.log(position);
    }
  }
})
</script>

<template>
  <div class="card">
    Round #{{ round }}
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
        border: 1px solid #333333;
    }
</style>
