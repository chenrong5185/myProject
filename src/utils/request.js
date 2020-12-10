import axios from 'axios'
import QS from 'qs';

//自动切换环境
axios.defaults.baseURL = process.env._BASEURL
//设置超时时间
axios.defaults.timeout = 10000;
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.withcredentials = true
let loading
// 请求拦截
axios.interceptors.request.use(
    (confing) => {
        startLoading()
        //设置请求头
        if (config.method === 'post') {
           config.data = config.data;
        }
        return confing
    },
    (error) => {
        return Promise.reject(error)
    }
)
//响应拦截
axios.interceptors.response.use(
    (response) => {
        endLoading()
        return response
    },
    (error) => {
        Message.error(error.response.data)
        endLoading()
        // 获取状态码
        const { status } = error.response
        if (status === 401) {
            Message.error('请重新登录')
                //清除token
            localStorage.removeItem('eToken')
                //跳转到登录页面
            router.push('/login')
        }
        return Promise.reject(error)
    }
)
// 封装get方法
function get(url, params){
    return new Promise((resolve, reject) =>{
        axios.get(url, params).then(res =>{
            resolve(res.data);
        }).catch(err =>{
            reject(err.data);
        })
    });
}
// 封装post方法
function post(url, params){
    return new Promise((resolve, reject) =>{
        axios.post(url, params).then(res =>{
            resolve(res.data);
        }).catch(err =>{
            reject(err.data);
        })
    });
}
//对外接口
export function request({method, url, data}){
    if(method == 'get'){
        return get(url, data);
    }else if(method == 'post'){
        return post(url, data);
    }
}
export default {
    install(Vue) {
    Vue.prototype.$http = axios;
    Vue.prototype.$request = function () {
            return request;
        }
    }
}
// export default axios