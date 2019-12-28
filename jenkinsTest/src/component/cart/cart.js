import React from "react";
import {Alert} from "react-bootstrap"
import {Button} from "react-bootstrap"
import {add,getlist} from "./action"
import ListContainer from "./ListContainer"
import { connect } from 'react-redux'
const  cart = class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.add = this.add.bind(this)
        this.clear = this.clear.bind(this)
    }
    componentDidMount() {
        this.props.dispatch(add());
    }
    componentWillMount() {
        this.props.dispatch(add());
    }
    add(){
        this.props.dispatch(add());
    }
    clear(){
        this.props.dispatch(getlist());
    }
    render() {
        return (
            <div>
                <ListContainer></ListContainer>
                <Button onClick={this.add}>add</Button>
                <Button onClick={this.clear}>clear</Button>
            </div>
        )
    }
}

export default connect()(cart)