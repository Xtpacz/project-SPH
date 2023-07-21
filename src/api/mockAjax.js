// 对axios进行二次封装
import axios from "axios"
// 引入进度条
import nProgress from "nprogress";
// 引入进度条样式
import "nprogress/nprogress.css"

console.log(nProgress)
// 利用axios对象方法create,去创建一个axios实例
const requests = axios.create({
    // 基础路径，默认带/api
    baseURL:"/mock",
    // 请求5s内超时
    timeout:5000,
});

// 请求拦截器
requests.interceptors.request.use((config)=>{
    // 进度条开始
    nProgress.start();
    // config配置对象，属性里面的header很重要
    return config;
});

//响应拦截器
requests.interceptors.response.use((res)=>{
    // 进度条结束
    nProgress.done();
    // 成功的回调函数
    return res.data;
}, (error)=>{
    // 失败的回调函数
    return Promis.reject(new Error('false'));
});



// 对外暴露
// export default axios;
export default requests;



