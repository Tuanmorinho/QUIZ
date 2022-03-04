import axiosClient from "./axiosClient";

const TestApi = {    
    // Lấy bài thi status
    getTestByStatus: (status) => {
        const url = `/student-test/get/own/${status}`;
        return axiosClient.get(url);
    },

    // Tìm kiếm bài thi theo examCode
    searchTestByExamCode: (examCode) => {
        const url = `/student-test/get/own/test/${examCode}`;
        return axiosClient.get(url);
    },

    getTestByTestID: (id) => {
        const url = `/student-test/${id}`;
        return axiosClient.get(url)
    },
    
    // Mở bài thi
    openTest: (id) => {
        const url = `/student-test/take-a-test/${id}`;
        return axiosClient.put(url);
    },

    // Nộp bài thi
    submitTest: (id, data) => {
        const url = `/student-test/submit/${id}`;
        return axiosClient.put(url, data);
    }

    // Trả về điểm thi
}

export default TestApi;