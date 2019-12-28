import {login} from "./action"
import { connect } from 'react-redux'
import Login from "./view";
import {withRouter}from "react-router-dom"
const mapDispatchToProps = dispatch => {
    return {
        login: (params) => {
            dispatch(login(params))
        }
    }
}
export default connect(null,mapDispatchToProps)(withRouter(Login))