import axios from 'axios';
// import { Toast } from 'vant';
// import Vue from 'vue';
// Vue.use(Toast)
const http = axios.create({
  baseURL: '/dev',
  timeout: 10000,
  headers: {
    "X-Client-Info": '{ "a": "3000", "ch": "1002", "v": "5.0.4", "e": "1639728639150147761700865", "bc": "310100" }'
  }
})
// Add a request interceptor
http.interceptors.request.use(function (config) {
  // Do something before request is sent
//   Toast.loading({
//     duration:0,
//     message: '加载中...',
//     forbidClick: true,
//   });
console.log('发送请求')
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
http.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
//   Toast.clear()
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default http