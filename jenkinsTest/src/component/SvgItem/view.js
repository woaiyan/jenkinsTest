import React from 'react';
import "./SvgItem.css"
import SvgIcon from "../svgIcon/svgIcon"
export default class SvgItem extends React.Component {
    constructor(props){
        super(props)
        this.downFile = this.downFile.bind(this);
    }
    componentDidMount() {
        this.props.getSvgSync();
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
        return <div className="svgContainer">
            {
                this.props.data.list.length > 0 && this.props.data.list.map((item, index) =>
                    <div className="svgImgContainer" key={item.id}>
                        <img className="svgImg" src={"/api/downsvg?name=" + item.name}/>
                        <div className="svgImgMask">
                            <div className="svgImgMaskOperation"  onClick={()=>this.downFile(item.name)}>
                                <SvgIcon theme="warning" type="#icon-xiazai" svgClass="svgItemSvg"></SvgIcon>
                            </div>
                            <div className="svgImgMaskOperation" onClick={()=>this.props.deleteSvg(item.id)}>
                                <SvgIcon theme="warning" type="#icon-shanchu1" svgClass="svgItemSvg"></SvgIcon>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    }
}
