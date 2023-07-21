import Vue from 'vue'
import App from './App.vue'
// 注册三级联动组件---全局
import TypeNav from '@/components/TypeNav';
// 第一个参数：全局组件的名字   第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav);
Vue.config.devtools = true;

// 引入路由，router要小写
import router from '@/router';
// 引入仓库
import store from '@/store';
// 引入  mockServe.js
import '@/mock/mockServe';

new Vue({
  render: h => h(App),
  // 注册路由
  router,
  // 注册仓库
  store
}).$mount('#app')


