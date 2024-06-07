import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

api.interceptors.request.use( config => {
    const token = localStorage.getItem('AUTH_TOKEN')
    if(token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

export default api

//https://github.com/No-Country/S14-03-M-Node-React/tree/main/frontend/src/icons