import CommonNet from "./view"
import { connect } from 'react-redux'
import {getCommonNetSync,deleteCommonNetSync} from "./action"
const mapStateToProps = (state) => {
    return {
        data: state.CommonNet
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getCommonNet: () => {
            dispatch(getCommonNetSync())
        },
        deleteCommonNetSync:(id)=>{
            dispatch(deleteCommonNetSync(id))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CommonNet)