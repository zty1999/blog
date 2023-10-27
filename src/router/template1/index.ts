import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
export const template1Routes: Array<RouteRecordRaw> = [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import(/* webpackChunkName: "notfound" */'@/views/NotFound.vue')
    },
    {
      path: '/construction',
      name: 'Construction',
      component: () => import('/src/templates/template1/construction/Construction.vue'),
      meta: { title: '建设中' }
    },
    {
      path: '',
      name: 'Main',
      component: () => import(/* webpackChunkName: "main" */'@/templates/template1/Main.vue'),
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'Home',
          component: () => import(/* webpackChunkName: "home" */'@/templates/template1/home/Home.vue'),
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
    }
  ]