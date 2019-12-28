import React from 'react';
import "./Accounts.css"
import SvgIcon from "../svgIcon/svgIcon"
export default class SvgItem extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        this.props.getAccounts();
    }
    render(){
        return <div className="AccountsContainer">
            {this.props.data.list.length>0 && this.props.data.list.map(item=>
                <div className="accountItem" key={item.id}>
                    <SvgIcon theme="warning" type="#icon-shanchu1" svgClass="editIcon" onClick={()=>{this.props.deleteAccount(item.id)}}></SvgIcon>
                    <header>{item.title}</header>
                    <div className="accountItemAccount"><span>账号：</span><span>{item.name}</span></div>
                    <div className="accountItemAccount"><span>密码：</span><span>{item.password}</span></div>
                </div>
            )}
        </div>
    }
}
