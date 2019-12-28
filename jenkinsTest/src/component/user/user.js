import React from "react";
import "./user.css"
import { connect } from 'react-redux'
import {addSelf,Toggle} from "./action";
import {Button} from "react-bootstrap"
import SvgIcon from "../svgIcon/svgIcon"
const mapStateToProps = (state) => {

    return {
        data: state.User
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addSelf: id => {
            dispatch(addSelf(id))
        },
        Toggle: ()=>{
            dispatch(Toggle())
        }
    }
}
const  user = class User extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                {this.props.data.users.map(item=>
                     <div className="userContainer" key={item.id} onClick={()=>this.props.addSelf(item.id)}  style={ {
                         backgroundColor: this.props.data.background ? '#cccccc' : '#222222',
                         color:this.props.data.background ? '#000000' : '#ffffff'
                     }}>{item.id}</div>
                )}
                <Button onClick={()=>this.props.Toggle()}>TOGGLE</Button>
                <SvgIcon theme="warning" type="#icon-fanhui"></SvgIcon>
            </div>
        )
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(user)