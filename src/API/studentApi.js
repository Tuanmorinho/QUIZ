import axiosClient from "./axiosClient";

const StudentApi = {
    // getProfile
    getProfile: () => {
        const url = `/student/my-profile`;
        return axiosClient.get(url);
    },

    // editProfile
    editProfile: (param) => {
        const url = '/student/edit';
        return axiosClient.put(url, param);
    }
}

export default StudentApi;