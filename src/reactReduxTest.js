import React,{useRef} from "react"
import ReactDom from "react-dom/client"
import {createRoot} from "react-dom/client"

// the other react element for confirming
import {StateConfirmer} from "./reduxConfirmer"

// for the redux
// Provider is for providing the store.
import {useSelector,useDispatch} from "react-redux"
//import { likeIncrement,commentIncrement} from "./states/actions"// this is the old style of actions which am not going to use I'll  be using the redux slice actions for that
// test the addComment later with some payload
import {increment,addComment} from "./states/newReducer"
// somehow I added the state to be used by the useSelector directly.

//testing the redux style do note that am using the modern redux toolkit and using the slices.
function LikeTest(){
    const paragraphRef = useRef(null)
    // useSelector is a custom hook and there's a way its implementing the state hook.
    // remember that a useSelector itself must not be nested more than once. It causes the undefined if such is done.
    //console.log("likes are:",likes)
    // finally found how to call the state, you have to add the name you defined for the slice then access your values from there since the store or the state os the major one.
    const likeCounter = useSelector(state => state.likeCounter.user)// this the error causer 
    //const likeCounter2 = useSelector()// this the error causer   
    // Notice that you call the useDispatch hook without parameters and assign it a variable to use as the dispatch.
    const myDispach = useDispatch()
    let clickHandler = function(e){

        // note thow the actions from the slices are called as actions cause that's actually how they're defined.
        myDispach(increment())
        // do note that each selector selects directly from the store, and not from other memories,
        // so inorder for each component to match they have tp read the states at apparently the same time.
        // The only advantage of redux is that for every change its reflected to all parts of the useSelectors.
        // Thats the advantage of the dispatch is that it updates all parts of useSelectors.
        // for this to look alike initialize it from the start to this likes. even if its through the useEffect and thats what I';; be doing next.
        paragraphRef.current.innerText = likeCounter.likes
    }
    return(
        <div>
            <p>This is the redux test.</p>
            <button onClick={clickHandler}>increment</button>
            <p ref={paragraphRef}>No of likes</p>
            <StateConfirmer/>
        </div>
    )
}

function resultTest(){
    return "Hello there"//useSelector(state => state.user.likes) 
}

function ResultComponent(){
    return (
        <p>
            {resultTest()}
        </p>
    )
}
//console.log(resultTest)

/*let element = document.getElementById("root")
let rootCreated = createRoot(element)
rootCreated.render(
    <React.StrictMode>
        <ResultComponent/>
    </React.StrictMode>
)*/

/*let element = document.getElementById("root")
let rootCreated = ReactDom.createRoot(element)
rootCreated.render(
    <Provider store={store}>
        <LikeTest/>
    </Provider>
)*/
export {LikeTest}