import axiosClient from "./axiosClient";

const TestApi = {
    // Lấy tất cả bải thi
    getAllTest: () => {
        const url = '/student-test/get/own';
        return axiosClient.get(url);
    },
    
    // Lấy bài thi status
    getTestByStatus: (status) => {
        const url = `/student-test/get/${status}`;
        return axiosClient.get(url);
    },

    // Tìm kiếm bài thi theo id
    searchTestByID: (id) => {
        const url = `/student-test/${id}`;
        return axiosClient.get(url);
    },
    
    // Nộp bài thi
    submitTest: (id, params) => {
        const url = `/student-test/submit/${id}`;
        return axiosClient.put(url, params);
    }

    // Trả về điểm thi
}

export default TestApi;