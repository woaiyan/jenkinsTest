import Accounts from "./view"
import { connect } from 'react-redux'
import {getAccountsSync,deleteAccount} from "./action"
const mapStateToProps = (state) => {
    return {
        data: state.Accounts
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getAccounts: () => {
            dispatch(getAccountsSync())
        },
        deleteAccount:(id)=>{
            dispatch(deleteAccount(id))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Accounts)