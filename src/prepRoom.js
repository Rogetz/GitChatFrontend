import React, { useReducer } from "react"
import {Component,useRef,useEffect,useContext,useState,createContext} from "react"

import {FaOptinMonster,FaVolumeUp,FaVolumeDown,FaVolumeMute,FaShare,FaVideo, FaCommentDots, FaPhoneVolume, FaRegCommentDots, FaVolumeOff, FaTelegramPlane, FaPencilAlt, FaPenFancy,FaBackward, FaBackspace, FaMobile, FaPhone, FaFile, FaArrowRight, FaArrowLeft, FaCaretRight, FaCaretLeft, FaCommentDollar, FaCommentsDollar, FaCheck, FaRegIdBadge} from "react-icons/fa"
import "./prepRoom.css"
import {reverseSorter} from "./frontUtilities.js"

import {timeUpdating,daySetter} from "./timeUpdater.js"

import {useSelector,useDispatch} from "react-redux"

import {vGroupUpdate,inboxUpdate,timeUpdater,groupsInvolvedUpdater,onlineUsersUpdate,lastSeenUsersUpdate,lastSeenUsersMultiUpdate} from "./states/newReducer"
import { DateTime } from "luxon"




// io server functionality
// so I want to create the server such that its work is just to receive sockets and create sockets. It will also create the groups and know how to assign each group to every one.
// sp for the  chat connection i want each user to have an identity so each time a new group/room is created,its created with a combined name of the two ids forming the group/room

//chat gui program formula
//for the chats, use a component such that you create a  new chat box component that receives the message props.
// then each of these props will always be called inside the greater chat gui so that it appends itself each time.

// I'll combine both files into one later using the routers so for now I'm just compiling them separately on webpack but later they'll all have one entry point
function PrepRoom(){

    const chatInputRef = useRef(null)    
    const [profileViewState,setProfileViewState] = useState(false)

    //what's to be put in the profile is also to be set by the descendant component.
    // the profile data should be an object that I can set the attributes of the profile as I wish.
    const [profileData,setProfileData] = useState()


    // use the name of the attribute in the reducer
    /*const token = useSelector(state => state.user.token)
    // This will be set by the various individual status Icons,and the use context will be used to pass over the setTheChatState
    useEffect(function(){
        let socket = io("ws://localhost:4003",{
            auth : {
                token : token
            }
        })
        // chat message from another user.
        socket.on("chat",function(chatDetails){
            // these are the details of the data from another socket, not your data.
            let userName = chatDetails.userName
            let message = chatDetails.message
            // this data should find it's way to be displayed.
        })
    },[])*/
    //this is a temporary implementation on the group button but the functionality is the same.
    // this works like the case of clicking a user icon.
    return (
        <div className="chat-room">
            <div className="upper-div">
                <div className="upper-left-side">
                    <i className="fa-solid fa-video fa-fw fa-lg" aria-hidden="true"></i>
                    <div className="project-div">
                        <div className="project-title">(Backlog 03)</div><span className="hiphen">-</span>
                        <div className="task-title">Redesigning the login page</div>
                        <div className="time-display">01 : 28 : 05</div>
                    </div>
                </div>
                <div className="upper-right-side">
                    <div className="search-with-icon">
                        <i className="fa-solid fa-magnifying-glass fa-fw" aria-hidden="true"></i>
                        <input type="text" name="" id="search-bar" placeholder="search here..."/>
                    </div>
                    <div className="persona-profile"><img loading="lazy" src="../Mkuu.jpg" className="profile-img" alt="profile-picture"/></div>
                    <i className="fa-solid drop-down-div fa-arrow-down fa-fw" aria-hidden="true"></i>
                </div>
            </div>
            <div className="main-div">
                <div className="right-side">
                    <div className="upper-videos">
                        <div className="upper-video"><img className="little-video" loading="lazy" src="../ShoutyProject/ladiesLaughing.jpg" alt="avatar"/></div>
                        <div className="upper-video"><img className="little-video" loading="lazy" src="../ShoutyProject/ladyGreetingInLaptop.jpg" alt="avatar"/></div>
                        <div className="upper-video"><img className="little-video" loading="lazy" src="../ShoutyProject/aCloseChat.jpg" alt="avatar"/></div>
                        <div className="upper-video"><img className="little-video" loading="lazy" src="../ShoutyProject/peopleCongregating.jpg" alt="avatar"/></div>
                        <div className="upper-video"><img className="little-video" loading="lazy" src="../female-taking-notes-and-browsing-laptop.jpg" alt="avatar"/></div>     
                        <div className="upper-video"><img className="little-video" loading="lazy" src="../ShoutyProject/peopleGreeting.jpg" alt="avatar"/></div>
                    </div>
                    <div className="main-video">
                        <div className="task-summary">
                            <div className="target-title">Task target objectives</div>
                            <div className="target-wrappers">
                                <div className="target">
                                    <div className="title"><i className="fa title-icon fa-pen-clip" aria-hidden="true"><FaPenFancy/></i><span className="actual-title">Logo design</span></div>
                                    <div className="details">We want to design something special for you guys</div>
                                </div>
                                <div className="target">
                                    <div className="title"><i className="fa title-icon fa-pen-clip" aria-hidden="true"><FaPenFancy/></i><span className="actual-title">Logo design</span></div>
                                    <div className="details">We want to design something special for you guys</div>
                                </div>
                                <div className="target">
                                    <div className="title"><i className="fa title-icon fa-pen-clip" aria-hidden="true"><FaPenFancy/></i><span className="actual-title">Logo design</span></div>
                                    <div className="details">We want to design something special for you guys</div>
                                </div>
                                <div className="target">
                                    <div className="title"><i className="fa title-icon fa-pen-clip" aria-hidden="true"><FaPenFancy/></i><span className="actual-title">Logo design</span></div>
                                    <div className="details">We want to design something special for you guys</div>
                                </div>
                                <div className="target">
                                    <div className="title"><i className="fa title-icon fa-pen-clip" aria-hidden="true"><FaPenFancy/></i><span className="actual-title">Logo design</span></div>
                                    <div className="details">We want to design something special for you guys</div>
                                </div>
                            </div>
                        </div>
                        <div className="actual-video">
                            <img src="../ShoutyProject/ladyLaughingInLaptop.jpg" alt="temporary pic"/>
                            <div className="name-tag">Ronny Ogeta</div>
                            <div className="translation-tag">Lets try making a new login page with stronger authentication. There's been a lot of changes that have been proposed by the new members that I feel like need to be taken into keen consideration guys</div>
                        </div>
                    </div>
                    <div className="lower-menu-bar">
                        <div className="left-menu">
                            <span className="menu-text">copy link</span>
                            <i className="fa fa-copy menu-icon" aria-hidden="true"></i>
                        </div>
                        <div className="center-menu">
                            <i className="fa " aria-hidden="true"><FaVolumeMute/></i>
                            <i className="fa " aria-hidden="true"><FaVideo/></i>
                            <i className="fa " aria-hidden="true"><FaShare/></i>
                            <i className="fa " aria-hidden="true"><FaVolumeUp/></i>
                            <i className="fa " aria-hidden="true"><FaVolumeOff/></i>
                            <i className="fa " aria-hidden="true"><FaRegCommentDots/></i>
                        </div>
                        <div className="right-menu"><button>leave meeting</button> </div>
                    </div>
                </div>
                <div className="left-side">
                    {profileViewState == false ?
                        <StatusIcons profileState={profileViewState}/>
                    :
                        <div>hello there guys</div>
                    }
                </div>
            </div>
        </div>
    )
}

// this part is seemingly unneccessary for the chat bar I want to display.
/*            <div className="status-icon">
            </div>
            <div className="chat-items-wrapper">
                {/*this is the state that will be used for passing in the chat components from where they are fetched}
            </div>

 */

