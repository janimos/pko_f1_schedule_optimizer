import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/MainHome.vue';
import SolutionDetails from '../components/SolutionDetails.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/solution/:id', component: SolutionDetails, props: true }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
