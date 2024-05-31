import api from "../config/axios";
import { isAxiosError } from "axios";

export async function createAccount(userData) {
    try {
        const url = '/http://localhost:3000/api/auth/register'
        const { data } = await api.post(url, userData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}