import Vue from 'vue';
import VueRoute from 'vue-router';
//使用插件
Vue.use(VueRoute);

//引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import VueRouter from 'vue-router';

let originPush = VueRouter.prototype.push;

VueRouter.prototype.push = function(location, resolve, reject) {
    if(resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, ()=>{}, ()=>{});
    }
}

//配置路由
export default new VueRoute({
    //配置路由
    routes:[
        {
            path:"/home",
            component:Home,
            meta:{show:true}
        },
        {
            path:"/search/:keyword",
            component:Search,
            meta:{show:true},
            name:"search"
        },
        {
            path:"/login",
            component:Login,
            meta:{show:false}
        },
        {
            path:"/register",
            component:Register,
            meta:{show:false}
        },
        // 重定向：项目跑起来的时候，访问/，立马定向到首页
        {
            path:'*',
            redirect:"/home"
        }

    ]
})