
const userToken = localStorage.getItem('AUTH_TOKEN')
  ? localStorage.getItem('AUTH_TOKEN')
  : null

export const initialState = {
    userInfo: null,
    isInitialized: false,
    isAuthenticated: false,
    userToken,
};

export const authReducer = (state, action) => {
    switch (action.type) {
        case "INIT" : {
            
            const { isAuthenticated, userInfo } = action.payload;
            console.log(userInfo + "action.payload")
            return { 
                ...state, 
                isAuthenticated, 
                isInitialized: true, 
                userInfo 
            };
        }
        case "LOGIN" : {
            
            return { 
                ...state, 
                isAuthenticated: true, 
                userInfo: action.payload,
                userToken: action.payload.userToken
            };
        }
       
        case "LOGOUT": {
            localStorage.removeItem('AUTH_TOKEN')
            return { 
                ...state, 
                isAuthenticated: false, 
                userInfo: null 
            };
        }
        default: 
            return state;
    }
}
