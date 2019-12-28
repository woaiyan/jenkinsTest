const CssItemList = (state = {list:[]}, action) => {
    switch (action.type) {
        case 'GET-CSSITEM':
            return {list:action.data}
        default:
            return state
    }
}
export default CssItemList