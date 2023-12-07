import React from "react"// Ensure that you always immport this React element even if you are not using it. It's what enables the webpack compiles it.
import {Component} from "react"
//import {} from "react-icons"// U'll use it in my ooriginal project here I never imported the react-icons package.

class CodeRoom extends Component{
    constructor(props){
        super(props)
        this.state = {
            test : 1,
            taskTitle : this.props.taskTitle,
            timetaken : this.props.ctimetaken,
            screens : this.props.screens
        }
    }
    // remeber that here you can only define inbuilt properties.
    // however you can define unlimited number of user predefined functions here.
    // even this default props worked perfectly well.
    static defaultProps = {
        ctimetaken : Date.now(),
        taskTitle : "Designing a new login page",
        screens : 5
    }
    
    render(){
        let codeFrame = {
            width: "96%",
            height: "96vh",
            marginTop: "0rem",
            paddingTop: "0rem",
            borderRadius: "1rem",
            backgroundColor : "rgba(0,0,255,0.2)",
            display: "flex",
            justifyContent: "space-between",
            position : "relative"
        }
        let pStyle = {
            width: "auto",
            height: "3rem",
            padding: "0.5rem",
            position: "absolute",
            top : "0rem",
            left: "0rem",
            marginLeft: "1.5rem",
            fontWeight: "bold",
            color: "rgba(0,0,255,1)"
        }
        let h2style = {
            display : "inline",
            marginRight: "0.5rem",
            color : "rgba(0,0,0,0.5)"
        }
        let timeStyle = {
            width : "auto",
            height : "auto",
            padding : "0.5rem",
            borderRadius : "1rem",
            backgroundColor : "rgba(0,0,255,0.1)",
            color : "rgba(255,255,255,1)"
        }
        return(
            <div style={codeFrame}>
                <div style={pStyle}><h2 style={h2style}>Task:</h2>{this.state.taskTitle} <span style={timeStyle}>{this.state.timetaken}</span></div>
                <CodeScreens/>
                <Questionnaire/>
            </div>
        )
    }
}

class CodeScreens extends Component{
    constructor(props){
        super(props)
        this.state = {
            chatRooms : 4
        }
        this.codeScreenArrayCreator = this.codeScreenArrayCreator.bind(this)
    }
    codeScreenArrayCreator(){
        // a function that creates an array of  the codescreen components with keys to be sisplayed in the return statement of this render function.
        let screenComponents = []
        for(let i = 0; i <= this.state.chatRooms; i ++){
            screenComponents.push(<CodeScreen key={i}/>)    
        }
        return screenComponents
    }
    render(){
        let codeScreensFrame = {
            width: "66%",
            height: "85%",
            position : "relative",
            left : "1.5rem",
            bottom : "-5.5rem",
            backgroundColor : "transparent",
            borderRadius : "0.5rem",
            overflow : "hidden",
            display : "flex",
            justifyContent : "space-between",
            flexWrap : "wrap",
            rowGap : "1rem",
        }
        // the proper use of an array for display in react elements
        // ensure each array element here which of course just has to be a component by itself is allocated a key besides the data it's given.

        return(
            <div style={codeScreensFrame}>
                {this.codeScreenArrayCreator()}
            </div>
        )
    }
}

class CodeScreen extends Component{
    constructor(props){
        super(props)
    }
    render(){
        let screenStyle = {
            width : "49%",
            height : "16rem",
            borderRadius : "0.5rem",
            backgroundColor : "rgba(0,0,255,0.2)"
        }
        // the classname that is meant to do so,m
        // I'll use the react-icons for the icons.
        return(
            <div style={screenStyle}>
                <i className="fa  fa-address-book" aria-hidden="true"></i>
            </div>
        )
    }

}

