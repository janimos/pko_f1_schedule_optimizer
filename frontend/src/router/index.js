import { createRouter, createWebHistory } from 'vue-router';
import ScheduleList from '../components/ScheduleList.vue';
import ScheduleDetails from '../components/ScheduleDetails.vue';

const routes = [
    { path: '/', component: ScheduleList },
    { path: '/schedule/:solutionId', component: ScheduleDetails, props: true }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
