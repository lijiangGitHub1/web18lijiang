import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'login',
            component: () =>
                import ('./views/Login')
        },
        {
            path: '/index',
            component: () =>
                import ('./views/Index'),
            children: [{
                    path: 'shouye',
                    component: () =>
                        import ('./views/ShouYe')
                },
                {
                    path: 'xiangmu',
                    component: () =>
                        import ('./views/GongGao')
                },
                {
                    path: 'tongzhi',
                    component: () =>
                        import ('./views/GongGao/index2.vue')
                },
                {
                    path: 'cankao',
                    component: () =>
                        import ('./views/GongGao/index3.vue')
                },
                {
                    path: 'rizhi',
                    component: () =>
                        import ('./views/XiTong')
                },
                {
                    path: 'juese',
                    component: () =>
                        import ('./views/XiTong/index2.vue')
                }
            ]

        }
    ]
})