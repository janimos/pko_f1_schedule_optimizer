<template>
  <div class="schedule-container">
    <h2 class="schedule-title" v-html="'Schedule #' + solutionId"></h2>
    <div class="main-content">
      <section class="schedule-content">
        <div class="grand-prix-schedule-container">
          <h3>Grand Prix Schedule</h3>
          <table class="grand-prix-schedule">
            <thead>
            <tr>
              <th>Week</th>
              <th>Grand Prix</th>
              <th>Track</th>
              <th>Attendance</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="stage in stages" :key="stage.name">
              <td>{{ stage.week }}</td>
              <td>{{ stage.name }}</td>
              <td>{{ stage.location.address }}</td>
              <td>{{ stage.attendance[stage.week] }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </section>
      <aside class="map-block">
        <h3>Grand Prix Schedule Map</h3>
        <div class="map-content">
          <l-map ref="map" v-model:zoom="zoom" :center="getCenter()">
            <l-tile-layer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              layer-type="base"
              name="OpenStreetMap"
            ></l-tile-layer>
            <l-marker v-for="marker in markers" :key="marker.stageName" :lat-lng="marker.latLng">
              <l-tooltip>{{ marker.stageName }}</l-tooltip>
            </l-marker>
            <l-polyline v-for="(line, index) in polylines" :key="index" :lat-lngs="line" :color="'blue'"></l-polyline>
          </l-map>
        </div>
      </aside>
    </div>
    <section class="score-explanation">
        <!-- Content for the Hard/Soft Score Explanation -->
        <h3>Hard/Soft Score Explanation</h3>
        <div class="score-content">
          <p>Total Hard/Soft Score: <span :class="scoreBadge" v-html="scoreText"></span></p>
        </div>
        <div class="score-explanation-table">
          <table>
            <thead>
              <tr>
                <th>Grand Prix</th>
                <th>Total Score</th>
                <th>Constraints</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="indictment in indictmentMap" :key="indictment.indictedObjectID">
                <td>{{ indictment.indictedObjectID }}</td>
                <td>{{ indictment.score }}</td>
                <td>
                  <ul>
                    <li v-for="match in indictment.constraintMatches" :key="match.constraintName">{{ getScore(match.constraintName, match.score) }}</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </section>
  </div>
</template>

<script>
import { useScheduleDetails} from "@/logic/ScheduleDetailsLogic";
import "../assets/style.css";

import "leaflet/dist/leaflet.css";
import { LMap, LMarker, LPolyline, LTileLayer, LTooltip } from "@vue-leaflet/vue-leaflet";

export default {
  name: 'ScheduleDetails',
  setup() {
    return useScheduleDetails();
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip,
    LPolyline
  },
  data() {
    return {
      zoom: 10,
    };
  },
};
</script>