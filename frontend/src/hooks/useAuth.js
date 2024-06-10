//npm run prisma:generate
// import { useQuery} from '@tanstack/react-query'
// import { getUser } from '../api/AuthAPI'

// export const useAuth = () => {
//     const { data, isError, isLoading } = useQuery({
//         queryKey: ['user'],
//         queryFn: getUser,
//         retry: 1,
//         refetchOnWindowFocus: false
//     })

//     return { data, isError, isLoading }
// }

import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const useAuth = () => {
    const context = useContext(AuthContext)
    if(!context) {
        throw new Error('el hook useAuth debe ser utilizado en un AuthProvider')
    }
    return context
}