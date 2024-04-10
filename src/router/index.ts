import { createRouter, createWebHistory } from "vue-router"

import Home from '@/views/Home.vue'
import Details from '@/views/Details.vue'
import About from '@/views/About.vue'
    import About1 from '@/views/about/About1.vue'
    import About2 from '@/views/about/About2.vue'
    import About3 from '@/views/about/About3.vue'




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
        component: About,
        beforeEnter: (to, from, next) => {
            const name = localStorage.getItem('from'); 
            
            if(to.path === '/about'){
                if(name){
                    next({name:name});
                }else{
                    next();
                }
            }else{
                next();
            }
           
        },
        children:[
            {
                path:'/about1',
                name:'about1',
                component: About1,
                beforeEnter: (to, from, next) => {
                    addPath(to);
                    next();
                },
            },
            {
                path:'/about2',
                name:'about2',
                component: About2,
                beforeEnter: (to, from, next) => {
                    addPath(to);
                    next();
                },
            },
            {
                path:'/about3',
                name:'about3',
                component: About3,
                beforeEnter: (to, from, next) => {
                    addPath(to);
                    next();
                },
            },
        ]
    }
]
})

export default routers

import {type RouteLocationNormalized} from 'vue-router'
const addPath = (from:RouteLocationNormalized) => {
    localStorage.setItem('from',from.name?from.name.toString() : '');
}