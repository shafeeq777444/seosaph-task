// import axios from "axios";

// const axiosInstance = axios.create({
//     baseURL: "http://localhost:4000/api",
//     withCredentials: true,
//     headers: {
//         "Content-Type": "application/json",
//     },
// });

// // req intreceptors
// axiosInstance.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem("accessToken");
//         if (token) {
//             config.headers.Autherization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (err) => {
//         return Promise.reject(err)}
// );

// export default axiosInstance;

// //res intreceptor
// // axiosInstance.interceptors.response.use((response) => response,(err)=>{
// //     const originalRequest=err.config
// //   if ( err.response?.status==401 || err.response?.status==404 && !originalRequest._retry){
// //     originalRequest._retry=true
// //     axiosInstance.post('/user/refreshToken')

// //   }

// //     console.log(err,'sss')
// // });

import axios from "axios";
import toast from "react-hot-toast";
const axiosInstance = axios.create({ baseURL: "http://localhost:4000/api", withCredentials: true });

axiosInstance.interceptors.request.use((config) => {
    const accesToken = localStorage.getItem("accessToken");
    if (accesToken) {
        console.log(accesToken,'acces token')
        config.headers.authorization = `Bearer ${accesToken} `;
    }
    return config;
});

// axiosInstance.interceptors.response.use((response)=>{
//     return response
// },async(error)=>{
//     const originalRequest=error.config
//      toast.error(error?.response?.data?.message)
//     if(!originalRequest._retry && (error.response.status==403 || error.response.status==401)){
//         originalRequest._retry=true
//         console.log('helo')
//         const refreshToken=localStorage.getItem("refreshToken")
//         console.log(refreshToken)
//     const response=  await axiosInstance.post('/user/refreshToken',{refreshToken})
//     const newAccessToken = response.data.token;
//     localStorage.setItem('accesToken',newAccessToken)
//     originalRequest.headers.authorization = `Bearer ${newAccessToken}`;
//     return axios(originalRequest);

//     }
// })

export default axiosInstance;
