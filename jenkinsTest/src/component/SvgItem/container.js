import Svg from "./view"
import { connect } from 'react-redux'
import {getSvgSync,deleteSvg} from "./action"
const mapStateToProps = (state) => {
    return {
        data: state.Svg
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getSvgSync: () => {
            dispatch(getSvgSync())
        },
        deleteSvg: (id) => {
            dispatch(deleteSvg(id))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Svg)