import React from 'react';
import "./modal.css"
import SvgIcon from "../svgIcon/svgIcon"
import {Button} from "react-bootstrap"
class Modal extends React.Component {
    constructor(props){
        super(props)
        this.state={
            status:false
        }
        this.close = this.close.bind(this)
        this.open = this.open.bind(this)
        this.onOk = this.onOk.bind(this)
    }
    close(){
        this.setState({status:false})
    }
    open(){
        this.setState({status:true})
    }
    onOk(){
        this.props.onOk();
        this.close()
    }
    render(){
        return this.state.status && <div className="mask">
            <div className="modal-item-container">
                <div className="modal-item-container-head">
                    <span className="title-container">{this.props.titleContent}</span>
                    <SvgIcon theme="warning" type="#icon-shanchu" svgClass="closeIcon" onClick={this.close}></SvgIcon>
                </div>
                <div>{this.props.children}</div>
                <div className="modal-item-container-foot">
                    <Button variant="success"  onClick={()=>this.onOk()}>添加</Button>
                </div>
            </div>
            </div>

    }
}


export default Modal