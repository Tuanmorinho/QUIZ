import axiosClient from "./axiosClient";

const ShareApi = {
    // Lấy exam hoặc grade theo params
    getExamOrGrade: (params) => {
        const url = '/get'
        return axiosClient.get(url, { params });
    },
}

export default ShareApi;