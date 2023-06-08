import Vue from 'vue';
import VueRoute from 'vue-router';
//使用插件
Vue.use(VueRoute);

//引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
//配置路由
export default new VueRoute({
    //配置路由
    routes:[
        {
            path:"/home",
            component:Home
        },
        {
            path:"/search",
            component:Search
        },
        {
            path:"/login",
            component:Login
        },
        {
            path:"/register",
            component:Register
        }

    ]
})