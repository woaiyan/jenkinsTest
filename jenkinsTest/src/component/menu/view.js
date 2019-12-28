import React from "react";
import Card from "../card/card"
import {NavLink} from 'react-router-dom'
import SvgIcon from "../svgIcon/svgIcon"
import CommonNetEdit from "../menuEdit/CommonNetEdit"
import CssItem from "../menuEdit/CssItemEdit"
import PictureEdit from "../menuEdit/PictureEdit"
import SvgEdit from "../menuEdit/SvgEdit"
import FileDtaEdit from "../menuEdit/FileDataEdit"
import AccountEdit from "../menuEdit/AccountEdit"
export default class Menu extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>

                <div className="card-container">
                    <Card>
                        <SvgIcon theme="warning" type="#icon-test" svgClass="editIcon" onClick={()=>{this.props.toggleMenuStatus("CommonNet")}}></SvgIcon>
                        <NavLink to="/commonNet">常用网站</NavLink>
                        {this.props.data.CommonNet && <CommonNetEdit></CommonNetEdit>}
                    </Card>
                    <Card>
                        <SvgIcon theme="warning" type="#icon-shezhi" svgClass="editIcon" onClick={()=>{this.props.toggleMenuStatus("CssItem")}}></SvgIcon>
                        <NavLink to="/cssItem">CSS纹理</NavLink>
                        {this.props.data.CssItem && <CssItem></CssItem>}
                    </Card>
                    <Card>
                        <SvgIcon theme="warning" type="#icon-shezhi" svgClass="editIcon" onClick={()=>{this.props.toggleMenuStatus("Picture")}}></SvgIcon>
                        <NavLink to="/picture">图片</NavLink>
                        {this.props.data.Picture && <PictureEdit></PictureEdit>}
                    </Card>
                    <Card>
                        <SvgIcon theme="warning" type="#icon-shezhi" svgClass="editIcon" onClick={()=>{this.props.toggleMenuStatus("Svg")}}></SvgIcon>
                        <NavLink to="/SvgItem">svg</NavLink>
                        {this.props.data.Svg && <SvgEdit></SvgEdit>}
                    </Card>
                    <Card>
                        <SvgIcon theme="warning" type="#icon-shezhi" svgClass="editIcon" onClick={()=>{this.props.toggleMenuStatus("FileData")}}></SvgIcon>
                        <NavLink to="/fileData">文件</NavLink>
                        {this.props.data.FileData && <FileDtaEdit></FileDtaEdit>}
                    </Card>
                    <Card>
                        <SvgIcon theme="warning" type="#icon-shezhi" svgClass="editIcon" onClick={()=>{this.props.toggleMenuStatus("Accounts")}}></SvgIcon>
                        <NavLink to="/accounts">账户密码</NavLink>
                        {this.props.data.Accounts &&   <AccountEdit></AccountEdit>}
                    </Card>
                </div>
            </div>

        )
    }
}