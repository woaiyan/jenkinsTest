const CommonNetList = (state = {list:[]}, action) => {
    switch (action.type) {
        case 'GET-COMMONNT':
            debugger
            return {list:action.data}
        default:
            return state
    }
}
export default CommonNetList