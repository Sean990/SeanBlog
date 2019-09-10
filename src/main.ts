import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import './registerServiceWorker';

// 引用API文件
import api from './api/axios';
import FastClick from 'fastclick';

// 将API方法绑定到全局
Vue.prototype.$axios = api

window.addEventListener('load', () => {
  FastClick.prototype.focus = (targetElement: { setSelectionRange: (arg0: any, arg1: any) => void; type: string; value: { length: any; }; focus: { (): void; (): void; }; }) => {
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
}).$mount('#app');
