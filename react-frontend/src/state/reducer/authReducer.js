const authReducer = (state = 0, action) => {
    switch (action.type) {
        case "login":
            return state + action.payload;
    
        default:
            return state;
    }
}

export default authReducer;