import api from "../lib/axios";
import { isAxiosError } from "axios";



export async function createAccount(userData) {
    console.log(userData)
    try {
        const url = "/api/auth/register"
        const {data} = await api.post(url, userData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}


export async function getUser() {
    try {
        const { data } = await api('/api/auth/user')
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}