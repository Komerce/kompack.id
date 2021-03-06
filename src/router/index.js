import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: 'Home',
        component: () =>
            import ('@/views/Home/Home.vue'),
    }, {
        path: '/tentang',
        name: 'Tentang',
        component: () =>
            import ('@/views/pages/Tentang.vue'),
    }, {
        path: '/syarat',
        name: 'Syarat',
        component: () =>
            import ('@/views/pages/Syarat.vue'),
    }, {
        path: '/kebijakan',
        name: 'Kebijakan',
        component: () =>
            import ('@/views/pages/Kebijakan.vue'),
    }, {
        path: '/register',
        name: 'Register',
        component: () =>
            import ('@/views/pages/register-page.vue'),
    }, {
        path: '/carousel',
        name: 'Carousel',
        component: () =>
            import ('@/views/pages/carousel.vue'),
    }
]

})

export default router