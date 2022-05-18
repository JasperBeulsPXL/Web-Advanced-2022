import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Buildings from "@/views/Buildings";
import ToDoView from "@/views/ToDoView";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/buildings',
        name: 'buildings',
        component: Buildings
    },
    {
        path: '/todo',
        name: 'todoList',
        component: ToDoView
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
