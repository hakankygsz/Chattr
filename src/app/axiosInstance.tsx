import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const url = import.meta.env.VITE_APP_API_URL + '/api';

const axiosInstance = axios.create({
    baseURL: url,
    timeout: 3000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        console.log("Request:", `${url}${config.url}`, config);
        return config;
    },
    (error) => {
        console.error('Request Error:', error);
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        console.log('Response Success', response);
        return response;
    },
    (error) => {
        if (!error.response) {
            console.error('Network Error:', error);
            return Promise.reject('Network Error, please try again later.');
        }

        const statusCode = error.response.status;
        console.error(`Response Error (status ${statusCode}):`, error);
        return Promise.reject(error);
    }
);

export default axiosInstance;
