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
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/Dashboard.vue'),
    meta: { title: '展板', icon: 'dashboard' }
  },
  {
    path: '',
    name: 'Main',
    component: () => import('@/views/Main.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        meta: { title: '首页' }
      },

      {
        path: '/blog-detail/:id',
        name: 'BlogDetail',
        component: () => import('@/views/blog-detail.vue'),
        meta: { title: '博客详情' }
      },
      {
        path: '/search',
        name: 'search',
        component: () => import('@/views/search.vue'),
        meta: { title: '搜索' }
      },
      {
        path: '/category/:id?',
        name: 'category',
        component: () => import('@/views/category.vue'),
        meta: { title: '博客详情' }
      },
      {
        path: '/archive/:year/:month',
        name: 'archive',
        component: () => import('@/views/archive.vue'),
        meta: { title: '博客详情' }
      },
      {
        path: '/timeline',
        name: 'timeline',
        component: () => import('@/views/timeline.vue'),
        meta: { title: '时间轴' }
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
