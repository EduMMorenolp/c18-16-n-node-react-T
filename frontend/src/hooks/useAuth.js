import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const useAuth = () => {
    const context = useContext(AuthContext)
    if(!context) {
        throw new Error('el hook useAuth debe ser utilizado en un AuthProvider')
    }
    return context
}