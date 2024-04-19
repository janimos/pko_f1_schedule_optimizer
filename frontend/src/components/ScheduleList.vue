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
  <div class="schedule-container">
    <header>
      <h1>Formula 1 Schedule Solutions</h1>
    </header>
    <ul class="schedule-list">
      <li v-for="(schedule) in schedules" :key="schedule.id" class="schedule-item">
        <router-link :to="'/schedule/' + schedule.id">
          Schedule #{{ schedule.id }}: {{ schedule.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.schedule-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.schedule-list {
  list-style-type: none;
  padding: 0;
}

.schedule-item {
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  margin-bottom: 5px;
  padding: 10px;
  transition: background-color 0.3s;
}

.schedule-item:hover {
  background-color: #e9e9e9;
}

.schedule-item a {
  text-decoration: none;
  color: #333;
}

.schedule-item a:hover {
  text-decoration: underline;
}

header h1 {
  text-align: center;
}
</style>