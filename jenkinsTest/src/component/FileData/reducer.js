const FileDataList = (state = {list:[],fileType:1}, action) => {
    switch (action.type) {
        case 'GET-FILEDATA':
            return {list:action.data,fileType:state.fileType}
        case 'CHANGE-TYPE':
            return {list:state.list,fileType:action.data}
        default:
            return state
    }
}
export default FileDataList