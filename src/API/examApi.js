import axiosClient from "./axiosClient";

const ExamApi = {
    // Tìm kiếm exam theo id
    searchExam: (id) => {
        const url = `/exam/${id}`;
        return axiosClient.get(url);
    }
}

export default ExamApi;