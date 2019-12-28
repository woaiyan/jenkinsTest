import React from 'react';
import {Button} from "react-bootstrap"
import "./CommonNetEdit.css"
import { connect } from 'react-redux'
import {toggleStatus} from "../menu/action"
import {addCommonNetSync} from "../CommonNet/action"
const mapDispatchToProps = dispatch => {
    return {
        toggleMenuStatus: (name) => {
            dispatch(toggleStatus(name))
        },
        addCommonNetSync:(params)=>{
            dispatch(addCommonNetSync(params))
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
            name:"",
            path:""
        }
        this.myRef = React.createRef();
        this.handleMemo = this.handleMemo.bind(this)
        this.handleAddress = this.handleAddress.bind(this)
        this.handleAddress = this.handleAddress.bind(this)
        this.addCommonNet = this.addCommonNet.bind(this)
    }
    handleMemo(e){
        this.setState({name:e.target.value});
    }
    handleAddress(e){
        this.setState({path:e.target.value});
    }
    addCommonNet(){
        let params = {
            "name":this.state.name,
            "path":this.state.path,
        }
        this.props.addCommonNetSync(params)
        this.props.toggleMenuStatus("CommonNet")
    }
    render(){
        return <div ref={this.myRef} className="commonNetEdit">
            <input value-={this.state.name} type="text" placeholder="名称" onChange={this.handleMemo}/>
            <input  value-={this.state.path} type="text" placeholder="网址" onChange={this.handleAddress}/>
            <br></br>
            <Button size="sm" variant="success" onClick={this.addCommonNet}>保存</Button>
            <Button size="sm" variant="success" onClick={()=>{this.props.toggleMenuStatus("CommonNet")}}>取消</Button>
        </div>
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(CommonNetEdit)