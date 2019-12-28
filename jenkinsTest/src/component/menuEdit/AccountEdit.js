import React from 'react';
import {Button} from "react-bootstrap"
import "./AccountEdit.css"
import { connect } from 'react-redux'
import {toggleStatus} from "../menu/action"
import {addAccountSync} from "../Accounts/action"
const mapDispatchToProps = dispatch => {
    return {
        toggleMenuStatus: (name) => {
            dispatch(toggleStatus(name))
        },
        addAccountSync:(params)=>{
            dispatch(addAccountSync(params))
        }
    }
}
const mapStateToProps = (state) => {
    return {
        data: state.Menu
    }
}
class CommonNetEdit extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:"",
            name:"",
            password:""
        }
        this.myRef = React.createRef();
        this.handleName = this.handleName.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleTitle = this.handleTitle.bind(this)
        this.addAccount = this.addAccount.bind(this)
    }
    handleName(e){
        this.setState({name:e.target.value});
    }
    handlePassword(e){
        this.setState({password:e.target.value});
    }
    handleTitle(e){
        this.setState({title:e.target.value});
    }
    addAccount(){
        let params = {
            "title":this.state.title,
            "name":this.state.name,
            "password":this.state.password
        }
        this.props.addAccountSync(params)
        this.props.toggleMenuStatus("Accounts")
    }
    render(){
        return <div ref={this.myRef} className="AccountEdit">
            <input value-={this.state.title} type="text" placeholder="名称" onChange={this.handleTitle}/>
            <input  value-={this.state.name} type="text" placeholder="账号" onChange={this.handleName}/>
            <input  value-={this.state.password} type="text" placeholder="密码" onChange={this.handlePassword}/>
            <br></br>
            <Button size="sm" variant="success" onClick={this.addAccount}>保存</Button>
            <Button size="sm" variant="success" onClick={()=>{this.props.toggleMenuStatus("Accounts")}}>取消</Button>
        </div>
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(CommonNetEdit)