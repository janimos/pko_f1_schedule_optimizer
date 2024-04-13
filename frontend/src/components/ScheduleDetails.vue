<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const schedule = ref({ id: route.params.id, title: 'Schedule ' + route.params.id });
</script>

<template>
  <div>
    <h2>schedule Details: {{ schedule.title }}</h2>
    <p>Description of the problem...</p>
    <!-- More detailed content here -->
  </div>
</template>

<style scoped>

</style>