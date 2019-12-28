import React from 'react';
import "./card.css"
class Card extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return <div className="card-item-container" onClick={this.props.onClick}>
            {this.props.children}
        </div>
    }
}


export default Card