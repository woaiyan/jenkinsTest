import React from 'react';
import "./FileData.css"
import SvgIcon from "../svgIcon/svgIcon"
export default class FileData extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        this.props.getFileData();
    }
    downFile(filename){
        var eleLink = document.createElement('a');
        eleLink.download = filename;
        eleLink.style.display = 'none';
        // 字符内容转变成blob地址
        eleLink.href = "/api/downfiledata?name="+filename;
        // 触发点击
        document.body.appendChild(eleLink);
        eleLink.click();
        // 然后移除
        document.body.removeChild(eleLink);
    }
    render(){
        return <div className="funcContainer">
            <div className="fileTypeTab">
                <div className={this.props.data.fileType === 1 ? "fileTypeTabItem selecttab" : "fileTypeTabItem"} onClick={()=>this.props.changeType(1)}>文档</div>
                <div className={this.props.data.fileType === 2 ? "fileTypeTabItem selecttab" : "fileTypeTabItem"} onClick={()=>this.props.changeType(2)}>软件</div>
                <div className={this.props.data.fileType === 3 ? "fileTypeTabItem selecttab" : "fileTypeTabItem"} onClick={()=>this.props.changeType(3)}>其他</div>
            </div>
           <div className="fileTypeTabContent">
               {this.props.data.list.length>0 && this.props.data.list.map(item=>
                   {
                       if(item.fileType===this.props.data.fileType){
                           return <div className="fileword" key={item.id}>{item.name}
                               <SvgIcon theme="warning" type="#icon-shanchu1" svgClass="fileOperate"  onClick={()=>this.props.deleteFileDataSync(item.id)}></SvgIcon>
                               <SvgIcon theme="warning" type="#icon-xiazai" svgClass="fileOperate"  onClick={()=>this.downFile(item.name)}></SvgIcon>
                           </div>
                       }
                   }
               )}
           </div>


        </div>
    }
}

