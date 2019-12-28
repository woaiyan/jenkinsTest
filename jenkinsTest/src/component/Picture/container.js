import Picture from "./view"
import { connect } from 'react-redux'
import {getPictureSync,changeCurrten,deletePicture} from "./action"
const mapStateToProps = (state) => {
    return {
        data: state.Picture
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getPictureSync: () => {
            dispatch(getPictureSync())
        },
        changeCurrten:(index)=>{
            dispatch(changeCurrten(index))
        },
        deletePicture:(name)=>{
            dispatch(deletePicture(name))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Picture)