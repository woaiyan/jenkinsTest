import React from 'react';
import "./CssItem.css"
import SvgIcon from "../svgIcon/svgIcon"
export default class CssItem extends React.Component {
    constructor(props){
        super(props)
        this.handleCss = this.handleCss.bind(this);
        this.copyText = this.copyText.bind(this);
        this.copyContent = this.copyContent.bind(this);
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
    componentDidMount() {
        this.props.getCssItem(this.handleCss);
    }
    copyText(txt) {
        var text = txt;//复制的内容
        /**如果内容是界面的一个元素，可以直接读取元素getElementById()
         这里是因为界面没有input元素，所以自己创建一个元素来作为载体把内容复制到剪贴板
         **/
        var inputEle = document.createElement("input");//创建一个input元素
        //判断并控制整个HTML文档可编辑
        if (!(document.designMode == "on")) {
            document.designMode = "on";
        }
        inputEle.value = text;//把复制的内容赋给input的内容
        document.body.appendChild(inputEle);//把input元素绑定到document,不然操作不到
        // 判断元素是否能被选中
        if (inputEle && inputEle.select) {
            // 选择文本
            // inputEle.focus();
            inputEle.select(); //或： inputEle.setSelectionRange(0, inputEle.value.length);
            try {
                // 复制文本
                document.execCommand('copy');
            } catch (err) {
                alert('由于浏览器安全设置，不支持复制功能!!！');
            }
            inputEle.blur();//失去焦点
            inputEle.style.display = "none";//隐藏元素
            document.body.removeChild(inputEle);//删除元素
            document.designMode = "off";//文档设为不可编辑,否则界面的其他元素可能被影响
        }
    }
    copyContent(content){
        this.copyText(content)
    }
    render(){
        return <div>
            {this.props.data.list.length>0 && this.props.data.list.map(item=>
                <div className="CssItemContainer" key={item.id}>
                    <div className={"CssItem "+"CssItem"+ item.id} id={"CssItem"+item.id}></div>
                    {/*<div className="CssItemCopy" onClick={()=>this.copyContent(item.content)}>点击复制样式</div>*/}
                    <div className="cssItemOperation">
                        <div className="cssItemMask"  onClick={()=>this.copyContent(item.content)}>
                            <SvgIcon theme="warning" type="#icon-xiugai" svgClass="CssItemSvg"></SvgIcon>
                        </div>
                        <div className="cssItemMask" onClick={()=>{this.props.deleteCssItem(item.id)}}>
                            <SvgIcon theme="warning" type="#icon-shanchu1" svgClass="CssItemSvg"></SvgIcon>
                        </div>
                    </div>
                </div>
            )}
        </div>
    }
}