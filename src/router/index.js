import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: 'home',
        component: () =>
            import ('@/views/pages/Home.vue'),
    }, {
        path: '/Tentang',
        name: 'Tentang',
        component: () =>
            import ('@/views/pages/Tentang.vue'),
    }, {
        path: '/Syarat',
        name: 'Syarat',
        component: () =>
            import ('@/views/pages/Syarat.vue'),
    }, {
        path: '/Kebijakan',
        name: 'Kebijakan',
        component: () =>
            import ('@/views/pages/Kebijakan.vue'),
    }]

})

export default router