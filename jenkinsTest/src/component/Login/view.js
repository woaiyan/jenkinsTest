import React from "react";
import "./Login.css"
import SvgIcon from "../svgIcon/svgIcon"
import {toggleStatus} from "../menu/action"
import {Button} from "react-bootstrap"
import { connect } from 'react-redux'

const mapDispatchToProps = dispatch => {
    return {
        toggleMenuStatus: (name) => {
            dispatch(toggleStatus(name))
        }
    }
}
 class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state={username:"",password:""}
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.login = this.login.bind(this);
    }
    handleUsername(e){
       this.setState({username:e.target.value})
    }
    handlePassword(e){
        this.setState({password:e.target.value})
    }
     login(){
         this.props.login(this.state);
         this.props.toggleMenuStatus("Login");
         this.props.history.push("/Home");
     }
    render(){
        return (<div className="loginContainer">
            <div className="lgoinBase">
                <div className="loginBox">
                    <SvgIcon theme="warning" type="#icon-shanchu" svgClass="loginClose" onClick={()=>{this.props.toggleMenuStatus("Login")}}></SvgIcon>
                    <input value-={this.state.username} type="text" placeholder="账号" onChange={this.handleUsername}/>
                    <input  value-={this.state.password} type="text" placeholder="密码" onChange={this.handlePassword}/>
                    <br></br>
                    <Button size="sm" variant="success" onClick={this.login}>登录</Button>
                </div>
            </div>
        </div>)
    }
}
export default connect(null,mapDispatchToProps)(Login)