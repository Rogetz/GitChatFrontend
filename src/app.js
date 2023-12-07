import {Component} from "react"
import React from "react";
import reactDom from "react-dom";


class HelloComponent extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <p>Hello world guys</p>
        )
    }
}
function Hello(){
    // even if you are writing an inline component you still have to declare the properties as an object.
    return (
        <p style={{width : "100%",height: "3rem",backgroundColor : "red"}}>Hello guys</p>
    )
}

export {HelloComponent,Hello};