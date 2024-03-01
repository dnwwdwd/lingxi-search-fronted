import axios from "axios";

const isDev = process.env.NODE_ENV === 'development';

const myAxios = axios.create({
    baseURL: "http://localhost:8101/api",
    timeout: 10000,

});

myAxios.defaults.withCredentials = true; //设置为true

myAxios.interceptors.response.use(function (response) {
    // 对响应成功的数据做处理
    const data = response.data;
    if (data.code === 0) {
        return data.data;
    }
    console.error("response error");
    return response.data;
}, function (error) {
    // 对错误做出什么
    return Promise.reject(error);
});

export default myAxios;