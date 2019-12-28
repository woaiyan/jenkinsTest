import React from 'react';
import "./CommonNet.css"
import SvgIcon from "../svgIcon/svgIcon"
export default class CommonNet extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        this.props.getCommonNet();
    }
    render(){
        return <div>

            {this.props.data.list.length>0 && this.props.data.list.map(item=>
                <div className="CommonNetItem" key={item.id}>
                    <div className="CommonNetItem-name line">{item.name}</div>
                    <div className="CommonNetItem-site line">{item.path}</div>
                    <SvgIcon theme="warning" type="#icon-shanchu1" svgClass="editIcon" onClick={()=>{this.props.deleteCommonNetSync(item.id)}}></SvgIcon>
                </div>
            )}
        </div>
    }
}

