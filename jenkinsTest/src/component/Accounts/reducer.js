const AccountsList = (state = {list:[]}, action) => {
    switch (action.type) {
        case 'GET-ACCOUNTS':
            return {list:action.data}
        default:
            return state
    }
}
export default AccountsList