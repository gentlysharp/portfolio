export default [{
    path: '/',
    name: 'App',
    component: () => import( /* webpackChunkName: "App" */ '@/apps/App.vue'),
    children: [{
        path: '/',
        name: 'Home',
        component: () => import( /* webpackChunkName: "Home" */ '@/apps/views/About.vue')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import( /* webpackChunkName: "About" */ '@/apps/views/About.vue')
      },
      {
        path: '/resume',
        name: 'Resume',
        component: () => import( /* webpackChunkName: "Resume" */ '@/apps/views/Resume.vue')
      },
      {
        path: '/blog',
        name: 'Blog',
        component: () => import( /* webpackChunkName: "Blog" */ '@/apps/views/Blog.vue')
      },
    ],
  },

]