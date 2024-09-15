import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EditContactView from '../views/EditContactView.vue'
import SeeContactView from '../views/SeeContactView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView 
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router;