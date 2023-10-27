import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import NProgress from 'nprogress'; // progress bar
// import 'nprogress/css/nprogress.css'; // 进度条样式
import {template} from '@/config/template'
import {template1Routes} from './template1/index'
NProgress.configure({ showSpinner: false }); // NProgress Configuration

let routes: Array<RouteRecordRaw> = [
  // {
  //   path: '',
  //   redirect: '/main'
  // },


  // {
  //   path: '/dashboard',
  //   name: 'Dashboard',
  //   component: () => import('@/views/Dashboard.vue'),
  //   meta: { title: '展板', icon: 'dashboard' }
  // },

];
// routes.push(...[
//   {
//     path: '',
//     redirect: '/home'
//   },
//   {
//     path: '/:pathMatch(.*)*',
//     name: 'not-found',
//     component: () => import('@/views/NotFound.vue')
//   },

//   {
//     path: '/dashboard',
//     name: 'Dashboard',
//     component: () => import('@/views/Dashboard.vue'),
//     meta: { title: '展板', icon: 'dashboard' }
//   },
//   {
//     path: '',
//     name: 'Main',
//     component: () => import('@/views/Main.vue'),
//     redirect: '/home',
//     children: [
//       {
//         path: '/home',
//         name: 'Home',
//         component: () => import('@/views/Home.vue'),
//         meta: { title: '首页' }
//       },

//       {
//         path: '/blog-detail/:id',
//         name: 'BlogDetail',
//         component: () => import('@/views/blog-detail.vue'),
//         meta: { title: '博客详情' }
//       },
//       {
//         path: '/search',
//         name: 'search',
//         component: () => import('@/views/search.vue'),
//         meta: { title: '搜索' }
//       },
//       {
//         path: '/category/:id?',
//         name: 'category',
//         component: () => import('@/views/category.vue'),
//         meta: { title: '博客详情' }
//       },
//       {
//         path: '/archive/:year/:month',
//         name: 'archive',
//         component: () => import('@/views/archive.vue'),
//         meta: { title: '博客详情' }
//       },
//       {
//         path: '/timeline',
//         name: 'timeline',
//         component: () => import('@/views/timeline.vue'),
//         meta: { title: '时间轴' }
//       }
//     ]
//   },

//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ])
routes.push(...template1Routes)


console.log(routes);


const router = createRouter({
  history: createWebHashHistory(), // process.env.BASE_URL
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
console.log(router);

export default router;
