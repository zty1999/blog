import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from 'axios';
// import { ElMessage, ElMessageBox } from 'element-plus'

import router from '@/router';
import { ElMessage } from 'element-plus';
import { ErrorCode } from '@/types/http.type';
function getSession(key: string) {
  let json: any = window.sessionStorage.getItem(key);
  return JSON.parse(json);
}
// export const PATH_URL: string = '';
console.log('process', import.meta, process.env.VUE_APP_BASE_API);

export const PATH_URL: string =
  import.meta.env.MODE == 'development'
    ? 'http://localhost:1337/'
    : 'http://intheway.cloud/';
//  import.meta.env.VUE_APP_BASE_API
// || import.meta.env.VITE_API_URL
// 配置新建一个 axios 实例

const request: AxiosInstance = axios.create({
  baseURL: PATH_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'X-Parse-Application-Id': 'spark',
    'X-Parse-REST-API-Key': 'spark666'
  }
});
// get 请求
// 传参对象为 params 或 url后?拼接参数 nodejs => req.query 接收
// let resp: any = await request.get(url, { data: params });
// let resp: any = await request.get(url, { params: params });
// url后:拼接url动态参数  当 nodejs 路由为/api/upload/token/:company[动态传入参数]  nodejs => req.params 接收
// `/api/upload/token/${company}`

// 添加请求拦截器
request.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    console.log(config);

    if (getSession('token')) {
      // config.headers.common['Authorization'] = `${getSession('token')}`
    }
    return config;
  },
  (error: AxiosError) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
request.interceptors.response.use(
  (response: AxiosResponse) => {
    const res: any = response.data;
    console.log(res);
    if (res.status && !res.success) {
      ElMessage.error(res.message);
      // `token` 过期或者账号已在别处登录
      if (res.code === 401 || res.code === 4001) {
        window.sessionStorage.clear(); // 清除浏览器全部临时缓存
        router
          .push('/login') // 去登录页面
          // resetRoute() // 删除/重置路由
          // ElMessageBox.alert('你已被登出，请重新登录', '提示', {})
          .then(() => {})
          .catch(() => {});
      }

      return Promise.reject(request.interceptors.response);
    } else {
      return response.data;
    }
  },
  (error: AxiosError) => {
    console.error(error);

    if (error && error.code == ErrorCode.ERR_BAD_REQUEST) {
      ElMessage.error(error.message);
    }
    if (error.message.indexOf('timeout') != -1) {
      ElMessage.error('网络超时');
    } else if (error.message == 'Network Error') {
      ElMessage.error('网络连接错误');
    } else {
      ElMessage.error(error.message);
    }
    return Promise.reject(error);
  }
);

export default request;
