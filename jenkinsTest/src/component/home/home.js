import React from 'react';
import './home.css'
import SvgIcon from "../svgIcon/svgIcon"
import {withRouter}from "react-router-dom"
import Login from "../Login/container"
import { connect } from 'react-redux'
import {toggleStatus} from "../menu/action";
import {getCookie} from "../../asset/util"
const mapStateToProps = (state) => {
    return {
        data: state.Menu,
        LoginStatus:state.LoginStatus
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleMenuStatus: (name) => {
            dispatch(toggleStatus(name))
        }
    }
}
const  home = class Home extends React.Component {
    constructor(props){
        super(props)
        this.state={username:"未登录"}
    }
    componentDidMount() {
        let username = getCookie("username");
        if(username){
            this.setState({username: username})
        }else{
            this.setState({username: "未登录"})
        }
    }
    render() {
        return (
            <div>
                {this.props.data.Login && <Login></Login>}
                <div className="contentContainer">
                   <div className="webContainer">
                       <div className="simple-head">
                           <div className="simple-head-title">当前账号：{this.state.username}</div>
                           <div className="simple-head-operation">
                               <SvgIcon theme="warning" type="#icon-denglu" svgClass="outHome" onClick={()=>{this.props.toggleMenuStatus("Login")}}></SvgIcon>
                               <SvgIcon theme="warning" type="#icon-tuichu" svgClass="outHome" onClick={()=>{this.props.history.push("/Home")}}></SvgIcon>
                           </div>
                       </div>
                       <div className="simple-content">{this.props.children}</div>
                   </div>
                </div>
            </div>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(home))