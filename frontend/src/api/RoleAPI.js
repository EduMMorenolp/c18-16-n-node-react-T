import api from "../lib/axios";

export async function getRole(roleName) {
    try {
        const url = `/api/roles/${roleName}/role`
        const { data } = await api(url);
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}