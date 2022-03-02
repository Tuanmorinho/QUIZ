// api/axiosClient.js
import axios from 'axios';
import queryString from 'query-string';
import APP_CONSTANTS from '../Constants/appConstants'

// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request-config` for the full list of configs
const axiosClient = axios.create({
    // baseURL: APP_CONSTANTS.API_BASE_URL,
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
    // Handle token here ...
    const userToken = localStorage.getItem(APP_CONSTANTS.USER_TOKEN)
    if (userToken) {
        config.headers.Authorization = `Bearer ${userToken}`;
    }

    return config;
});

axiosClient.interceptors.response.use((response) => {
    if (response.status === 403) {
        localStorage.clear();
    }
    if (response) {
        return response.data;
    } 
    return response.status;
}, (error) => {
    // Handle errors
    throw error;
});

export default axiosClient;