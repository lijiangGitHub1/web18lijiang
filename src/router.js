import Vue from 'vue'
import Router from 'vue-router'

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
                },
                {
                    path: 'quanxian',
                    component: () =>
                        import ('./views/XiTong/index3.vue')
                },
                {
                    path: 'qiye',
                    component: () =>
                        import ('./views/XiTong/index4.vue')
                },
                {
                    path: 'gongsi',
                    component: () =>
                        import ('./views/XiTong/index5.vue')
                },
                {
                    path: 'keshi',
                    component: () =>
                        import ('./views/XiTong/index6.vue')
                },
                {
                    path: 'zhichi',
                    component: () =>
                        import ('./views/XiTong/index7.vue')
                },
                {
                    path: 'zhuguan',
                    component: () =>
                        import ('./views/XiTong/index8.vue')
                },
                {
                    path: 'zijin',
                    component: () =>
                        import ('./views/TianBao')
                },
                {
                    path: 'keji',
                    component: () =>
                        import ('./views/TianBao/index2.vue')
                },
                {
                    path: 'rongyu',
                    component: () =>
                        import ('./views/TianBao/index3.vue')
                },
                {
                    path: 'zjjindu',
                    component: () =>
                        import ('./views/JinDu/index.vue')
                },
                {
                    path: 'kjjindu',
                    component: () =>
                        import ('./views/JinDu/index2.vue')
                },
                {
                    path: 'zjyanshou',
                    component: () =>
                        import ('./views/YanShou/index.vue')
                },
                {
                    path: 'kjyanshou',
                    component: () =>
                        import ('./views/YanShou/index2.vue')
                }, {
                    path: 'add',
                    component: () =>
                        import ('./views/XiTong/add.vue')
                },
                {
                    path: 'wenjian',
                    component: () =>
                        import ('./views/DangAn/index.vue')
                },
                {
                    path: 'baogao',
                    component: () =>
                        import ('./views/DangAn/index2.vue')
                },
                {
                    path: 'zonglan',
                    component: () =>
                        import ('./views/ZongLan')
                },
                {
                    path: 'huishou',
                    component: () =>
                        import ('./views/HuiShou')
                },
                {
                    path: 'addquanxian',
                    name: 'addquanxian',
                    component: () =>
                        import ('./views/XiTong/index3.vue')
                },
                {
                    path: 'update',
                    name: 'update',
                    component: () =>
                        import ('./views/XiTong/update.vue')
                }
            ]

        }
    ]
})