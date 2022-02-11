import axiosClient from "./axiosClient";

const StudentApi = {
    // getProfile
    getProfile: () => {
        const url = `/student/my-profile`;
        return axiosClient.get(url);
    },

    // editProfile
    editProfile: () => {
        const url = '/student/edit';
        return axiosClient.put(url);
    }
}

export default StudentApi;