class Questionnaire extends Component{
    constructor(props){
        super(props)
    }
    render(){
        let questionsFrame = {
            width: "28%",
            height: "100%",
            padding : "1rem",
            backgroundColor: "rgba(0,0,255,0.2)",
            borderRadius : "1rem",
            boxSizing: "border-box"
        }
        // I want this frame to be able to toggle between a chat and the task objectives.
        // so I'll need to display both the chatComponent and the objectves component.
        return(
            <div style={questionsFrame}>
                <ChatComponent/>
            </div>
        )
    }
}
class ChatComponent extends Component{
    constructor(props){
        super(props)
    }
    // so actually for the toggling of the chatComponent and the gptContainer I'll use react and not the links.
    render(){
        // If there could only be a way in which the variables inherit from each other.
        let chatStyle = {
            width: "100%",
            height: "100%",
            backgroundColor : "transparent",
            boxSizing : "border-box",
            overflow: "hidden"
        }
        let userprofiles = {
            maxWidth: "15rem",
            height: "3rem",
            display: "flex",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            columnGap: "0.5rem",
            backgroundColor: "transparent"
        }
        let userprofile = {
            width: "2rem",
            height: "2rem",
            borderRadius: "50%",
            border: "0.15rem solid rgba(0,0,255,1)"
        }
        let topDivs = {
            width: "100%",
            height: "6rem",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "transparent"
        }
        let topmostDiv = {
            width: "100%",
            height: "3rem",
            backgroundColor: "transparent",
            display: "flex",
            flexDirection: "row",
            justifyContent : "right",
            alignItems: "center",
            boxSizing : "border-box",
            gap: "0.5rem",
            padding: "0rem 0.5rem"
        }
        let precedingDiv = {
            width: "100%",
            height: "3rem",
            color: "blue",
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            boxSizing: "border-box",
            gap : "0.5rem",
            padding: "0rem 0.5rem",
            alignItems: "center",
            justifyContent: "right",
            position: "relative"
        }
        let notificationsBar = {
            width: "2.5rem",
            height: "2rem",
            border : "0.15rem solid rgba(0,0,255,1)",
            borderRadius: "0.4rem"
        }
        let myProfile = {
            width: "2rem",
            height: "2rem",
            borderRadius: "50%",
            border: "0.15rem solid rgba(0,0,255,1)"
        }
        let chatToggler = {
            width : "2rem",
            height: "2rem",
            position: "absolute",
            left: "0.5rem",
            // note that justifySelf is ignored inside a flexbox
        }
        let menuToggler = {
            width: "2rem",
            height: "2rem"
        }
        let actualChats = {
            width: "100%",
            height: "70%",
            backgroundColor : "transparent",
            boxSizing: "border-box",
            overflow: "hidden"
        }
        let singleChat = {
            maxWidth: "90%",
            margin: "0.5rem 0rem",
            height: "auto",
            padding: "0.5rem",
            boxSizing: "border-box",
            backgroundColor: "transparent",
            display: "flex",
            flexDirection: "row",
            justifyContent: "left", 
            gap: "0.5rem",
            overflow: "hidden"
        }
        let userStyle = {
            width: "2rem",
            height: "2rem",
            borderRadius: "50%",
            backgroundColor: "rgba(0,0,255,0.3)"
        }
        let chatBox = {
            maxWidth: "86%",
            height: "auto",
            borderRadius: "0.5rem",
            backgroundColor: "rgba(0,0,255,0.3)",
            color: "white",
            padding: "0.5rem",
            overflow: "hidden",
            boxSizing: "border-box"
        }
        let statusIndicator = {
            width: "100%",
            height: "2rem",
            backgroundColor: "transparent",
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            gap: "0.5rem",
            alignItems: 'center',
            padding: "0rem 0.5rem",
            boxSizing: "border-box",
            fontWeight: "bold",
            fontSize: "0.8rem"
        }
        let activeTyper = {
            width: "auto",
            height: "2rem",
            display: "flex",
            alignItems: "center"
        }
        let messageBox = {
            width: "96%",
            height: "3rem",
            margin: "auto",
            overflow: "hidden",
            padding: "0rem",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            overflow: "hidden",
            border: "0.1rem solid blue",
            borderRadius: "0.5rem",
            paddingLeft: "0.5rem" 
        }
        let actualMessageBox = {
            flex: "1 1 80%",
            height: "86%",
            border: "none",
            outline: "none",
            backgroundColor: "transparent",
            color: "rgba(0,0,0,1)",
            fontWeight: "bold",
            paddingRight:"0.5rem",
            boxSizing: "border-box"
        }

        let sendIcon = {
            width: "2rem",
            height: "2rem",
            color:"rgba(0,0,255,1)"
        }
        return(
            <div style={chatStyle}>
                <div style={topDivs}>
                    <div style={topmostDiv}>
                        <div style={notificationsBar}></div>
                        <div style={myProfile}></div>
                    </div>
                    <div style={precedingDiv}>
                        <div style={chatToggler}>icon</div>
                        <div style={userprofiles}>
                            <div style={userprofile}></div>
                            <div style={userprofile}></div>
                            <div style={userprofile}></div>
                        </div>
                        <div style={menuToggler}>icon</div>
                    </div>
                </div>
                <div style={actualChats}>
                    <div style={singleChat}>
                        <div style={userStyle}></div>
                        <div style={chatBox}>Hello over there guys</div>
                    </div>
                    <div style={singleChat}>
                        <div style={userStyle}></div>
                        <div style={chatBox}>Hello over there guys Hello over there guys Hello over there guys Hello over there guys</div>
                    </div>
                    <div style={singleChat}>
                        <div style={userStyle}></div>
                        <div style={chatBox}>Hello over there guys Hello over there guys Hello over there guys Hello over there guys</div>
                    </div>
                    <div style={singleChat}>
                        <div style={userStyle}></div>
                        <div style={chatBox}>Hello over there guys Hello over there guys Hello over there guys Hello over there guys Hello over there guys Hello over there guys Hello over there guys Hello over there guys</div>
                    </div>
                    <div style={singleChat}>
                        <div style={userStyle}></div>
                        <div style={chatBox}>Hello over there guys Hello over there guys Hello over there guys Hello over there guys</div>
                    </div>
                    <div style={singleChat}>
                        <div style={userStyle}></div>
                        <div style={chatBox}>Hello over there guys Hello over there guys Hello over there guys</div>
                    </div>
                </div>
                <div style={statusIndicator}><div style={activeTyper}>Lisa</div>typing...</div>
                <div style={messageBox}>
                    <input style={actualMessageBox} placeholder="ask here"></input>
                    <div style={sendIcon}>icon</div>
                </div>
            </div>
        )
    }
}

