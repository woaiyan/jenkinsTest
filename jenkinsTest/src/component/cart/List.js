import React from "react";
import {getlist} from "./action";
import {Button} from "react-bootstrap"
class ListItem extends React.Component{
    constructor(props){
        super(props);
    }
    test(){
        console.log("test")
    }
    render(){
        return (
            <li key={this.props.id} className="itemContainer" onClick={this.props.onClick}>{this.props.name}</li>
        )
    }
}
class List extends React.Component{
    constructor(props){
        super(props);
    }
    render (){
        const doclick = function(id){
            console.log(id)
        }
        // let {}
        return (
            <div>
                {this.props.lists.map(item=>
                    <ListItem key={item.id} name={item.name} id={item.id} onClick={() => this.ondoClick(item.id)}></ListItem>
                )}
            </div>
        )
    }
}
export default List
