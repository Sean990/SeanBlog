import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

// 引用API文件
import api from './api/axios'
import FastClick from 'fastclick'

// 将API方法绑定到全局
Vue.prototype.$axios = api

window.addEventListener('load', () => {
    FastClick.prototype.focus = (targetElement) => {
        console.log(targetElement);
        let length;
        if (targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
            length = targetElement.value.length;
            targetElement.focus();
            targetElement.setSelectionRange(length, length);
        } else {
            targetElement.focus();
        }
    }
});
Vue.config.productionTip = false;

const app = new Vue({
    router,
    store,
    render: h => h(App),
    mounted() {
        document.dispatchEvent(new Event('render-event'))
    }
});

// 骨架屏：如果js晚于css加载完成，那直接执行渲染
if (process.env.NODE_ENV === 'production' && window.STYLE_READY) {
    app.$mount('#app')
} else {
    app.$mount('#app')
}
