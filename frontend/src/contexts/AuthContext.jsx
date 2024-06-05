import { createContext, useEffect, useReducer, useState } from "react";
import { authReducer, initialState } from "../reducers/AuthReducer";
import api from "../lib/axios";

export const AuthContext = createContext({
    ...initialState,
    method: "JWT",
    login: () => {},
    register: () => {},
    logout: () => {}
});

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState)
    useEffect(() => {
        const authenticationUser = async () => {
            try {
                const accessToken = localStorage.getItem("AUTH_TOKEN");
                if (accessToken) {
                    const { data } = await api.get("/api/auth/user");
                    dispatch({ type: "INIT", payload: { isAuthenticated: true, user: data } });
                }else{
                    dispatch({ type: "INIT", payload: { isAuthenticated: false, user: null } });
                }
               
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
            localStorage.setItem('AUTH_TOKEN', data)    
            dispatch({ type: "LOGIN", payload: { data } });
        } catch (error) {
            
        }
    };

    const register = async (email, username, password) => {
        try {
            const url = "/api/userAuth/createUser"
            const { data } = await api.post(url, {email, username, password})
            dispatch({ type: "REGISTER", payload: { data } });
        } catch (error) {
            
        }
      };
    const logout = () => {
        dispatch({ type: "LOGOUT" });
    };

    return (
        <AuthContext.Provider value={{ 
            ...state,
            method: "JWT",
            login,
            register,
            logout
         }}>
            {children}
        </AuthContext.Provider>
    )
}