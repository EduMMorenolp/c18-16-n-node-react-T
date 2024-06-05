const INIT = 'INIT';
const LOGIN = 'LOGIN';
const REGISTER = 'REGISTER';
const LOGOUT = 'LOGOUT';

export const initialState = {
    user: null,
    isInitialized: false,
    isAuthenticated: false
};

export const authReducer = (state, action) => {
    switch (action.type) {
        case INIT : {
            const { isAuthenticated, user } = action.payload;
            return { 
                ...state, 
                isAuthenticated, 
                isInitialized: true, 
                user 
            };
        }
        case LOGIN : {
            return { 
                ...state, 
                isAuthenticated: true, 
                user: action.payload.user 
            };
        }
        case REGISTER: {
            const { user } = action.payload;
            return { 
                ...state, 
                isAuthenticated: true, 
                user 
            };
        }

        case LOGOUT: {
            return { 
                ...state, 
                isAuthenticated: false, 
                user: null 
            };
        }
        default: 
            return state;
    }
}
