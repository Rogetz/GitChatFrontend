import React, { useEffect } from "react"
import {initialStateContext} from "./states/initialState"
import { useContext,useRef,useState} from "react"

// finally just proved that indeed react contexts can not be used in place of redux

function ConfirmContext(){
    //let nContext = useContext(initialStateContext)
    //let [likes,setLikes] = useState(myContext.user.likes)
    // for use as a dependency in the useEffect
    //let likeState = useState(nContext.user.likes)
    // try using the context as  dependency 
    let likeContext = useContext(initialStateContext)
    // call it inside some useEffect hook to see how it will behave.
    let newpRef = useRef(null)
    useEffect(function(){
        // there was a typo that's why an error was always emerging each time.
        newpRef.current.innerText = likeContext.user.likes
        // come back and change the dependency to be something liike a whole context.
    },[likeContext])// Remember that the state must be passed as an array.

    return(
        <div>
            <p ref={newpRef}>The no of people: </p>
        </div>
    )
}

export {ConfirmContext}