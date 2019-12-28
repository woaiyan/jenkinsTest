import FileData from "./view"
import { connect } from 'react-redux'
import {getFileDataSync,deleteFileDataSync,changeType} from "./action"
const mapStateToProps = (state) => {
    return {
        data: state.FileData
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getFileData: () => {
            dispatch(getFileDataSync())
        },
        changeType: (type) => {
            dispatch(changeType(type))
        },
        deleteFileDataSync:(id) => {
            dispatch(deleteFileDataSync(id))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(FileData)