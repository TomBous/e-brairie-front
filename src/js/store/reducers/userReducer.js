const initialState = {
    name: "",
    lastname: "",
    isAdmin: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "USER_IS_ADMIN":
            return {
                ...state,
                isAdmin: true
            }
        default:
            return state
    }
}

export default userReducer