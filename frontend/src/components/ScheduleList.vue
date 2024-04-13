<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const schedules = ref([]);

onMounted(() => {
  axios.get('/schedules/list')
      .then(response => {
        schedules.value = response.data.map(schedule => ({
          id: schedule.solutionId,  // Adjust according to your API response
          title: schedule.score  // Assuming 'score' is what you want to display
        }));
      })
      .catch(error => {
        console.error('Error fetching schedules:', error);
      });
});
</script>

<template>
  <div>
    <header>
      <h1>Formula 1 Schedule Solutions</h1>
    </header>
    <ul>
      <li v-for="schedule in schedules" :key="schedule.id">
        <router-link :to="'/schedule/' + schedule.id">{{ schedule.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>