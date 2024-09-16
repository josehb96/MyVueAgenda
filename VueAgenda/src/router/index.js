import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EditContactView from '../views/EditContactView.vue'
import SeeContactView from '../views/SeeContactView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView 
    },
    {
        path: '/edit/:id',
        name: 'edit',
        component: EditContactView,
        meta: {
            requiresAuth: true
        }
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach((to, from) => {
    if (to.path === '/edit/:id') {
        return true
    } else {
        return true
    }
})

export default router;