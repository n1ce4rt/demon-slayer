import axios from "axios";


const instance = axios.create(
    {
        baseURL: 'http://localhost:3001/',
        withCredentials: true,
    }
)

export const demonsAPI = {

    getDemons() {
        return instance.get(`demons`).then(response => response.data)
    },
    authorizeMe(data) {
        return instance.post(`/auth/login`, {data}).then(response => response)
    },

    followUserApi(userId) {
        return instance.post(`follow/${userId}`, {})
    },
    unfollowUserApi(userId) {
        return instance.delete(`follow/${userId}`,)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }
}

export  const heroesAPI = {
    getHeroes(limit) {
        return instance.get(`characters?_limit=${limit}`).then(response => response.data)
    },
    createHero(name, img, id) {
        return instance.post('characters', {name, img, id})
    }
}

export const authAPI = {
    auth() {
        return instance.get('auth').then(response => response.data)
    },
    authMe(login, password, auth) {
        return instance.post('auth',{"login" : login, "password" : password, "isAuth" : auth})
    }
}