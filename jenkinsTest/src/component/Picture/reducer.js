const PictureList = (state = {list:[],currentPicture:{}}, action) => {
    switch (action.type) {
        case 'GET-PICTURE':
            return {list:action.data,currentPicture:action.data[0]}
        case 'CHANGE-CURRENT':
            return {list:state.list,currentPicture:state.list[action.index]}
        default:
            return state
    }
}
export default PictureList