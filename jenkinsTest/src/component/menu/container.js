import Menu from "./view"
import { connect } from 'react-redux'
import {toggleStatus} from "./action"
const mapStateToProps = (state) => {
    return {
        data: state.Menu
    }
}
const mapDispatchToProps = dispatch => {
    return {
        toggleMenuStatus: (name) => {
            dispatch(toggleStatus(name))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Menu)