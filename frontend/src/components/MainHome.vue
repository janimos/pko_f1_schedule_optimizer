<script setup>
import { ref } from 'vue';

const solutions = ref([
  { id: 1, title: 'Problem 1' },
  { id: 2, title: 'Problem 2' }
]);
</script>

<template>
  <div>
    <header>
      <h1>Formula 1 Schedule Solutions</h1>
    </header>
    <ul>
      <li v-for="solution in solutions" :key="solution.id">
        <router-link :to="'/solution/' + solution.id">{{ solution.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>