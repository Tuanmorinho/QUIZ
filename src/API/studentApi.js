import axiosClient from "./axiosClient";

const StudentApi = {
    // getProfile
    getProfile: () => {
        const url = `/student/my-profile`;
        return axiosClient.get(url);
    }
}

export default StudentApi;