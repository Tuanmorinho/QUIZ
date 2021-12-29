import axiosClient from "./axiosClient";

const GradeApi = {
    // Lấy bài thi theo ID
    getGradeByID: (id) => {
        const url = `/get/exam/${id}`;
        return axiosClient.get(url);
    },
}

export default ExamApi;