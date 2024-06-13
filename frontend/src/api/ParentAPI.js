import api from "../lib/axios";
import { isAxiosError } from "axios";


export async function createParent(parentData) {
    try {
        const url = "/api/parents"
        const { data } = await api.post(url, parentData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}


export async function getParents() {
    try {
        const url = "/api/parents"
        const { data } = await api.get(url);
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function updateParent(parentData, parentId){
    try {
        const { data } = await api.put(`/api/parents/${parentId}`, parentData);
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}