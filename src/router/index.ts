import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import NProgress from 'nprogress'; // progress bar
// import 'nprogress/css/nprogress.css'; // 进度条样式

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFound.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: { title: '首页' }
  },
  {
    path: '',
    name: 'Main',
    component: () => import('@/views/Main.vue'),
    redirect: '/lesson',
    children: [
     
      {
        path: '/lesson',
        name: 'Lesson',
        component: () => import('@/views/Lesson.vue'),
        meta: { title: '课程' }
      },
      {
        path: '/profile',
        name: 'Profile',
        component: () => import('@/views/Profile.vue'),
        meta: { title: '我的' }
      }
    ]
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = createRouter({
  history: createWebHistory(), // process.env.BASE_URL
  routes
});
router.beforeEach((to, from, next) => {
  NProgress.start(); // start progress bar
  const title = to.meta && (to.meta.title as string);
  if (title) {
    document.title = title;
  }
  next();
  // return true
});

router.afterEach(() => {
  NProgress.done(); // finish progress bar
});

export default router;
