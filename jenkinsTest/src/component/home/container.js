import React from "react";
import { connect } from 'react-redux'
import Homeview from  "./home.js"
const mapStateToProps = (state) => {
    return {
        data: state.Home
    }
}
export default connect(mapStateToProps)(Homeview)