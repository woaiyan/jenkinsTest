import React from 'react';
import {Button} from "react-bootstrap"
import "./CssItemEdit.css"
import { connect } from 'react-redux'
import {toggleStatus} from "../menu/action"
import {addCssItemSync} from "../CssItem/action"
const mapDispatchToProps = dispatch => {
    return {
        toggleMenuStatus: (name) => {
            dispatch(toggleStatus(name))
        },
        addCssItemSyncSync:(params,callback)=>{
            dispatch(addCssItemSync(params,callback))
        }
    }
}
const mapStateToProps = (state) => {
    return {
        data: state.Menu
    }
}
class CssItemEdit extends React.Component {
    constructor(props){
        super(props)
        this.state={
            content:""
        }
        this.myRef = React.createRef();
        this.handleContent = this.handleContent.bind(this)
        this.addCssItem = this.addCssItem.bind(this)
        this.handleCss = this.handleCss.bind(this);
    }
    handleContent(e){
        this.setState({content:e.target.value});
    }
    handleCss(data){
        for(let i=0; i<data.length;i++){
            let str = data[i].content;
            let myId = "stylesheet"+data[i].id;
            let target = document.getElementById(myId);
            if(target){
                document.head.removeChild(target);
            }
            str = ".CssItem"+data[i].id+"{"+str+"}"
            let blob = new Blob([str],{type:"text/css"});
            let myUrl = URL.createObjectURL(blob);
            let stylesheet = document.createElement("link")
            stylesheet.href=myUrl;
            stylesheet.rel="stylesheet";
            stylesheet.type="text/css";
            stylesheet.id=myId;
            document.getElementsByTagName("head")[0].appendChild(stylesheet)
        }
    }
    addCssItem(){
        let params = {
            "name":String(new Date().getTime()),
            "content":this.state.content
        }
        this.props.addCssItemSyncSync(params)
        this.props.toggleMenuStatus("CssItem")
    }
    render(){
        return <div ref={this.myRef} className="commonNetEdit">
            <textarea className="CssItem-textarea" onChange={this.handleContent}></textarea>
            <br></br>
            <Button size="sm" variant="success" onClick={this.addCssItem}>保存</Button>
            <Button size="sm" variant="success" onClick={()=>{this.props.toggleMenuStatus("CssItem")}}>取消</Button>
        </div>
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(CssItemEdit)