import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/data/Index.vue'
import Createdatas from '../views/data/Createdatas.vue'
import Detaildatas from '../views/data/Detaildatas.vue'

const routes = [
{
path: '/',
name: 'Home',
component: Home
},
{
path: '/index',
name: 'Index',
component: Index
},
{
path: '/createdatas',
name: 'Createdatas',
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
component: Createdatas
},
{
path: '/detaildatas/:id',
name: 'Detaildatas',
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
component: Detaildatas
}
]

const router = createRouter({
history: createWebHashPendidikan(),
routes
})

export default router

