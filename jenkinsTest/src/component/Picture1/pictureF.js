import React from "react";
import PictureC from "./pictureC"

const  PictureF = class PictureF extends React.Component {
    constructor(props){
        super(props)
        this.updataP = this.updataP.bind(this);
    }
    updataP(){
        this.forceUpdate()
    }
    componentWillUpdate(){
        console.log("PictureF update")
    }
    render() {
        return (
            <div>
               <PictureC></PictureC>
                <button onClick={this.updataP}>updata</button>
            </div>
        )
    }
}

export default PictureF