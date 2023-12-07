import {createSlice} from "@reduxjs/toolkit"
import { initialState } from "./initialState"


// createSlice takes an object.
// everything in it has a key and value including initial state, if you investigate it is an object and so it can be added into the createSlice directly.
// also remember to export the slice by itself
// I actually dont know where the likeSliice imported as a whole is going to be used but just import it.

// so I actually found out that the useSelector is the one to use this exported slice since it uses the name defined inside it to access it
export const likeSlice = createSlice({
    name : "likeCounter",
    initialState,
    reducers : {
        // these attributes are basically the action names, each of them has a minireducer of its own. Though the advantage is that it works from the same state.
        // another thing is that you don't have to make a copy as before in the initial redux reducers of the old days.
        increment : (state) => {
            state.user.likes += 1
        },
        // remember that the reducers can as well take the action parameter for the payloads that may be passed
        addComment : (state,action) => {
            // accessed through the action.
            state.user.comments = action.payload
        } 
    }
    
})

export const userUpdate = createSlice({
    name : "userUpdate",
    initialState : initialState.user,
    reducers : {
        loginAction : (state,action) => {
            // use the payload to access the values
            state.token = action.payload.token,
            state.userName = action.payload.userName 
        },
        socketUpdate : (state,action) => {
            state.socket = action.payload.socket
        },
        vGroupUpdate : (state,action) => {
            state.globalVGroup = action.payload.globalVGroup
        },
        inboxUpdate: (state,action) => {
            state.inbox = action.payload.inbox
        }
    }
})

export const chatUpdates = createSlice({
    name: "chatsUpdate",
    initialState : initialState.chat,
    reducers: {
        // to add the actions later on.
        timeUpdater: (state,action) => {
            state.today = action.payload.today
        },// do note that I have not worked with the push updates before for the reduxStates let's see how it goes.
        groupsInvolvedUpdater: (state,action) => {
            if(! state.groupsInvolved.includes(action.payload.groupInvolved)){
                let newGInvolved = state.groupsInvolved
                newGInvolved.push(action.payload.groupInvolved)
                state.groupsInvolved = newGInvolved
            }
        },
        onlineUsersUpdate : (state,action) => {
            if(! state.onlineUsers.includes(action.payload.onlineUser)){
                let newOnlineUsers = state.onlineUsers
                newOnlineUsers.push(action.payload.onlineUser)
                state.onlineUsers = newOnlineUsers
            }
        },
        lastSeenUsersUpdate : (state,action) => {
            if(! state.lastSeenUsers.includes(action.payload.lastSeenUser)){
                let newLastSeen = state.lastSeenUsers
                newLastSeen.push({lastSeenUser:action.payload.lastSeenUser,time:action.payload.lastSeenUser})
                state.lastSeenUsers = newLastSeen
            }
        },
        lastSeenUsersMultiUpdate: (state,action) => {
            action.payload.lastSeens.forEach(function(lastSeen){
                if(! state.lastSeenUsers.includes(lastSeen)){
                    let newLastSeen = state.lastSeenUsers
                    newLastSeen.push(lastSeen)
                    state.lastSeenUsers = newLastSeen
                }
            })
        }
    }
})

export const colorMode = createSlice({
    name: "colorModes",
    initialState,
    reducers : {
        darkMode : (state) => {
            //use spread operator to copy a new array with new figures to it.
            // so am using the spread operator to ensure that only new data is intergrated with the unchanged ones,i.e zile sikufaa kuguza zisipotee.
            state.colorSelection =   {...state.colorSelection,colorWhite: "rgba(255,255,255,1)",
            coloWhiteFaded: "rgba(0,0,0,0.8)",
            colorBlue: "rgba(0,0,255,1)",
            colorDark: "rgba(255,255,255,0.8)",
            boxShadowInputs: "0.01rem 0.01rem 0.25rem rgba(255,255,255,1)",
            colorDarkFaded: "rgba(255,255,255,0.2)",
            colorGithub: "rgba(0,0,0,1)",
            colorYellow: "rgba(255,50,0,1)",
            colorPurple: "rgba(255,0,200,1)",
            colorRed: "rgba(255,0,0,1)",  
            colorDarkMuted: "rgba(255,255,255,0.5)",
            upperDivPadding: "0.5rem",
            upperOuterPadding: "2rem",
            colorGreen: "rgba(0,255,0,1)",
            colorGreenFaded: "rgba(0,255,0,0.5)",
            colorBlueFaded: "rgba(0,0,255,0.1)",
            colorBlueMildFade: "rgba(0,0,255,0.7)",
            colorBlueMilderFade: "rgba(0,0,255,0.5)",
            chatRoomBoxShadow: "0.001rem 0.001rem 0.3rem blue"
            }         
        },
        lightMode : (state) => {
            //note that the values that you are passing as the second part are the ones that are meant to modify
            state.colorSelection = {...state.colorSelection,colorWhite: "rgba(255,255,255,1)",
            coloWhiteFaded: "rgba(255,255,255,0.1)",
            colorBlue: "rgba(0,0,255,1)",
            colorDark: "rgba(0,0,0,1)",
            boxShadowInputs: "0.01rem 0.01rem 0.25rem rgba(0,0,255,1)",
            colorDarkFaded: "rgba(0,0,0,0.8)",
            colorGithub: "rgba(0,0,0,1)",
            colorYellow: "rgba(255,50,0,1)",
            colorPurple: "rgba(255,0,200,1)",
            colorRed: "rgba(255,0,0,1)",  
            colorDarkMuted: "rgba(0,0,0,0.5)",
            upperDivPadding: "0.5rem",
            upperOuterPadding: "2rem",
            colorGreen: "rgba(0,255,0,1)",
            colorGreenFaded: "rgba(0,255,0,0.5)",
            colorBlueFaded: "rgba(0,0,255,0.1)",
            colorBlueMildFade: "rgba(0,0,255,0.7)",
            colorBlueMilderFade: "rgba(0,0,255,0.5)",
            chatRoomBoxShadow: "0.001rem 0.001rem 0.3rem blue"
            }         

        }
    }
})

// if you are deriving from another variable through destructuring ensure you give it a type e.g const
export const {increment,addComment} = likeSlice.actions // going to be used as actions by the reacy components themselves
export const likeReducer = likeSlice.reducer // this is what the store actually uses.

// for the actions

export const {darkMode,lightMode} = colorMode.actions
// don't put the reducer in curly braces, since the reducer is not actually being differentiated.
export const modeReducer = colorMode.reducer

// for the actions.
export const {loginAction,socketUpdate,vGroupUpdate,inboxUpdate} = userUpdate.actions
export const userReducer = userUpdate.reducer

//for the chat reducer
export const chatReducer = chatUpdates.reducer
export const {timeUpdater,groupsInvolvedUpdater,onlineUsersUpdate,lastSeenUsersUpdate,lastSeenUsersMultiUpdate} = chatUpdates.actions