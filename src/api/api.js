import axios from "axios";

// const baseUrl = 'https://reqres.in/api/';

const instance = axios.create({
    // withCredentials: true,
    baseURL: 'https://reqres.in/api/'
    // 'api-key'
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId) {
        return instance.post(`users/${userId}`)
            .then(response => {
                return response.data
            })
    },
    unfollow(userId) {
        return instance.delete(`users/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getProfile(userId) {
        console.warn('obsolete method.Please use getProfile object')
        return profileAPI.getProfile(userId)
    },

};
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`users/` + userId)
            .then(response => {
                return (response.data);
            });
    },
    getJob(userId) {
        return instance.get(`unknown/` + userId)
    },
    updateJob(job){
        return instance.put(`users/`,{job:job})
    }
};
export const authAPI = {
    me() {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            // withCredentials: true
        })
    }
}

