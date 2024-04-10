import { createRouter, createWebHistory } from "vue-router"

import Home from '@/views/Home.vue'
import Details from '@/views/Details.vue'
import About from '@/views/About.vue'

const routers = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[{
        path:'/',
        name:'home',
        component: Home
    },
    {
        path:'/details',
        name:'details',
        component: Details
    },
    {
        path:'/about',
        name:'About',
        component: About
    }
]
})

export default routers