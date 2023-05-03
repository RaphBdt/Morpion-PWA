<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const round = ref(1)
</script>

<template>
  <div class="card">
    <button type="button" @click="round++">Round #{{ round }}</button>
  </div>
  <div class="morpion">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
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
