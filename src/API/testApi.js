import axiosClient from "./axiosClient";

const TestApi = {
    // Lấy bài thi status
    getTestByStatus: (status) => {
        const url = `/student-test/get/${status}`;
        return axiosClient.get(url);
    },
    
    // Nộp bài thi theo mssv, id
    // submitTest: (mssv, status) => {
    //     const url = `/exam/submit/${mssv}/${status}`;
    //     return axiosClient.post(url);
    // }

    // Trả về điểm thi
}

export default TestApi;