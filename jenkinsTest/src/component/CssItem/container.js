import CssItem from "./view"
import { connect } from 'react-redux'
import {getCssItemSync,deleteCssItemSync} from "./action"
const mapStateToProps = (state) => {
    return {
        data: state.CssItem
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getCssItem: (callback) => {
            dispatch(getCssItemSync(callback))
        },
        deleteCssItem: (id,callback)=>{
            dispatch(deleteCssItemSync(id,callback))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CssItem)