// so besides the chatComponent I want to have the chatGpt section, whereby someone can ask anything and get some real time response, its just simple, I'm not using chroome cause am guessing anyone at that particular time would need a very fast response.
// It should be toggled on by the toggler on the right of the chat bar.
class ChatGPT extends Component{
    constructor(props){
        super(props)
    }
    render(){
        let gptContainer = { 
            width: "100%",
            height: "100%",
            backgroundColor : "yellow",
            boxSizing : "border-box"
        }
        let topDivs = {
            width: "100%",
            height: "5rem",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "red"
        }
        let topmostDiv = {
            width: "100%",
            height: "2rem"
        }
        let notificationsBar = {

        }
        let myProfile = {}
        let actualChats = {}
        let singleChat = {}
        let userStyle = {}
        let chatBox = {}
        let statusIndicator = {}
        let messageBox = {}
        let actualMessageBox = {}
        let sendIcon = {}


        // actually the gpt takes the exact format as the normal chat, I'll give the gpt some profile pic also
        // the only thing that won't be needed is the status panel for other user profiles.
        return(
            <div style={gptContainer}>
                <div style={topDivs}>
                    <div style={topmostDiv}>
                        <div style={notificationsBar}></div>
                        <div style={myProfile}></div>
                    </div>
                </div>
                <div style={actualChats}>
                    <div style={singleChat}>
                        <div style={userStyle}></div>
                        <div style={chatBox}></div>
                    </div>
                </div>
                <div style={statusIndicator}>typing...</div>
                <div style={messageBox}>
                    <div style={actualMessageBox}>
                        <input placeholder="ask here"></input>
                    </div>
                    <div style={sendIcon}></div>
                </div>
            </div>
        )
    }
}

export default CodeRoom;