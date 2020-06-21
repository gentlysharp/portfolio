export default [{
    path: '/',
    name: 'App',
    component: () => import( /* webpackChunkName: "App" */ '@/apps/App.vue'),
    children: [

      {
        path: '/about',
        name: 'About',
        component: () => import( /* webpackChunkName: "Menu1" */ '@/views/About.vue')
      },
      {
        path: '/resume',
        name: 'Resume',
        component: () => import( /* webpackChunkName: "Menu1" */ '@/views/Resume.vue')
      },

    ],
  },

]