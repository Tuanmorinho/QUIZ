import axiosClient from "./axiosClient";

const StudentApi = {
    // getAll
    getAll: () => {
        const url = `/student/all`;
        return axiosClient.get(url);
    }
}

export default StudentApi;