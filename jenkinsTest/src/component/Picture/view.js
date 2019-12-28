import "./Picture.css"
import React from 'react';
import SvgIcon from "../svgIcon/svgIcon"
export default class Picture extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        this.props.getPictureSync()
    }
    downFile(filename){
        var eleLink = document.createElement('a');
        eleLink.download = filename;
        eleLink.style.display = 'none';
        // 字符内容转变成blob地址
        eleLink.href = "/api/downpicture?name="+filename;
        // 触发点击
        document.body.appendChild(eleLink);
        eleLink.click();
        // 然后移除
        document.body.removeChild(eleLink);
    }
    render(){
        return <div className="pictureContainer">
        <div className="rightBar">
            {this.props.data.list.length>0 && this.props.data.list.map((item,index)=>
                <div className="pictureSmall" key={item.id} onClick={()=>this.props.changeCurrten(index)}>
                    <img src={"/api/downpicture?name="+item.name}/>
                    <div className="pictureMask">
                        <div className="pictureName">{item.name}</div>
                        <SvgIcon theme="warning" type="#icon-shanchu1" svgClass="pictureOperate" onClick={()=>this.props.deletePicture(item.name)}></SvgIcon>
                        <SvgIcon theme="warning" type="#icon-xiazai" svgClass="pictureOperate" onClick={()=>this.downFile(item.name)}></SvgIcon>
                    </div>
                </div>
            )}
        </div>
            <div className="pictureBig">
                {this.props.data.currentPicture && <img src={"/api/downpicture?name="+this.props.data.currentPicture.name}/>}
            </div>
        </div>
    }
}