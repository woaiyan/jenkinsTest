import React from "react";
import { connect } from 'react-redux'
import "./goods.css"
import {getList} from "../goods/action";
const mapStateToProps = (state) => {

    return {
        data: state.Goods
    }
}
const  Goods = class Cart extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.dispatch(getList());
    }
    render() {
        return (
            <div>
                {this.props.data.goodsList.length>0 && this.props.data.goodsList.map(good=>
                    <div className="goodsContainer" key={good.goodName}>{good.goodName}</div>
                )}
            </div>
        )
    }
}
export default connect(mapStateToProps)(Goods)