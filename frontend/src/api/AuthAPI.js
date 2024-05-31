import api from "../config/axios";
import { isAxiosError } from "axios";

export async function createAccount(userData) {
    try {
        const url = "/api/userAuth/createUser"
        const {data} = await api.post(url, userData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}



export async function authenticateUser(userLogin) {
    try {
        const url = '/auth/login'
        const { data } = await api.post(url, userLogin)
        localStorage.setItem("token", response.data.data.token)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}