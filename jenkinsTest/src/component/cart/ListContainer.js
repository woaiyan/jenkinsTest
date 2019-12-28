import List from "./List"
import { connect } from 'react-redux'
import {del} from "./action"
const mapStateToProps = (state) => {
    return {
        lists: state.List
    }
}

const mapDispatchToProps = dispatch => {
    return {
        ondoClick: id => {
            dispatch(del(id))
        }
    }
}
const listContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(List)

export default listContainer