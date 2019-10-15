import Vue from 'vue';
import Router from 'vue-router';
import Store from './store/index' // 状态管理

Vue.use(Router);

const routerMap = [
  {path: '*', component: () => import('@/views/404.vue')},
  {path: '/404', component: () => import('@/views/404.vue')},
  {path: '/403', component: () => import('@/views/403.vue')},
  {path: '/500', component: () => import('@/views/500.vue')},
  {
    path: '/',
    name: '/',
    meta: {title: '首页'},
    component: () => import('@/views/Home.vue'),
  }, {
    path: '/Archives',
    name: '/Archives',
    meta: {title: '归档'},
    component: () => import('@/views/Archives.vue'),
  }, {
    path: '/Exercise',
    meta: {title: '练习'},
    component: () => import('@/views/Exercise.vue'),
  }, {
    path: '/Issue',
    name: '/Issue',
    meta: {title: '留言'},
    component: () => import('@/views/Issue.vue'),
  }, {
    path: '/About',
    name: '/About',
    meta: {title: '关于'},
    component: () => import('@/views/About.vue'),
  }, {
    path: '/Article/:id',
    name: '/Article',
    meta: {title: '文章'},
    component: () => import('@/views/Article.vue'),
  }, {
    path: '/Tag/:name',
    name: '/Tag',
    meta: {title: '标签'},
    component: () => import('@/views/Tag.vue'),
  }
];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routerMap
})

// 全局守卫
router.beforeEach((to, from, next) => {
  next(); // 如果匹配到正确跳转
  // 滚动条位置重置
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  Store.commit({
    type: 'SET_CURR_ROUTER',
    from: from.name,
    to: to.name,
    query: to.query,
    instance: router,
  })
});

export default router
