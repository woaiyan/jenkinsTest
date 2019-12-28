const LoginStatus = (state = {username:"未登录"}, action) => {
    switch (action.type) {
        case 'LOGIN-STATAUS':
            return {username:action.data}
        default:
            return state
    }
}
export default LoginStatus