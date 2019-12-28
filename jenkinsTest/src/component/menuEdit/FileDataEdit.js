import React from 'react';
import {Button,Form} from "react-bootstrap"
import "./FileDataEdit.css"
import { connect } from 'react-redux'
import {toggleStatus} from "../menu/action"
import {addFileDataSync} from "../FileData/action"
const mapDispatchToProps = dispatch => {
    return {
        toggleMenuStatus: (name) => {
            dispatch(toggleStatus(name))
        },
        addFileDataSync:(params)=>{
            dispatch(addFileDataSync(params))
        }
    }
}
const mapStateToProps = (state) => {
    return {
        data: state.Menu
    }
}
class FileDataEdit extends React.Component {
    constructor(props){
        super(props)
        this.myRef = React.createRef();
        this.addEvent = this.addEvent.bind(this)
        this.addFile = this.addFile.bind(this);
        this.handleChangeType = this.handleChangeType.bind(this);
        this.state={files:[],fileName:[],type:"文档"}
    }
    addFile(){
        let files= this.state.files;
        let formData = new FormData();
        for(let i=0;i<files.length;i++){
            formData.append('myfiles', files[i])
        }
        formData.append('fileType', this.state.type);
        this.props.toggleMenuStatus("FileData")
        this.props.addFileDataSync(formData)
    }
    componentDidMount() {
        this.addEvent()
    }
    addEvent(){
        let self = this;
        let container = document.getElementById("fileDataContainer");

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
    handleChangeType(e){
        console.log(e.target.value)
        this.setState({type:e.target.value})
    }
    render(){
        return <div ref={this.myRef} className="commonNetEdit">
            <select className="fileDataSelect" onClick={this.handleChangeType}>
                <option value ="文档">文档</option>
                <option value ="软件">软件</option>
                <option value="其他">其他</option>
            </select>
            <div className="fileDataPre" id="fileDataContainer">
                {
                    this.state.fileName.length>0 ?
                        <div>{ this.state.fileName.map((item)=>
                            <div key={item} className="fileDataEditName">{item}</div>
                        )}
                        </div>
                        :
                        <span>将文档拖拽到此处上传</span>
                }

            </div>
            <Button size="sm" variant="success" onClick={this.addFile}>上传</Button>
            <Button size="sm" variant="success" onClick={()=>{this.props.toggleMenuStatus("FileData")}}>取消</Button>
        </div>
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(FileDataEdit)