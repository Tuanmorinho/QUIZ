import axiosClient from "./axiosClient";

const ExamApi = {
    // Lấy bài thi theo ID
    getExamByID: (id) => {
        const url = `/get/exam/${id}`;
        return axiosClient.get(url);
    },
}

export default ExamApi;