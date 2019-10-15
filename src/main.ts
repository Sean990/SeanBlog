import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import './registerServiceWorker';

// 引用API文件
import api from './utils/axios';
import Api from './api'
import FastClick from 'fastclick';

// interface
import {AxiosInstance} from '@/api/axios'

Vue.config.productionTip = false;
// 将API方法绑定到全局
Vue.prototype.$axios = api
Vue.prototype.$request = new Api()

declare module 'vue/types/vue' {
    interface Vue {
        $request: Api,
        $axios: AxiosInstance
    }
}

window.addEventListener('load', () => {
    FastClick.prototype.focus = (targetElement: { setSelectionRange: (arg0: any, arg1: any) => void; type: string; value: { length: any; }; focus: { (): void; (): void; }; }) => {
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

const app = new Vue({
    router,
    store,
    render: h => h(App),
    mounted() {
        document.dispatchEvent(new Event('render-event'))
    }
}).$mount('#app');
