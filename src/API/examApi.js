import axiosClient from "./axiosClient";

const ExamApi = {
    // Tìm kiếm exam theo examCode
    searchExam: (examCode) => {
        const url = `/student/exam/get/own/${examCode}`;
        return axiosClient.get(url);
    },

    // Join exam
    joinExam: (id) => {
        const url = `/student/exam/join/${id}`;
        return axiosClient.post(url);
    }
}

export default ExamApi;