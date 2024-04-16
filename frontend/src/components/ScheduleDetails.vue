<template>
  <div class="schedule-container">
    <h2 class="schedule-title" v-html="'Schedule #' + solutionId"></h2>
    <div class="main-content">
      <section class="score-explanation">
        <!-- Content for the Hard/Soft Score Explanation -->
        Hard/Soft Score Explanation
        <span :class="scoreBadge" v-html="scoreText"></span>
      </section>
      <aside class="map-block">
        <!-- Content for the Map Block -->
        Map Block
      </aside>
    </div>
    <div id="schedule_container">
      <table class="grand-prix-schedule">
        <thead>
        <tr>
          <th>Week of Race</th>
          <th>Grand Prix</th>
          <th>Track</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="stage in stages" :key="stage.name">
          <td>{{ stage.week }}</td>
          <td>{{ stage.name }}</td>
          <td>{{ stage.location.address }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { useScheduleDetails} from "@/logic/ScheduleDetailsLogic";

export default {
  name: 'ScheduleDetails',
  setup() {
    return useScheduleDetails();
  }
};
</script>

<style scoped>
.badge {
  padding: 5px;
  color: white;
}

.bg-success {
  background-color: green;
}

.bg-danger {
  background-color: red;
}

.schedule-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 16px;
}

.schedule-title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 16px;
}

.main-content {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 16px;
}

.score-explanation,
.map-block,
.schedule-container{
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
}

.grand-prix-schedule {
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;
}

.grand-prix-schedule th,
.grand-prix-schedule td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.grand-prix-schedule th {
  background-color: #f3f3f3;
}
</style>
