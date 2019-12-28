import React from "react";
import "./picture.css"

const  Picturec = class PictureC extends React.Component {
    constructor(props){
        super(props)
        this.state={data:0}
        this.add = this.add.bind(this);
    }
    add(){
        this.setState({
            data:++this.state.data
        })
    }
    componentWillUpdate(){
        console.log("PictureC update")
    }
    render() {
        return (
            <div className="picutreC" onClick={this.add}>
                {this.state.data}
            </div>
        )
    }
}

export default Picturec