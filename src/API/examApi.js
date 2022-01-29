import axiosClient from "./axiosClient";

const ExamApi = {
    // Lấy bài thi theo mssv, status
    getExamByID: (mssv, status) => {
        const url = `/get/exam/${mssv}/${status}`;
        return axiosClient.get(url);
    },
    
    // Nộp bài thi theo mssv, id
    submitTest: (mssv, status) => {
        const url = `/exam/submit/${mssv}/${status}`;
        return axiosClient.post(url);
    }

    // Trả về điểm thi
}

export default ExamApi;