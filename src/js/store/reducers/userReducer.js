const initialState = {
    firstName: "",
    lastName: "",
    isAuthenticated: false,
    isAdmin: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "USER_IS_ADMIN":
            return {
                ...state,
                isAdmin: true
            }
        case "USER_IS_AUTHENTICATED":
            return {
                ...state,
                isAuthenticated: true,
                ...action.payload
            }
        default:
            return state
    }
}

export default userReducer