import { createRouter, createWebHistory } from 'vue-router';
import TaskList from '../components/TaskList.vue';

const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            path: '/:projectName?',
            name: 'TaskList',
            component: TaskList,
        },
    ],
});

export default router;
