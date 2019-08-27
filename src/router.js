import Vue from 'vue'
import Router from 'vue-router'
import Store from './store' //状态管理
import Home from './views/Home'
import Archives from './views/Archives'
import Exercise from './views/Exercise'
import Issue from './views/Issue'
import About from './views/About'
import Article from './views/Article'
import Tag from './views/Tag'
import Error from './views/Error'

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        }, {
            path: '/Error',
            name: 'Error',
            component: Error
        }, {
            path: '/Archives',
            name: 'Archives',
            component: Archives
        }, {
            path: '/Exercise',
            name: 'Exercise',
            component: Exercise,
        }, {
            path: '/Issue',
            name: 'Issue',
            component: Issue,
        }, {
            path: '/About',
            name: 'About',
            component: About,
        }, {
            path: '/Article/:id',
            name: 'Article',
            component: Article
        }, {
            path: '/Tag/:name',
            name: 'Tag',
            component: Tag
        }
    ]
});

//全局守卫
router.beforeEach((to, from, next) => {
    if (to.matched.length === 0) {
        from.name ? next({
            name: from.name
        }) : next('/Error');
    } else {
        next(); //如果匹配到正确跳转
    }
});

export default router
