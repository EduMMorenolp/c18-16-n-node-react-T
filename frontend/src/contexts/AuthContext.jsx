import { createContext, useEffect, useReducer} from "react";
import { authReducer, initialState } from "../reducers/AuthReducer";
import api from "../lib/axios";
import { isAxiosError } from "axios";
import Loading from "../components/Loading";

export const AuthContext = createContext({
    ...initialState,
    method: "JWT",
    login: () => {},
    logout: () => {}
});

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState)
    useEffect(() => {
        const authenticationUser = async () => {
            try {
                const { data } = await api.get("/api/auth/user");
                dispatch({ type: "INIT", payload: { isAuthenticated: true, userInfo: data } });
            } catch (error) {
                dispatch({ type: "INIT", payload: { isAuthenticated: false, user: null } });
            }
        }
        authenticationUser();
    },  [])

    const login = async (userLogin) => {
        try {
            const url = '/api/auth/login'
            const { data } = await api.post(url, userLogin)
            localStorage.setItem('AUTH_TOKEN', data.userToken)    
            dispatch({ type: "LOGIN", payload:  data  });
        } catch (error) {
            if(isAxiosError(error) && error.response) {
                throw new Error(error.response.data.error)
            }
        }
    };

    const logout = () => {
        dispatch({ type: "LOGOUT" });
    };

    if (!state.isInitialized) return <Loading/>;

    return (
        <AuthContext.Provider value={{ 
            ...state,
            method: "JWT",
            login,
            logout
         }}>
            {children}
        </AuthContext.Provider>
    )
}