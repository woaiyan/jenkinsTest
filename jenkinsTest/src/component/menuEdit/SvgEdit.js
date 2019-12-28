import React from 'react';
import {Button} from "react-bootstrap"
import "./SvgEdit.css"
import { connect } from 'react-redux'
import {toggleStatus} from "../menu/action"
import {addSvg} from "../SvgItem/action"
const mapDispatchToProps = dispatch => {
    return {
        toggleMenuStatus: (name) => {
            dispatch(toggleStatus(name))
        },
        addSvg:(params)=>{
            dispatch(addSvg(params))
        }
    }
}
const mapStateToProps = (state) => {
    return {
        data: state.Menu
    }
}
class SvgEdit extends React.Component {
    constructor(props){
        super(props)
        this.myRef = React.createRef();
        this.addEvent = this.addEvent.bind(this)
        this.addSvg = this.addSvg.bind(this);
        this.state={files:[],fileName:[]}
    }
    addSvg(){
        let files= this.state.files;
        let formData = new FormData();
        for(let i=0;i<files.length;i++){
            formData.append('myfiles', files[i])
        }
        this.props.toggleMenuStatus("Svg")
        this.props.addSvg(formData)
    }
    componentDidMount() {
        this.addEvent()
    }
    addEvent(){
        let self = this;
        let container = document.getElementById("svgContainer");

        document.addEventListener("drop",function(e){  //拖离
            e.preventDefault();
        })
        document.addEventListener("dragleave",function(e){  //拖后放
            e.preventDefault();
        })
        document.addEventListener("dragenter",function(e){  //拖进
            e.preventDefault();
        })
        document.addEventListener("dragover",function(e) {  //拖来拖去
            e.preventDefault();
        })
        container.addEventListener("drop",function(e){
            let files = e.dataTransfer.files;
            if(!files.length){
                return;
            }
            let fileNames = [];
            for(let i=0;i<files.length;i++){
                fileNames.push(files[i].name)
            }
            self.setState({files:files,fileName:fileNames})
        })
    }
    render(){
        return <div ref={this.myRef} className="commonNetEdit">
            <div className="svgPre" id="svgContainer">
                {
                    this.state.fileName.length>0 ?
                        <div>{ this.state.fileName.map((item)=>
                            <div key={item} className="svgEditName">{item}</div>
                        )}
                        </div>
                        :
                        <span>将svg拖拽到此处上传</span>
                }

            </div>
            <Button size="sm" variant="success" onClick={this.addSvg}>上传</Button>
            <Button size="sm" variant="success" onClick={()=>{this.props.toggleMenuStatus("Svg")}}>取消</Button>
        </div>
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(SvgEdit)