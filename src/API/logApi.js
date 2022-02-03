import axiosClient from "./axiosClient";

const LogApi = {
    // login
    login: (params) => {
        const url = `/student/login`;
        return axiosClient.post(url, params);
    },

    // register
    register: (params) => {
        const url = `/student/sign-up`;
        return axiosClient.post(url, { params });
    }
}

export default LogApi;