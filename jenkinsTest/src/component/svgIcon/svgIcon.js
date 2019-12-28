import React from "react";
import "./svgIcon.css"
const  SvgIcon = class svgIcon extends React.Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.theme !== nextProps.theme) {
            return true;
        }
        if (this.props.type !== nextProps.type) {
            return true;
        }
        return false;
    }
    render() {
        let type = this.props.type;
        let myTheme = this.props.theme ? "icon " + this.props.theme : "icon";
        return (
                <svg className={[myTheme,this.props.svgClass].join(" ")} aria-hidden="true" onClick={this.props.onClick}>
                    <use xlinkHref={type}></use>
                </svg>
        )
    }
}
export default SvgIcon