// status icons will be checking the storage for the number of users through a websocket by itself and updating itself
// New update is that I'll be obtaining the no of users from the database
// It has a child called statusIcon which are the actual icons for each individual user.
function StatusIcons(props){
    const reduxDispatch = useDispatch()
    const [deliveryStateChange,setDeliveryStateChange] = useState("sent")
    const newToken = useSelector(state => state.user.token)
    const userName = useSelector(state => state.user.userName)
    const globalVGroup = useSelector(state => state.user.globalVGroup)
    // also call for the inboxCaller by selecting it.
    const inbox = useSelector(state => state.user.inbox)
    const today = useSelector(state => state.chat.today)
    const groupsInvolved = useSelector(state => state.chat.groupsInvolved)
    const onlineUsers = useSelector(state => state.chat.onlineUsers)
    const lastSeenUsers = useSelector(state => state.chat.lastSeenUsers)

    //The refs
    const emptyDivRef = useRef()

    // This will also be set by the status icon for easibility
    const [chatData,setChatData] = useState()
    const [messages,setMessages] = useState([])
    const [singleChats,setSingleChats] = useState([])
    const [vGroupState,setVGroupState] = useState()
    const [typingState,setTypingState] = useState(false)
    const [typingText,setTypingText] = useState("")
    const [sColor,setSColor] = useState("blue")
    const socket = useSelector(state => state.user.socket)
    const [backButtonProp,setBackButtonProp] = useState(null)
    const [groupDataState,setGroupDataState] = useState(null)

    
    // gui/view states
    const [chatState,setChatState] = useState(false)
    const [onlineStatus,setOnlineStatus] = useState("")
    const [startChatState,setStartChatState] = useState(false)
    const [groupState,setGroupState] = useState(false)
    const [optionsBorder,setOptionsBorder] = useState("0.2rem solid rgba(0,0,0,1)")
    const [optionColor,setOptionColor] = useState("rgba(0,0,255,1)")
    const [optionsBorder2,setOptionsBorder2] = useState("0.2rem solid rgba(0,0,0,1)")
    const [optionColor2,setOptionColor2] = useState("rgba(0,0,255,1)")    
    const [backArrowColorState,setBackArrowColorState] = useState("rgba(255,0,0,1)")

    //functional in a way states.
    const [chatRows,setChatRows] = useState()
    

    const [icons,dispatch] = useReducer(function(state,action){
        if(action.type == "newConnection"){
            // Each array component should have a unique key in react.
            // temporarily am using the dynamic length of the array as it
            // arrays are immutable as states in react so this won't work
            state.push(<StatusIcon key={finalResults.length} messageUpdater={setMessages} chatStateChanger={setChatState} userData={{userName: action.userName,userProfile: "avatar"}}/>)            
        }
        // I'll also try and see if the initial array can be a state.
    },[])
    //notice that the usernames will be generated automaticaly,these are just temporary names
    //I'm using the useState to allow for tracking the array.
    //let finalResults = [] // actually realized that if I use a const keyword I cannot reassign the variable once more. e.g to make it point to something else.
    let [finalResults,setFinalResults] = useState([])
    //reduxDispatch(vGroupUpdate({globalVGroup: "testVGROUP"}))    
    useEffect(function(){
        setInterval(timeUpdating(reduxDispatch,timeUpdater),20000)
    },[])
    useEffect(function(){
        if(groupsInvolved.length > 0){
            console.log("hooray, groups involved is not null")
            socket.emit("online-fetch",{groupsToFetch:groupsInvolved})
        }
        // let it have chatRows as its dependency since its the firstone before anything
    },[chatData])
    useEffect(function(){
        socket.on("online-members",function({userName}){
            reduxDispatch(onlineUsersUpdate({userOnline: userName}))
            console.log("online members of the statusIcons")
            if(chatData != null){
                if(chatData.group.trim().toLowerCase() == userName.trim().toLowerCase()){
                    setOnlineStatus("online")
                }            
            }
        })
    },[chatData])
    useEffect(function(){
        socket.on("user-offline",function({userName}){
            reduxDispatch(lastSeenUsersUpdate({lastSeenUser: userName}))
        })
    },[chatData])
    useEffect(function(){
        socket.on("users-fetched",function({lastSeens}){
        reduxDispatch(lastSeenUsersMultiUpdate({lastSeens: lastSeens}))
        })
    },[chatData])
    useEffect(function(){

        socket.on("user-joining",function({userName}){
            if(chatData != null){
                if(chatData.group.trim().toLowerCase() == userName.trim().toLowerCase()){
                    setOnlineStatus("online")
                }
            }
        })
        socket.on("user-offline",function({userName,time}){
            if(chatData != null){
                reduxDispatch(lastSeenUsersUpdate({lastSeenUser: userName,time:time}))
                if(chatData.group.trim().toLowerCase() == userName.trim().toLowerCase()){
                    if(time != null){
                        let newTime = time.split(".")[1].slice(0,5)
                        setOnlineStatus(`last seen: ${newTime}`)
                    }
                    else{
                        setOnlineStatus("")
                    }
                }
                // include the last seen finally. in the user-offline if there's a last seen instead of
            }
        })
    },[chatData])
    useEffect(function(){
        // the details is an object with a userName attribute.
        socket.on("online-update",function(details){
            if(chatRows != null){
                console.log(`groupsInvolved first index at statusIcons: ${groupsInvolved[0]}`)
                console.log(`todays value is: ${today}`)
                socket.emit("online-broadcast",{groups: groupsInvolved})    
            }
        })
    },[chatData])
    // so ensure that the typing state is not modified within this same function but elsewehere since it's using it as a dependency.
    useEffect(function(){
        if(typingState == true){
            socket.emit("typing",{vGroup: vGroupState})
        }
        else{
            socket.emit("not-typing",{vGroup:vGroupState})
        }
    },[typingState])
    useEffect(function(){
        socket.on("delivery-fetch-needed",function({vUser}){
            if(singleChats != null && singleChats.length > 0){
                // for delivered and it must send the vUser to send to as well
                socket.emit("delivery-fetch-updated",{vUser:vUser,deliveryState: "seen"})
            }
            else if(chatRows != null && chatRows.length > 0){
                // for delivered and it must send the vUser to send to as well
                socket.emit("delivery-fetch-updated",{vUser:vUser,deliveryState: "delivered"})
            }
        })
    },[chatRows,singleChats])
    useEffect(function(){
        socket.emit("groups-retrieve","")
        socket.on("groups-retrieved",function(data){
            //data received here is an array.
            if(data != null){
                let newchatRows = data.map(function(value,index){
                    // emit the delivered event.
                    socket.emit("chat-delivery-update",{deliveryState:"delivered",vGroup:value.vGroup})
                    socket.emit("delivery-fetch",{vGroup:value.vGroup})    
                    // get an update on delivery updates
                    // add each group to the groups reduxState.
                    // check the concept of the action in as
                    // also try dispatching this action from the chat row component
                    reduxDispatch(groupsInvolvedUpdater({groupInvolved: value.vGroup})) 
                    console.log(`latest user from the status icons: ${value.latestUser}`)                   
                    return <ChatRow key={index} data={{deliveryState:value.deliveryState,backButtonProp:backButtonProp,setVGroupStateValue:setVGroupState,socketValue:socket,setChatDataValue: setChatData,setChatStateValue:setChatState,vGroup: value.vGroup,userName: value.group,latestUser:value.latestUser,latestChat: value.lastChat,latestTime:value.time,profileUrl: value.profileUrl}} />
                })
                setChatRows(newchatRows)
            }
            else{
                setChatRows(
                    <div style={nullStyling}>This is where your chat messages will appear.</div>
                )
            }
        })
        socket.on("chats-retrieved",function(groupData){
            if(groupData != null){
                setGroupDataState(groupData)
                setChatData(vGroup)
                socket.emit("chat-delivery-update",{deliveryState:"seen",vGroup:groupData.vGroup})
                let vGroup = groupData.vGroup
                setChatState(true)
                console.log(`vGroup from chatRow: ${vGroup}`)
                setVGroupState(vGroup)
                reduxDispatch(vGroupUpdate({globalVGroup: vGroup})) 
                socket.emit("delivery-fetch",{vGroup:groupData.vGroup})            
            }       
        })
    },[chatState,backButtonProp,chatData])
    useEffect(function(){
        if(chatData != null && groupDataState != null){
            let groupData = groupDataState             
            let dates = []
            let todaysTime = today.split(".")[1]
            let todaysDate = today.split(".")[0]
            let todaysDay = Number(todaysDate.split("/")[0])
            let todaysMonth = Number(todaysDate.split("/")[1])
            let finalityArray = groupData.chats.map(function(message,index){
                let actualTime = message.time.split(".")[1].substring(0,5)
                let actualDate = message.time.split(".")[0]
                let weekDay = message.time.split(".")[2]
                let day = Number(actualDate.split("/")[0])
                let month = Number(actualDate.split("/")[1])
                // for today
                let textValue = ""
                if(day == todaysDay && month == todaysMonth){
                    if(! dates.includes(actualDate)){
                        dates.push(actualDate)
                        textValue = <div className="date-class">today</div>
                    }
                    if(message.userName.trim().toLowerCase() == userName.trim().toLowerCase()){
                        return (<div style={{width: "auto",height: "auto"}}>
                            {textValue}
                            <SingleChat key={message.time+message.message.substr(0,5)} data={{profileName: chatData.group,deliveryState:message.deliveryState,yourState:true,time:actualTime,message: message.message}}/>    
                        </div>)
                    }
                    else{
                        return (<div style={{width: "auto",height: "auto"}}>
                        {textValue}
                        <SingleChat key={message.time+message.message.substr(0,5)} data={{profileName: chatData.group,deliveryState:message.deliveryState,yourState:false,time:actualTime,message: message.message}}/>    
                    </div>)
                    }                       
                }
                // for yesterday
                else if((todaysDay - day) == 1 && month == todaysMonth){
                    if(! dates.includes(actualDate)){
                        dates.push(actualDate)
                        textValue = <div className="date-class">yesterday</div>
                    }
                    if(message.userName.trim().toLowerCase() == userName.trim().toLowerCase()){
                        return (<div style={{width: "auto",height: "auto"}}>
                            {textValue}
                            <SingleChat key={message.time+message.message.substr(0,5)} data={{profileName: chatData.group,deliveryState:message.deliveryState,yourState:true,time:actualTime,message: message.message}}/>    
                        </div>)
                    }
                    else{
                        return (<div style={{width: "auto",height: "auto"}}>
                        {textValue}
                        <SingleChat key={message.time+message.message.substr(0,5)} data={{profileName: chatData.group,deliveryState:message.deliveryState,yourState:false,time:actualTime,message: message.message}}/>    
                    </div>)
                    }                       
                }
                // for the month
                else if((todaysDay - day) < 7 &&  todaysMonth == month){
                    if(! dates.includes(actualDate)){
                        dates.push(actualDate)
                        textValue = <div className="date-class">{weekDay}</div>
                    }
                    if(message.userName.trim().toLowerCase() == userName.trim().toLowerCase()){
                        return (<div style={{width: "auto",height: "auto"}}>
                            {textValue}
                            <SingleChat key={message.time+message.message.substr(0,5)} data={{profileName: chatData.group,deliveryState:message.deliveryState,yourState:true,time:actualTime,message: message.message}}/>    
                        </div>)
                    }
                    else{
                        return (<div style={{width: "auto",height: "auto"}}>
                        {textValue}
                        <SingleChat key={message.time+message.message.substr(0,5)} data={{profileName: chatData.group,deliveryState:message.deliveryState,yourState:false,time:actualTime,message: message.message}}/>    
                    </div>)
                    }
                }
                else{
                    if(! dates.includes(actualDate)){
                        dates.push(actualDate)
                        textValue = <div className="date-class">{actualDate}</div>
                    }          
                    if(message.userName.trim().toLowerCase() == userName.trim().toLowerCase()){
                        return (<div style={{width: "auto",height: "auto"}}>
                            {textValue}
                            <SingleChat key={message.time+message.message.substr(0,5)} data={{profileName: chatData.group,deliveryState:message.deliveryState,yourState:true,time:actualTime,message: message.message}}/>    
                        </div>)
                    }
                    else{
                        return (<div style={{width: "auto",height: "auto"}}>
                        {textValue}
                        <SingleChat key={message.time+message.message.substr(0,5)} data={{profileName: chatData.group,deliveryState:message.deliveryState,yourState:false,time:actualTime,message: message.message}}/>    
                    </div>)
                    }
    
                }      
            })        
            setSingleChats(finalityArray)
        }
    },[chatData,groupDataState])
    useEffect(function(){
        if(singleChats.length > 0 && emptyDivRef.current != null){
            emptyDivRef.current.scrollIntoView({behavior: "smooth",block: "end"})
        }
    },[singleChats])
    let onlineCalc =function(profileName){
        if(onlineUsers.includes(profileName)){
            return "online"
        }
        else if(lastSeenUsers.includes(profileName)){
            return `last seen: ${lastSeenUsers[lastSeenUsers.indexOf(profileName)]}`
        }
    }
    // pass it some parameters
    let nullStyling = {
        width: "100%",
        height: "100%",
        color:"white",
        backgroundColor: "transparent"
    }
    //pass the empty bracket for useefect to run only once.
    /*useEffect(function(){
        const socket = io(process.env.SOCKET_SERVER,{
            auth : {
                // use a different name for what you're passing to the token
                token : newToken
            }
        })
        socket.on("newConnection",function(user){
            // add the number of status icons
            // find a way of attaching each userName to the status icons.
            let userName = user.userName
            dispatch({type: "newConnection",userName: userName})
        })

    },[])*/
    // the chat handler    
    let inboxTrigger = function(message,vGroupState,chatData,singleChats){
        setTypingState("false")
        setBackButtonProp({propVGroup: vGroupState,message: message.message,time: message.time})
        //work with the chatData for the sake of sorting before displaying it in the
        //console.log(`inbox value: ${message} and globalVGROUP VALUE: ${globalVGroup} and chatData: ${chatData}`)
        if(vGroupState != null && message != null){
            // for updating the state that it indeed has been delivered.
            console.log(`current vGroup value: ${vGroupState}`)
            // find a way of incorporating this to the current chat state.
            if(message.vGroup.trim().toLowerCase() == vGroupState.trim().toLowerCase()){
                console.log("vGroup matched")
                console.log(`message found: ${message.message}`)
                /*
                let actualTime = message.time.split(".")[1].substring(0,5)
                let actualDate = message.time.split(".")[0]                    
                if(message.userName.trim().toLowerCase() == userName.trim().toLowerCase()){
                    // arrays are immutable as states in react, confirmed it.
                    singleChats.push(<SingleChat key={message.time+message.message.substr(0,5)} data={{yourState:true,time:actualTime,message: message.message}}/>)    
                }
                else{
                    singleChats.push(<SingleChat key={message.time+message.message.substr(0,5)} data={{yourState:false,time:actualTime,message: message.message}}/>)           
                }
                //console.log(`chat data contents: ${chatData}`)
                
                //console.log(`new array last element after assigning chatData: ${JSON.stringify(newArray[newArray.length-1])}`)
                //newArray.push(message)*/
                let newChatData = chatData
                newChatData.chats.push(message)
                newChatData.chats.sort(reverseSorter)
                setChatData(newChatData)
                //console.log(`new array last after pushing message: ${JSON.stringify(newArray[newArray.length-1])}`)
                //newArray.sort(reverseSorter)
                // array of all recorded dates already
                let dates = []
                const todaysDate = today.split(".")[0]
                const todaysDay = Number(todaysDate.split("/")[0])
                const todaysMonth = Number(todaysDate.split("/")[1])
                let finalArray = newChatData.chats.map(function(message){
                    let actualTime = message.time.split(".")[1].substring(0,5)
                    let actualDate = message.time.split(".")[0]
                    let day = Number(actualDate.split("/")[0])
                    let month = Number(actualDate.split("/")[1])
                    let weekDay = message.time.split(".")[2]
                    // for today
                    let textValue = ""
                    if(day == todaysDay && month == todaysMonth){
                        if(! dates.includes(actualDate)){
                            dates.push(actualDate)
                            textValue = <div className="date-class">today</div>
                        }
                        if(message.userName.trim().toLowerCase() == userName.trim().toLowerCase()){
                            return (<div style={{width: "auto",height: "auto"}}>
                                {textValue}
                                <SingleChat key={message.time+message.message.substr(0,5)} data={{deliveryState:deliveryStateChange,yourState:true,time:actualTime,message: message.message}}/>    
                            </div>)
                        }
                        else{
                            return (<div style={{width: "auto",height: "auto"}}>
                            {textValue}
                            <SingleChat key={message.time+message.message.substr(0,5)} data={{deliveryState:deliveryStateChange,yourState:false,time:actualTime,message: message.message}}/>    
                        </div>)
                        }                       
                    }
                    // for yesterday
                    else if((todaysDay - day) == 1 && month == todaysMonth){
                        if(! dates.includes(actualDate)){
                            dates.push(actualDate)
                            textValue = <div className="date-class">yesterday</div>
                        }
                        if(message.userName.trim().toLowerCase() == userName.trim().toLowerCase()){
                            return (<div style={{width: "auto",height: "auto"}}>
                                {textValue}
                                <SingleChat key={message.time+message.message.substr(0,5)} data={{deliveryState:deliveryStateChange,yourState:true,time:actualTime,message: message.message}}/>    
                            </div>)
                        }
                        else{
                            return (<div style={{width: "auto",height: "auto"}}>
                            {textValue}
                            <SingleChat key={message.time+message.message.substr(0,5)} data={{deliveryState:deliveryStateChange,yourState:false,time:actualTime,message: message.message}}/>    
                        </div>)
                        }                       
                    }
                    // for the month
                    else if((todaysDay - day) < 7 && todaysMonth == month){
                        if(! dates.includes(actualDate)){
                            dates.push(actualDate)
                            textValue = <div className="date-class">{weekDay}</div>
                        }
                        if(message.userName.trim().toLowerCase() == userName.trim().toLowerCase()){
                            return (<div style={{width: "auto",height: "auto"}}>
                                {textValue}
                                <SingleChat key={message.time+message.message.substr(0,5)} data={{deliveryState:deliveryStateChange,yourState:true,time:actualTime,message: message.message}}/>    
                            </div>)
                        }
                        else{
                            return (<div style={{width: "auto",height: "auto"}}>
                            {textValue}
                            <SingleChat key={message.time+message.message.substr(0,5)} data={{deliveryState:deliveryStateChange,yourState:false,time:actualTime,message: message.message}}/>    
                        </div>)
                        }
                    }
                    else{
                        if(! dates.includes(actualDate)){
                            dates.push(actualDate)
                            textValue = <div className="date-class">{actualDate}</div>
                        }          
                        if(message.userName.trim().toLowerCase() == userName.trim().toLowerCase()){
                            return (<div style={{width: "auto",height: "auto"}}>
                                {textValue}
                                <SingleChat key={message.time+message.message.substr(0,5)} data={{deliveryState:deliveryStateChange,yourState:true,time:actualTime,message: message.message}}/>    
                            </div>)
                        }
                        else{
                            return (<div style={{width: "auto",height: "auto"}}>
                            {textValue}
                            <SingleChat key={message.time+message.message.substr(0,5)} data={{deliveryState:deliveryStateChange,yourState:false,time:actualTime,message: message.message}}/>    
                        </div>)
                        }

                    }      
                })
                setSingleChats(finalArray)
            }    
        }
        else{
            console.log("either inbox or global group is null")
        }
    }

    let chatHandler = function(e){
        e.preventDefault()
        setTypingState(false)
        console.log(`global vGroup as per the chatHandler: ${globalVGroup}`)
        // note that the userName here should be the userName of the one receiving the message
        // design the chatIcons that stand for each userName,to be used here.
        let messageFound = e.target.chatText.value
        e.target.chatText.value = ""
        // all of the chats start at the sent stage, however I'll create an event for specifically updating the time range, or rather the deliveryStates that have changed.
        let chatDetails = {deliveryState: "sent",group: vGroupState,message: messageFound}
        //let chatDetails = {userName : userName,message : messageFound}
        //socket.emit("chatRequest",chatDetails)
        //find a way of getting the vGroup from the chatRow component.             
        socket.emit("chat",chatDetails)
        //inboxTrigger()
        //dispatchFunction(vGroupUpdate({globalVGroup: vGroupState}))
    }
    //so we change the deliveryState from here and whenever it changes we send a message to the server to update it as well as the relevant user to update it from his or her end.
    
    useEffect(function(){
        if(vGroupState != null || vGroupState != undefined){
            if(vGroupState.indexOf("-") != -1){
                // for the chats.
                socket.emit("chat-delivery-update",{deliveryState: deliveryStateChange,vGroup:vGroupState})
            }
            else{
                // for the groups.
                socket.emit("group-delivery-update",{deliveryState: deliveryStateChange})
            }
        }
    },[deliveryStateChange,vGroupState])
    let inboxEvent = function(){socket.on("inbox",(message) => {
        console.log("inbox received")
        if(vGroupState != null){
            socket.emit("chat-delivery-state-initiator",{deliveryStatus:"seen",vGroup:vGroupState})
        }
        //set it an event to be emitted.
        // not that rerenders don't occur if its the same values.
        setDeliveryStateChange("seen")// howver once set I need every single chat in the current view to use it.
        // return this for the inbox as well in case it fails.
        //reduxDispatch(inboxUpdate({inbox: message}))
        console.log(`vGroupstate and chatData and globalVGroup as per inbox socket Event: ${vGroupState}  :${chatData} : ${globalVGroup}`)
        inboxTrigger(message,vGroupState,chatData,singleChats)
    })}
    useEffect(function(){
        socket.on("typed",function({userName}){
            if(chatData != null){
                if(chatData.group.trim().toLowerCase() == userName.trim().toLowerCase()){
                    setOnlineStatus("typing...")
                    setSColor("rgba(0,255,0,1)")
                }
            }
        })
        socket.on("not-typed",function({userName}){
            if(chatData != null){
                if(chatData.group.trim().toLowerCase() == userName.trim().toLowerCase()){
                    setSColor("rgba(0,0,255,1)")
                    setOnlineStatus("online")
                }
            }
        })
    },[chatData])

    useEffect(function(){
        inboxEvent()
        //remember that if your function is dependent on a state, ensure you don't change the state in the same function that will cause an infinite rerender
    },[vGroupState,deliveryStateChange])

    let statusIconsStyle = {
        width: "98%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "right",
        justifyContent: "right",
        backgroundColor: "transparent",
        borderRadius: "1rem",
        borderTopRightRadius: "0rem",
        margin: "0rem",
        boxSizing: "border-box",
        position: "relative"
    }
    let statusContainer = {
        width: "100%",
        height: "10%",
        display: "flex",
        overflow: "hidden"
    }
    let chatView = {
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
        position: "relative",
        display: "flex",
        alignItems: "right",
        justifyContent: "right",
        alignItems: "right",
        boxSizing: "border-box",
        borderRadius: "1rem",
    }
    let chatBoxes = {
        width: "100%",
        height: "87%",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        borderRadius: "0rem",
        borderBottomRightRadius: "1rem",
        borderBottomLeftRadius: "1rem",
        borderTopLeftRadius: "1rem",
        position: "relative"
    }
    let submitBtn = {
        outline: "none",
        backgroundColor: "transparent",
        border: "none",
        width: "fit-content",
        height: "fit-content"
    }
    let defaultView = {
        width: "100%",
        height: "99%",
        borderRadius: "1rem",
        padding: "2rem 0.5rem",
        paddingLeft: "0rem",
        paddingRight: "0rem",
        backgroundColor: "transparent",
        position: "relative",
        border: "0.1rem solid rgba(255,255,255,0.5)",
    }
    let chatBox = {
        maxWidth: "100%",
        height: "auto",
        marginRight: "0rem",
        borderRadius: "0.5rem",
        borderTopLeftRadius: "0rem",
        padding: "0.3rem",
        textAlign: "left",
        fontSize: "1rem",
        backgroundColor: "rgba(0,0,255,1)",
        fontWeight: "bold",
        fontFamily: "Times New Roman",
        color: "rgba(255,255,255,1)"
    }
    let yourStyling = {
        maxWidth: "100%",
        height: "auto",
        borderRadius: "0.5rem",
        borderTopRightRadius: "0rem",
        backgroundColor: "rgba(0,0,255,1)",
        color: "rgba(255,255,255,1)",
        padding: "0.3rem",
        textAlign: "right",
        fontSize: "1rem",
        fontWeight: "bold",
        fontFamily: "Times New Roman",
        position: "relative",
    }
    let profileDesign ={
        width: "1.5rem",
        height: "1.5rem",
        borderRadius: "50%",
        backgroundColor: "rgba(255,255,255,1)",
        marginRight: "0rem"
    }
    let arrowStyle = {
        width: "0.01rem",
        height: "0rem",
        borderWidth: "0.5rem",
        borderStyle: "solid",
        borderColor: "rgba(0,0,255,1) rgba(0,0,255,1) transparent transparent"
    }
    let  youArrow = {
        width: "0.01rem",
        height: "0rem",
        borderWidth: "0.5rem",
        borderStyle: "solid",
        borderColor: "rgba(0,0,255,1) transparent transparent rgba(0,0,255,1)"
    }
    let statusIconStyle ={
        width: "3rem",
        height: "3rem",
        borderRadius: "50%",
        backgroundColor: "rgba(0,0,255,1)",
        margin: "0.2rem",
        cursor: "pointer"
    }
    let profileHandler = function(e){
        // for allowing someone to view someone's gitChat profile in a whatsapp way but with different contents and menus.
    }
    let profileBar = {
        width: "97%",
        height: "4rem",
        overflow: "hidden",
        gap: "0.5rem",
        borderRadius: "0rem",
        borderTopLeftRadius: "2rem",
        borderBottomLeftRadius: "2rem",
        backgroundColor: "rgba(255,255,255,1)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "0rem 0.5rem",
        marginBottom: "0.5rem",
        marginRight: "0rem",
        position: "relative",
        zIndex: "50"
    }
    let profileName = {
        color: "rgba(0,0,255,1)",
        fontWeight: "bolder",
        display: "flex",
        flexDirection: "column",
        justifyContent: "left"
    }
    let backButton = {
        backgroundColor: "transparent",
        color: "rgba(0,0,255,1)",
        cursor: "pointer",
        height: "2rem",
        width: "2rem",
        fontSize: "1.2rem",
        padding: "0.3rem"
    }
    let topIcons = {
        width:"auto",
        height: "4rem",
        position: "absolute",
        borderTopRightRadius: "0rem",
        overflow: "hidden",
        right: "0rem",
        top: "0rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "3"
    }
    let typingStyle = {
        width: "100%",
        height: "1.5rem",
        fontSize: "0.8rem",
        fontWeight: "bold",
        backgroundColor: "rgba(255,255,255,0.8)",
        color: "rgba(0,0,255,1)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "1rem",
        marginBottom: "0.5rem"
    }
    let statusStyling = {
        color: sColor,
        fontSize: "0.7rem",
        textAlign: "left"
    }
    let backArrow = {
        backgroundColor: "rgba(0,0,0,1)",
        color: backArrowColorState,
        cursor: "pointer",
        height: "4rem",
        width: "4rem",
        marginRight: "-2rem",
        fontSize: "2rem",
        padding: "0.3rem",
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        borderRadius: "50%",
        borderTopRightRadius: "0rem",
        zIndex: "2"
    }
    let backArrowHandler = function(e){
        e.preventDefault()
        setBackArrowColorState("rgba(0,0,255,1)")        
    }
    let backOutHandler = function(e){
        e.preventDefault()
        setBackArrowColorState("rgba(255,0,0,1)")        
    }
    let topOptions = {
        width: "100%",
        height: "2rem",
        display: "flex",
        flexDirection: "row",
        marginBottom: "0.5rem"
    }
    let optionOne = {
        width: "50%",
        height: "100%",
        fontWeight: "bold",
        fontSize: "0.8rem",
        color: optionColor,
        borderBottom: optionsBorder
    }
    let optionTwo = {
        width: "50%",
        height: "100%",
        fontWeight: "bold",
        fontSize: "0.8rem",
        color: optionColor2,
        borderBottom: optionsBorder2
    }
    let optOutHandler = function(e){
        e.preventDefault()
        e.target.style.color = "rgba(0,0,255,1)"
        e.target.style.borderBottom = "0.2rem solid rgba(0,0,0,1)" 

        /*setOptionColor("rgba(0,0,255,1)")
        setOptionsBorder("0.2rem solid rgba(0,255,0,1)")*/
    }
    let optHandler = function(e){
        e.preventDefault()
        e.target.style.color = "rgba(255,255,255,1)"
        e.target.style.borderBottom = "0.2rem solid rgba(0,0,255,1)" 
    }
    let chatsStyle = {
        width: "100%",
        minHeight: "100%",
        display: "flex",
        gap: "0.1rem",
        flexDirection: "column",
        backgroundColor: "transparent",
        padding: "0rem",
        position: "relative"
    }
    let startChat = {
        width: "3rem",
        height: "3rem",
        borderRadius: "0.5rem",
        backgroundColor: "rgba(0,0,255,1)",
        color: "rgba(255,255,255,1)",
        fontSize: "2rem",
        position: "fixed",
        zIndex: "10",
        bottom: "8rem",
        right: "2.5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
    let onlineView = {
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        overflowY: "auto",
        position: "relative",
        padding: "1rem 0.5rem",
        border: "0.1rem solid rgba(255,255,255,0.5)"
    } 
    let startChatHandler = function(e){
        e.preventDefault()// prevent any default behaviour.
        setStartChatState("true")
    }
    let statesStyling = {
        width: "100%",
        height: "2rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        color: "rgba(0,0,255,1)"
    }
    let onlineTitle = {
        width: "100%",
        height: "2rem",
        fontSize: "1rem",
        fontWeight: "bold",
        color: "rgba(0,255,0,1)"
    }
    let actualOffline = {
        width: "50%",
        height: "100%",
        textAlign: "center",
        borderBottom: "0.2rem solid rgba(0,0,0,1)"
    }
    let actualOnline = {
        width: "50%",
        height: "100%",
        textAlign: "center",
        borderBottom: "0.2rem solid rgba(0,255,0,1)"       
    }
    let actualOfflineHandler = function(e){
        e.preventDefault()
        alert(e.target.style.borderBottom+"type : "+typeof(e.target.style.borderBottom))
        // element here returned the rgb version of what I'sd sent.
        if(e.target.style.borderBottom == "0.2rem solid rgb(0,255,0)"){
            e.target.style.borderBottom = "0.2rem solid rgba(0,0,0,1)"
        }
        else if(e.target.style.borderBottom == "0.2rem solid rgb(0,0,0)"){
            e.target.style.borderBottom = "0.2rem solid rgba(0,255,0,1)"
        }
    }
    let actualOnlineHandler = function(e){
        e.preventDefault()
        alert(e.target.style.borderBottom+"type : "+typeof(e.target.style.borderBottom))
        if(e.target.style.borderBottom == "0.2rem solid rgb(0,255,0)"){
            e.target.style.borderBottom = "0.2rem solid rgba(0,0,0,1)"
        }
        else if(e.target.style.borderBottom == "0.2rem solid rgb(0,0,0)"){
            e.target.style.borderBottom = "0.2rem solid rgba(0,255,0,1)"
        }
    }
    let typingHandler = function(e){
        if(e.target.value.length > 0){
            setTypingState(true)
        }
        else{
            setTypingState(false)
        }
    }
    // actually realized that the redux states can't work with the react useEffect, it only works with the react useEffect
    // so the trick is tp use a state that's pprobably related to the redux state, or that gets updated at the same time with it so that if you work with that particular useEffect it works perfectky fine.

    let backHandler = function(e){
        e.preventDefault()
        setChatState("false")
    }
    useEffect(function(){
        if(chatRows != null){
            if(chatRows.length > 0){
                setOptionsBorder("0.2rem solid rgba(0,0,255,1)")
                setOptionColor("rgba(255,255,255,1)")
            }
        }
    },[chatRows])
    return(
        <div style={statusIconsStyle}>
            {/* use this for the group
            <div style={statusContainer}>
                {finalResults.length > 0 ? finalResults : "loading..."}
            </div>*/}
            {startChatState == false ?
                chatState == true ?
                <div style={chatView}>
                    {groupState == false ? 
                        <div style={chatBoxes}>
                        <div style={profileBar}>
                            <div style={statusIconStyle} onClick={profileHandler}>
                                <img alt="" style={{width: "100%",height: "100%",objectFit: "cover"}} src={chatData.profileUrl}/>
                            </div>
                            <div style={profileName}>
                            {/*make a component here instead.*/}
                                <div>
                                    {chatData.group}
                                </div>
                                <div style={statusStyling}>
                                    {/*add this online capability later on to the chat data*/}
                                    {onlineStatus}
                                </div>
                                <div style={{color: "blue"}}>{typingText}</div>
                            </div>
                            <div style={topIcons}>
                                <div style={backButton}><FaPhone/></div>
                                <div style={backButton}><FaVideo/></div>
                                <div style={backArrow} onClick={backHandler} onMouseOut={backOutHandler} onMouseOver={backArrowHandler}><FaCaretLeft/></div>
                            </div>
                        </div>
                        {/*uncomment this later{finalMessages.length < 1 ? "" : finalMessages}*/}
                        {/*notice that single chatBox shouldn't be hardcoded as below*/}
                        <div style={{width: "100%",height: "83%",overflowY: "auto",backgroundColor: "transparent"}}>
                            {singleChats}
                            <div ref={emptyDivRef}></div>
                        </div>
                    </div>
                    :
                    <div style={chatBoxes}>
                        <div style={profileBar}>
                            <div style={statusIconStyle} onClick={profileHandler}>
                            </div>
                            <div style={profileName}>cyber busters</div>
                            <div style={backButton}><FaShare/></div>
                        </div>
                        <div style={typingStyle}>Herman & 3 others typing...</div>
                        {/*uncomment this later{finalMessages.length < 1 ? "" : finalMessages}*/}
                        {/*notice that single chatBox shouldn't be hardcoded as below*/}
                        <div style={{display: "flex",marginBottom: "0.5rem",height:"auto",width: "100%",position:"relative"}}>
                            <div style={{display: "flex",overflow:"hidden",padding: "0rem",paddingTop: "0rem",paddingRight:"0rem",alignItems:"end",position: "relative",flexDirection: "column",height:"auto",maxWidth: "20%"}}>
                                <div style={profileDesign}></div>
                            </div>
                            <div style={{display: "flex",boxSizing:"border-box",position: "relative",flexDirection:"row",height:"auto",width:"75%",padding: "0rem"}}>
                                <div style={arrowStyle}></div>   
                                <div style={chatBox}>
                                <div style={{fontSize: "0.7rem",fontWeight: "bolder",color:"green"}}>JohnZikOdah<span>~</span></div>
                                    <div>
                                    tell me why ain't nothing but a heartbreak, tell me why aint nothing but a good break
                                    </div>
                                </div>
                            </div>                   
                        </div>
                        <div style={{display: "flex",marginBottom:"0.5rem",height:"auto",width:"100%",position: "relative",marginLeft:"15%"}}>
                            <div style={{display: "flex",justifyContent: "right",boxSizing:"border-box",position: "relative",flexDirection:"row",height:"auto",width:"75%",padding: "0rem"}}> 
                                <div style={yourStyling}>
                                    <div style={{fontSize:"0.7rem",fontWeight:"bolder",color:"green",textAlign:"right"}}>you<span>~</span></div>
                                    <div>
                                        This is my own chat text
                                    </div>
                                </div>
                                <div style={youArrow}></div>
                            </div>
                            <div style={{display: "flex",overflow:"hidden",padding:"0rem",paddingTop:"0rem",paddingLeft:"0rem",position: "relative",flexDirection: "column",justifyContent: "start",height:"auto",maxWidth: "20%"}}>
                                <div style={profileDesign}></div>
                            </div>
                        </div>
                    </div>
                    }
                    <form className="botttom-chat-bar" onSubmit={chatHandler}>
                        <input  type="text" name="chatText" onChange={typingHandler} id="chat-text" placeholder="type your message here..."/>
                        <button style={submitBtn} type="submit" ><span className="fa fa-telegram-plane"><FaTelegramPlane style={{backgroundColor: "transparent"}}/></span></button>
                    </form>
                </div>
                :
                <div style={defaultView}>
                    <div style={topOptions}>
                        <div style={optionOne}>chats</div>
                        <div style={optionTwo}>groups</div>
                    </div>
                    <div style={chatsStyle}>
                        {/*logic to add the chat rows to be written here.*/}
                        {chatRows}
                        <div style={startChat} onClick={startChatHandler}><FaCommentDots/></div>
                    </div>
                </div>
            :
            <div style={onlineView}>
                <div style={onlineTitle} >select programmer</div>
                <div style={statesStyling}><div style={actualOnline} onClick={actualOnlineHandler}>online</div><div style={actualOffline} onClick={actualOfflineHandler}>offline</div></div>
                {/*logic for adding all the user display components*/}
                <ProfileDisplay data={{userName: "Rogetz",about: "life is a gift"}}/>
                <ProfileDisplay data={{userName: "Rogetz",about: "life is a gift"}}/>
                <ProfileDisplay data={{userName: "Rogetz",about: "life is a gift"}}/>
                <ProfileDisplay data={{userName: "Rogetz",about: "life is a gift"}}/>
                <ProfileDisplay data={{userName: "Rogetz",about: "life is a gift"}}/>
                <ProfileDisplay data={{userName: "Rogetz",about: "life is a gift"}}/>
                <ProfileDisplay data={{userName: "Rogetz",about: "life is a gift"}}/>
            </div>
            }
        </div>
    )
}

function SingleChat(props){
    // for storing the default deliveryState from the database.
    // note that the deliveryProp is in strings
    let deliveryProp = props.data.deliveryStateProp
    const globalUserName = useSelector(state => state.user.userName)
    const profileName = props.data.profileName
    // for determining which styling to output.
    let yourState = props.data.yourState
    const socket = useSelector(state => state.user.socket)
    // for all the single chats assume that they are only sent by default.
    const [deliveryState,setDeliveryState] = useState(<FaCheck/>)
    const [deliveryTracker,setDeliveryTracker] = useState("sent")
    // make the ccolor grey during the initialization.
    const [deliveryColor,setDeliveryColor] = useState("rgba(150,150,150,1)")
    // only need the time and data prop for the chat data
    let time = props.data.time
    let message = props.data.message
    useEffect(function(){
        if(props.data.deliveryProp == "sent"){
            // use the fontawesome's fa classes, so here is where you set the gui's deliveryState.
            // so just know that the delivery state will be a fontawesome component in react.
            // e.g <FaTick/> If they are two then put up two tick components.
            // the delivery color is not changed here since sent uses the default grey value that I had previously set.  
            setDeliveryState(<FaCheck/>)
        }
        else if(props.data.deliveryProp == "delivered"){
            // one more tick is added here. the color does not change however.
            setDeliveryState(<div><FaCheck/><FaCheck/></div>)   
        }
        else if(props.data.deliveryProp == "seen"){
            //apart from the fontawesome icon also change the delivery color.
            setDeliveryColor("rgba(0,255,0,1)")
            setDeliveryState(<div><FaCheck/><FaCheck/></div>)
        }
    },[])
    useEffect(function(){
        if(profileName != null || profileName != undefined){
            socket.on("chat-delivery-timely-updates",function(deliveryStatus,sender,vGroupReceived){
                console.log(`deliveryUpdates from single chats: sender: ${sender},deliveryStatus:${deliveryStatus} and vGroup: ${vGroupReceived}`)
                if(vGroupReceived.indexOf(profileName) != -1 && sender.trim().toLowerCase() == globalUserName.trim().toLowerCase()){
                    // deliveryStatus received.
                    if(deliveryStatus.trim().toLowerCase() != "seen" && (deliveryTracker.trim().toLowerCase() != "seen" && deliveryProp.trim().toLowerCase() != "seen")){
                        setDeliveryState(<div><FaCheck/><FaCheck/></div>)   
                    }   
                    else if(deliveryStatus.trim().toLowerCase() == "seen"){
                        setDeliveryState(<div><FaCheck/><FaCheck/></div>)   
                        setDeliveryColor("rgba(0,255,0,1)")
                        setDeliveryTracker("seen")
                    }
                }
            })
        }
    },[profileName])
    useEffect(function(){
        if(profileName != null || profileName != undefined){
            socket.on("receiver-delivery-update",function({sender,deliveryState}){
                console.log(`single chats receiver delivery update reached,sender: ${sender} and recceiver who's the guy am chatting with: ${profileName} and the deliveryState is: ${deliveryState}`)
                // this is the deliveryState from the parameters
                // don't be confused here we're one hundred percent sure that it's you who sent the message so we only test for the context of the message.
                // note that it will never mark another user's message except from yours.
                if(sender.trim().toLowerCase() == profileName.trim().toLowerCase()){
                    if(deliveryState.trim().toLowerCase() == "delivered" && (deliveryTracker != "seen" && deliveryProp != "seen")){
                        setDeliveryState(<div><FaCheck/><FaCheck/></div>) 
                        console.log("delivered part reached") 
                    }
                    else if(deliveryState.trim().toLowerCase() == "seen"){
                        console.log('deliveryPart reached')
                        setDeliveryState(<div><FaCheck/><FaCheck/></div>)   
                        setDeliveryColor("rgba(0,255,0,1)")
                        setDeliveryTracker("seen")
                    }    
                }
            })
            socket.on("delivery-fetch-fetched",function({sender,deliveryState}){
                if(sender.trim().toLowerCase() ==  profileName.trim().toLowerCase()){
                    if(deliveryState == "delivered" && (deliveryTracker != "seen" && deliveryProp != "seen")){
                        setDeliveryState(<div><FaCheck/><FaCheck/></div>)   
                    }
                    else if(deliveryState == "seen"){
                        setDeliveryState(<div><FaCheck/><FaCheck/></div>)   
                        setDeliveryColor("rgba(0,255,0,1)")
                        setDeliveryTracker("seen")
                    }    
                }
            })    
        }
    },[profileName])
    let arrowStyle = {
        width: "0.01rem",
        height: "0rem",
        borderWidth: "0.5rem",
        borderStyle: "solid",
        borderColor: "rgba(0,0,255,1) rgba(0,0,255,1) transparent transparent"
    }
    let youArrow = {
        width: "0.01rem",
        height: "0rem",
        borderWidth: "0.5rem",
        borderStyle: "solid",
        borderColor: "rgba(0,0,255,1) transparent transparent rgba(0,0,255,1)"
    }   
    let yourStyling = {
        maxWidth: "100%",
        height: "auto",
        borderRadius: "0.5rem",
        borderTopRightRadius: "0rem",
        backgroundColor: "rgba(0,0,255,1)",
        color: "rgba(255,255,255,1)",
        padding: "0.3rem",
        textAlign: "left",
        fontSize: "1rem",
        fontWeight: "bold",
        fontFamily: "Times New Roman",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "0.2rem"
    }
    let chatBox = {
        maxWidth: "100%",
        height: "auto",
        marginRight: "0rem",
        borderRadius: "0.5rem",
        borderTopLeftRadius: "0rem",
        padding: "0.3rem",
        textAlign: "left",
        fontSize: "1rem",
        backgroundColor: "rgba(0,0,255,1)",
        fontWeight: "bold",
        fontFamily: "Times New Roman",
        color: "rgba(255,255,255,1)",
        display: "flex",
        flexDirection: "column",
        gap: "0.2rem"
    }
    let timeStyle = {
        textAlign: "right",
        fontSize: "0.8rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "end",
        gap: "0.2rem"
    }
    let deliveryStyle = {
        color: deliveryColor
    }
    // this is for reading the data from  the database not the realtime data.
    if(yourState == false){
        return(
            <div style={{display: "flex",marginBottom:"0.5rem",height:"auto",width: "100%",position:"relative"}}>
                <div style={{display: "flex",boxSizing:"border-box",position: "relative",flexDirection:"row",height:"auto",width:"75%",padding: "0rem"}}>
                    <div style={arrowStyle}></div>   
                    <div style={chatBox}>
                        <div>
                            {/*find a way of adding the time styling here and the time that I've already created a variable for here.*/}
                            {message}
                        </div>
                        <div style={timeStyle}>{time}</div>
                    </div>
                </div>                   
            </div>
        )
    }
    else{
        // also note that delivery state is only required for the messages you sent that's why it's only where yourState == true
        return(
            <div style={{display: "flex",marginBottom:"0.5rem",height:"auto",width:"100%",position:"relative",marginLeft:"25%"}}>
                <div style={{display: "flex",justifyContent: "right",boxSizing:"border-box",position: "relative",flexDirection:"row",height:"auto",width:"75%",padding: "0rem"}}> 
                    <div style={yourStyling}>
                        <div>
                            {message}
                        </div>
                        <div style={timeStyle}><div>{time}</div><div style={deliveryStyle}>{deliveryState}</div></div>
                    </div>
                    <div style={youArrow}></div>
                </div>
            </div>           
        )

    }
}

function StatusIcon(props){
    //determines whether the chatState should be displayed
    const [iconChatState,setIconChatState] = useState(false)
    const [userNameProp,setUserNameProp] = useState("")
    let userName = props.userData.userName
    let userNameChanger = props.userNameChanger
    let chatStateChanger = props.chatStateChanger
    let messageUpdater = props.messageUpdater

    let iconHandler = function(e){
        // pass the userName to the userNameChanger prop.
        userNameChanger(userName)
        chatStateChanger(true)
        //make a fetch request to the api for the userName chats.
        /*fetch().then(function(result){
            messageUpdater(result)
        }).catch(err){
            alert("some error occured")
        }
         */
    }
    // so this status icon must have a userName property for each user.
    let statusIconStyle ={
        width: "3rem",
        height: "3rem",
        borderRadius: "50%",
        backgroundColor: "rgba(255,255,255,1)",
        margin: "0.2rem"
    }
    return(
        <div style={statusIconStyle} onClick={iconHandler} >
        </div>
    )
}

function ProfileDisplay(props){
    let userName = props.data.userName
    let about = props.data.about
    let profileUrl = props.data.profileUrl
    let profileView = {
        width: "100%",
        height: "3.5rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "0.1rem",
        backgroundColor: "transparent",
    }
    let imageStyle = {
        width: "2.8rem",
        height: "2.8rem",
        marginLeft: "0.3rem",
        backgroundColor: "rgba(255,255,255,1)",
        objectFit: "cover",
        borderRadius: "50%"
    }
    let rightSide = {
        width: "84%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "transparent",
        textAlign: "left",
        fontSize: "0.8rem",
        fontWeight: "bolder",
        color: "white",
        paddingLeft: "0.2rem",
        boxSizing: "border-box",
        paddingTop: "0.4rem",
        paddingBottom: "0.3rem",
        overflow: "hidden"
    }
    let userNameStyling = {
        width: "100%",
        height: "1.2rem",
        color: "white"
    }
    let aboutStyling = {
        width: "100%",
        height: "1.2rem",
        color: "blue"
    }
    return(
        <div style={profileView}>
            <img style={imageStyle} alt="avatar"/>
            <div style={rightSide}>
                <div style={userNameStyling}>{userName}</div>
                <div style={aboutStyling}>~{about}</div>
            </div>
        </div>
    )
}


// the chatItem should be accepting the time,content,and the sender props,to ensure the chat is well displayed.
function ChatItem(){
    //let {} = useContext()
    //let {chatContents,time} = useState({chatContents: ,time: ,})
    const overallColors = useSelector((state) => state.colorSelection)
    let you = true
    let chatItemStyling = {
        position: "relative",
        marginRight: "28%",
        marginLeft: "0rem",
        marginBottom: "0.5rem",
        wordWrap: "break",
        padding: "0.3rem",
        paddingBottom: "0.7rem",
        overflow: "hidden",
        width: "70%",
        height: "auto",
        fontFamily: "'Times New Roman', serif",
        borderRadius: "0.5rem",
        backgroundColor: overallColors.colorBlueMilderFade,
        color: overallColors.colorWhite,
        fontWeight: "500",
    }
    let yourChatItemStyling = {
        position: "relative",
        marginLeft: "28%",
        marginRight: "0rem",
        backgroundColor: overallColors.colorBlueMildFade,
        color: overallColors.colorWhite,
        marginBottom: "0.5rem",
        wordWrap: "break",
        padding: "0.3rem",
        paddingBottom: "0.7rem",
        overflow: "hidden",
        width: "70%",
        height: "auto",
        fontFamily: "'Times New Roman', serif",
        borderRadius: "0.5rem",
        backgroundColor: overallColors.colorBlueMilderFade,   
    }
    let timeTag = {
        fontSize: "0.7rem",
        position: "relative",
        left: "0.5rem",
        bottom: "0.3rem"
    }
    let nameTag = {
        fontSize: "0.7rem",
        position: "relative",
        right: "0.5rem",
        bottom: "0.3rem"
    }
    // There should be two stylings,one for the chatItemStyling and the next one is the yourChatItemStyling.
    // I've managed to set the different stylings.
    return(
        <div style={you == true ? yourChatItemStyling : chatItemStyling}>
            {chatContents}
            <div><span style={timeTag}>{timeSent}</span><span style={nameTag}>{senderName}</span></div>
        </div>
    )
}

//This is the component directing how each videoMember will be displayed
// Its major job is to map each individual videoMember into a map.
function VideoMembers(){
    // contain all the information about the each video member,and the no of them as well.
    let users = useState()
}

// The other guys in the video collab that are currently not showing their screen
// remember that each member can request to share his/her screen.
function VideoMember(){
    // This should be an object containing the user data including the video itself
    let user = useState()
}

//for containing each task objective
function TaskObjectives(){
    // contain all the info about all the tasks available.
    let tasks = useState()
}


// a single task objective component
function TaskObjective(){
    // contain all the info about a single task
    let task = useState()
    let taskStyle = {
        padding: "0.5rem",
        boxSizing: "border-box",
        margin: "0.5rem 0rem",
        borderRadius: "1rem",
        backgroundColor : "var(--color-blue)"    
    }
    let taskTitle = {
        width: "100%",
        height: "2rem",
        display: "flex",
        position: "relative",
        left: "0rem",
        alignItems: "left",
        fontWeight: "bold"    
    }
    let taskIcon = {
        padding: "0.5rem",
        color: "var(--color-white)"    
    }
    let actualTitle = {
        backgroundColor: "var(--color-white)",
        padding: "0.5rem",
        borderRadius: "1rem",
        color: "var(--color-blue)",    
    }
    return(
        <div style={taskStyle}>
            <div style={taskTitle}><i style={taskIcon} aria-hidden="true"><FaPenFancy/></i><span style={actualTitle}>Logo design</span></div>
            <div className="details">We want to design something special for you guys</div>
        </div>

    )
}

function ChatRow(props){
    const reduxDispatch = useDispatch()
    const onlineUsers = useSelector(state => state.chat.onlineUsers)
    const today = useSelector(state => state.chat.today)
    const globalUserName = useSelector(state => state.user.userName)
    const groupsInvolved = useSelector(state => state.chat.groupsInvolved)
    const [deliveryProp,setDeliveryProp] = useState(props.data.deliveryProp) 
    const [onlinebgColor,setOnlineBgColor] = useState("transparent")
    const [deliveryState,setDeliveryState] = useState("")
    const [deliveryTracker,setDeliveryTracker] = useState("sent")
    const [sColorState,setSColorState] = useState("blue") 
    const [chatsCounter,setChatsCounter] = useState(0)
    const [popupText,setPopupText] = useState("")
    const [bgPopup,setBgPopup] = useState("transparent")
    const [popupColor,setPopupColor] = useState("transparent")
    const [deliveryColor,setDeliveryColor] = useState("rgba(150,150,150,1)")
    let fullTime = props.data.latestTime
    const  [vGroup,setVGroup] = useState(props.data.vGroup) 
    let momentCreator = function(fullTime,today){
        console.log(`todays value: ${today}`)
        console.log(`full times value ${fullTime}`)
        const tDay = today.split(".")[0]
        const todaysDay = Number(tDay.split("/")[0])
        const tMonth = today.split(".")[0] 
        const todaysMonth = Number(tMonth.split("/")[1])

        let slicedTime = fullTime.split(".")[1].substring(0,5)
        let latestDate = fullTime.split(".")[0]   
        let day = Number(latestDate.split("/")[0]) 
        let month = Number(latestDate.split("/")[1]) 
        // receives an already set name from the server.
        let weekDay = fullTime.split(".")[2]  
        if(day == todaysDay && month == todaysMonth){
            return slicedTime
        }
        // for yesterday
        else if((todaysDay - day) == 1 && month == todaysMonth){
            return "yesterday"
        }
        // for the weekDay
        else if((todaysDay - day) < 7 &&  todaysMonth == month){
            return weekDay
        }
        else{
            return latestDate
        }    
    }
    console.log(`The online users found at the react app: ${onlineUsers}`)
    console.log(`global userName as at now: ${globalUserName}`)
    const [latestUser,setLatestUser] = useState(props.data.latestUser)
    const [latestTime,setLatestTime] = useState(momentCreator(fullTime,today))
    const [latestChat,setLatestChat] = useState(props.data.latestChat)  

    // data must be an object.
    //testing if this will be able to change the upper chatState component,if not,I'll use the context
    
    const socket = props.data.socketValue
    const backButtonProp = props.data.backButtonProp
    const setChatState = props.data.setChatStateValue
    const setChatData = props.data.setChatDataValue
    const setVGroupState = props.data.setVGroupStateValue
    // find a way of passing the vGroup here directly from the messages when assingning the chatRows
    //reduxDispatch(groupsInvolvedUpdaterSingle())
    const [onlineStatus2,setOnlineStatus2] = useState("")
    let rowUserName = props.data.userName
    console.log(`chat row userName: ${rowUserName}`)
    // try fetch the last seen from the database if possible.
    //let lastSeen = 
    /*if(onlineUsers.includes(rowUserName)){
        onlineStatus = true
    }*/

    //for the chat delivery updates.
    useEffect(function(){
        socket.on("chat-delivery-timely-updates",function({deliveryStatus,sender,vGroupReceived}){
            //there's a vGroup for the chat row ready, the rowUserName is present as well.
            console.log(`deliveryUpdates from chatrows: sender: ${sender},deliveryStatus:${deliveryStatus} and vGroup: ${vGroupReceived}`)
            if((sender.trim().toLowerCase() == globalUserName.trim().toLowerCase() && vGroupReceived.indexOf(rowUserName) != -1)){
                if(deliveryStatus.trim().toLowerCase() == "delivered" && (deliveryTracker.trim().toLowerCase() != "seen" && deliveryProp.trim().toLowerCase() != "seen")){
                    setDeliveryState(<div><FaCheck/><FaCheck/></div>)   
                }
                else if(deliveryStatus.trim().toLowerCase() == "seen"){
                    setDeliveryState(<div><FaCheck/><FaCheck/></div>)   
                    setDeliveryColor("rgba(0,255,0,1)")
                    setDeliveryTracker("seen")
                }    
            }
        })
    },[])

    // for the delivery states events.
    useEffect(function(){
        console.log(`latest user at the chat row: ${latestUser}`)
        if(latestUser != null){
            if(latestUser.toLowerCase() == globalUserName.toLowerCase()){
                socket.on("receiver-delivery-update",function({sender,deliveryState}){
                    // this is the deliveryState from the parameters
                    if(sender.trim().toLowerCase() == rowUserName.trim().toLowerCase()){
                        if(deliveryState == "delivered" && (deliveryTracker != "seen" && deliveryProp != "seen")){
                            setDeliveryState(<div><FaCheck/><FaCheck/></div>)   
                        }
                        else if(deliveryState == "seen"){
                            setDeliveryState(<div><FaCheck/><FaCheck/></div>)   
                            setDeliveryColor("rgba(0,255,0,1)")
                            setDeliveryTracker("seen")
                        }    
                    }
                })
                socket.on("delivery-fetch-fetched",function({sender,deliveryState}){
                    if(sender.trim().toLowerCase() == rowUserName.trim().toLowerCase()){
                        if(deliveryState == "delivered" && (deliveryTracker != "seen" && deliveryProp != "seen")){
                            setDeliveryState(<div><FaCheck/><FaCheck/></div>)   
                        }
                        else if(deliveryState == "seen"){
                            setDeliveryState(<div><FaCheck/><FaCheck/></div>)   
                            setDeliveryColor("rgba(0,255,0,1)")
                            setDeliveryTracker("seen")
                        }                            
                    }                    
                })    
            }    
        }
    },[])
    //for the default state received from the database.
    useEffect(function(){
        console.log(`latestUser at chat row: ${latestUser}`)
        if(latestUser != null){
            if(latestUser.toLowerCase() == globalUserName.toLowerCase()){
                // I've kept the default faCheck since in the begining there'll be some items without the delivery states.
                setDeliveryState(<FaCheck/>)
                if(props.data.deliveryState == "sent"){
                    setDeliveryState(<FaCheck/>)
    
                }    
                else if(props.data.deliveryState == "delivered" && deliveryTracker != "seen"){
                    setDeliveryState(<div><FaCheck/><FaCheck/></div>)  
                    setDeliveryTracker("delivered")              
                }            
                else if(props.data.deliveryState == "seen"){
                    setDeliveryColor("rgba(0,0,255,1)")
                    setDeliveryState(<div><FaCheck/><FaCheck/></div>)
                    setDeliveryTracker("seen")
                }                    
            }    
        }
    },[])

    useEffect(function(){
        if(groupsInvolved.length > 0){
            console.log("hooray, groups involved is not null")
            socket.emit("online-fetch",{groupsToFetch:groupsInvolved})
        }
        // let it have chatRows as its dependency since its the firstone before anything
    },[])

    useEffect(function(){
        // the details is an object with a userName attribute.
        socket.on("online-update",function(details){
            console.log(groupsInvolved[0])
            console.log(`todays value is: ${today}`)
            socket.emit("online-broadcast",{groups: groupsInvolved})
        })
    },[])
    useEffect(function(){
        socket.on("online-members",function({userName}){
            console.log("online memmbers received")
            reduxDispatch(onlineUsersUpdate({userOnline: userName}))
            if(rowUserName != null){
                if(rowUserName.trim().toLowerCase() == userName.trim().toLowerCase()){
                    setOnlineStatus2("online")
                    setOnlineBgColor("rgba(0,255,0,1)")
                }            
            }
        })
    },[])

    useEffect(function(){
        socket.on("user-joining",function({userName}){
            if(rowUserName != null){
                if(rowUserName.trim().toLowerCase() == userName.trim().toLowerCase()){
                    setOnlineStatus2("online")
                    setOnlineBgColor("rgba(0,255,0,1)")
                }
            }
        })
        socket.on("user-offline",function({userName,time}){
            reduxDispatch(lastSeenUsersUpdate({lastSeenUser: userName,time:time}))
            if(rowUserName != null){
                if(rowUserName.trim().toLowerCase() == userName.trim().toLowerCase()){
                    console.log("online status part reached.")
                    if(time != null){
                        console.log("time reached")
                        let newTime = time.split(".")[1].slice(0,5)
                        setOnlineStatus2(`last seen: ${newTime}`)
                        setOnlineBgColor("transparent")
                    }
                    else{
                        setOnlineStatus2("")
                        setOnlineBgColor("transparent")
                    }
                }
            }
        })
    },[])

    useEffect(function(){
        socket.on("typed",function({userName}){
            if(rowUserName != null){
                if(rowUserName.trim().toLowerCase() == userName.trim().toLowerCase()){
                    setOnlineStatus2("typing...")
                    setSColorState("rgba(0,255,0,1)")
                }
            }
        })
        socket.on("not-typed",function({userName}){
            if(rowUserName != null){
                if(rowUserName.trim().toLowerCase() == userName.trim().toLowerCase()){
                    setSColorState("rgba(0,0,255,1)")
                    setOnlineStatus2("online")
                }
            }
        })
    },[])
    useEffect(function(){
        if(backButtonProp != null){
            if(backButtonProp.propVGroup == rowUserName){
                setLatestTime(backButtonProp.time.split(".")[1].substr(0,5))
                setLatestChat(backButtonProp.message) 
                // this is to indicate to the other listener that the chat has indeed been received on the other side.
            }
        }
    },[backButtonProp])
    // should be states, they keep on changing, i.e in a profile update.
    // provide a url for fetching the images.
    // provide an api for fetching the latest chat.
    //let it be passed as a prop for the time being.

    // call this a momentCreator function

    let latestDate = fullTime.split(".")[0]    
    let profileUrl = props.data.profileUrl



    // to show whether he/she is online/not 
    // the profile view has different serial numbers for image.
    //let profileUrl = props.data.profileUrl
    //const [latestChat,setLatestChat] = useState("")

    // that shows up before you click the view.
    //setLatestChat(data.latestChat)
    let imageDiv = {
        position: "relative",
        width: "2.8rem",
        height: "2.8rem",
        marginLeft: "0.3rem",
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius: "50%"
    }
    let textsDiv = {
        width: "84%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "transparent",
        textAlign: "left",
        fontSize: "0.8rem",
        fontWeight: "bolder",
        color: "white",
        paddingLeft: "0.2rem",
        boxSizing: "border-box"
    }
    let userNameStyle = {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    }
    let actualText = {
        width: "100%",
        height: "100%",
        color: "rgba(0,0,255,1)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "0.5rem"
    }
    let singleRow = {
        position: "relative",
        width: "100%",
        height: "3.5rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "0.1rem",
        backgroundColor: "transparent",
    }
    let actualUserName = {
        maxWidth: "100%",
        height: "1.2rem",
        overflow: "hidden",
        color: "white",
        textAlign: "left",
        paddingTop: "0.1rem"
    }
    let timeStyle = {
        maxWidth: "40%",
        height: "1.2rem",
        overflow: "hidden",
        textAlign: "right",
        paddingRight: "0.5rem",
        paddingTop: "0.1rem",
        color: "rgba(255,255,255,0.7)"
    }
    let profileClickHandler = function(e){
        // profileClick handler should work with a setState for setting the part of the chatRows via a prop that's passed to it. 
    }
    useEffect(function(){
        socket.on("inbox",function(message){
            if(vGroup == message.vGroup){
                let numberSet = chatsCounter
                numberSet += 1
                setChatsCounter(numberSet)
                setLatestTime(message.time.split(".")[1].substr(0,5))
                setLatestChat(message.message)
            }
        })
    },[])
    useEffect(function(){
        if(chatsCounter > 0){
            // tHis will server as the inbox indicator for the delivery updates.
            setPopupText(chatsCounter)
            setBgPopup("rgba(255,255,255,1)")   
            setPopupColor("rgba(0,0,255,1)")  
        }
    },[chatsCounter])
    useEffect(function(){
        console.log(`vGroup at the chat row before calling the delivery initiator is: ${vGroup}`)
        if(chatsCounter > 0 && vGroup != null){
            socket.emit("chat-delivery-state-initiator",{deliveryStatus:"delivered",vGroup:vGroup})       
        }
    },[chatsCounter,vGroup])
    let chatDisplayHandler = function(e){
        e.preventDefault()
        socket.emit("chats-retrieve",vGroup)
        socket.on("chats-retrieved",function(groupData){
            setChatData(groupData)
            setChatState(true)
            console.log(`vGroup from chatRow: ${vGroup}`)
            setVGroupState(vGroup)
            reduxDispatch(vGroupUpdate({globalVGroup: vGroup}))
        })
    }
    // point to the latest chat.
    let textToDisplay = latestChat
    let popUpStyle = {
        position: "relative",
        bottom: "0rem",
        right: "1.7rem",
        minWidth: "0.8rem",
        height: "0.8rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        fontSize: "0.6rem",
        fontWeight: "bold",
        backgroundColor: bgPopup,
        color: popupColor
    }
    let onlineIconStyle = {
        position: "absolute",
        bottom: "0rem",
        right: "50%",
        width: "0.6rem",
        height: "0.6rem",
        borderRadius: "50%",
        backgroundColor: onlinebgColor
    }
    let imageStyle = {
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        objectFit: "cover"
    }
    let statusStyle = {
        color: sColorState
    }
    let sWrapper = {
       width: "auto",
       height: "100%",
       display: "flex",
       flexDirection: "row",
       alignItems: "center",
       justifyContent: "start",
       gap: "0.5rem"
    }
    let deliveryStyle = {
        color: deliveryColor
    }
    return(
        <div style={singleRow}>
            <div style={imageDiv}>
                <img onClick={profileClickHandler} style={imageStyle}  alt="" src={profileUrl}/>
                <div style={onlineIconStyle}></div>
            </div>
            <div onClick={chatDisplayHandler} style={textsDiv}>
                <div style={userNameStyle}>
                    <div style={sWrapper}>
                        <div style={actualUserName}>{rowUserName.length < 8 ? rowUserName : `${rowUserName.substr(0,8)}...`}</div><div style={statusStyle}>{onlineStatus2}</div>
                    </div>
                    <div style={timeStyle}>{latestTime}</div>
                </div>
                {/*latest chat state to be used here*/} 
                <div style={actualText}><div style={deliveryStyle}>{deliveryState}</div>~{latestChat.length >= 25 ? `${latestChat.substring(0,25)}...` : `${latestChat}`}</div>
            </div>
            <div style={popUpStyle}>{popupText}</div>
        </div>
    )

}

export {PrepRoom}