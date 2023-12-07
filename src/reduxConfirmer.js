// this is meant to test whether redux reflects the changes globally.
// Redux finally passed the test and so I'm going to be using it to manage my state changes.
import React from "react"
import {useSelector} from "react-redux"

// remember the react convention on components being in title case.
function StateConfirmer(){
    // the name is the one defined inside not the outer one.
    const likes = useSelector(state => state.likeCounter.user.likes)
    return(
        <div>
            <p>The one reflected one confirming: {likes}</p>
        </div>
    )
}

export {StateConfirmer}

