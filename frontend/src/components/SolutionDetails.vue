<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const solution = ref({ id: route.params.id, title: 'Solution ' + route.params.id });
</script>

<template>
  <div>
    <h2>Solution Details: {{ solution.title }}</h2>
    <p>Description of the problem...</p>
    <!-- More detailed content here -->
  </div>
</template>

<style scoped>

</style>