const Good = (state = {
    goodsList:[],
    isLoading:false
}, action) => {
    switch (action.type) {
        case 'GOOD_LIST_START':
            return  Object.assign({},state,{isLoading:true});
        case 'GOOD_LIST_END':

            return  Object.assign({},state,{isLoading:false,goodsList:[...action.goodList]});
        default:
            return state
    }
}
export default Good