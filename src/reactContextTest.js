import React, { createContext } from "react"
import {initialStateContext} from "./states/initialState"
import ReactDom from "react-dom/client"
import { ConfirmContext } from "./reactContextConfirm"
import {useContext,useReducer,useRef,useEffect} from "react"

// I just want to test if changes on the state can be refferenced here.

// redesign it to be a componenet on its own.
/*function reducerCreator(){
    let actualContext = useContext(initialStateContext)
    let [state,dispatch] = useReducer(function(state,action){
        // remember that the action type is basically a string.
        if(action.type == "LIKE_INCREMENT"){
            state.user.likes = state.user.likes += 1
            // I've added these for the sake of trying to modify the actualContext through refference.
            return (
                {...state,user : {likes: state.user.likes += 1}}
            )
        }
    },actualContext)
    return state
}*/

// I've not used var,let,const since I want this variable to be global and the trick is to not give it any variable keyword, it becomes global automaticaly.
// without keywords was meant to work even inside functions to expose the data but it doesn't
// however  javascript here seems silly with the globals, it states that they are not defined.
//myContext = createContext(actualContext)

function ResultTest(){
    // testing directly from the react context to see if anything changed
    let actualContext = useContext(initialStateContext)
    // In a stateless hook we dont reference the ref directly as in the case of a class component as in the style of using the e attribute in a function.
    // the advantage of a ref being in a hook is that you can rerence it in another elements event handler and I love that.
    const paragraphRef = useRef(null) // this ref hook is what allows you to modify another element that has no event as the values change automatically
    let [state,dispatch] = useReducer(function(state,action){
        // So I've just learnt that you can actually use the context to modify the elements, just ensure that you direcly modify it, don't make a copy as in the case of redux.
        // remember that the action type is basically a string.
        if(action.type == "LIKE_INCREMENT"){
            // ensure you reference an actual value.
            state.user.likes = state.user.likes += 1
            paragraphRef.current.innerText = actualContext.user.likes
            console.log("refs value:", paragraphRef.current.innerText)
            // I've added these for the sake of trying to modify the actualContext through refference.
            /*return 
                // these style below I copied from reduc I'm going to use a new one.
                // remember that the ... spread operator actually copies elements. I don't want a copy for now.
                //{...state,user : {likes: state.user.likes += 1}}
                
            */
           return state
        }
    },actualContext)
    //also remember that the useRef only works when the DOM has already been rendered so find a way of including it in some event handler or useEffect if its dependent on some values thought do remember that if you pass an empty array it only changes once.
    // remember that here the useEffect runs only once since you used it with some empty brackets.
    /*useEffect(function(){
        paragraphRef.current.innerText = actualContext.user.likes
    },[])*/
    let incrementBtnHandler = (e) => dispatch({type:"LIKE_INCREMENT"})
    // this was the class style whereby I couldn't insert these ref attribute inside another event and also this was simply not possible since this is a stateless component.
    //let paragraphRef = (e) => {e.value = actualContext.user.likes}
    
    // remember that the jsx can not interpret objects, you just have  to be specific, e.g they can not understand state.user but they can understand state.user.likes
    // I simply have to find a way of referencing the p element and modifying it from here.
    //             <p ref={paragraphRef}>the test for the context: </p>
    //<input ref={paragraphRef} onChange={e=>"hello there"} type="text"></input> 
    return (
        <div>
            <p ref={paragraphRef}>the test for the context: </p>
            <p>Incrementor <button onClick={incrementBtnHandler} >Incrementor</button></p>
            <p>This one below is a new component,I want to see if it also changes</p>
            <ConfirmContext/>
        </div>
    )
}

let element = document.getElementById("root")
let rootCreated = ReactDom.createRoot(element)
rootCreated.render(<ResultTest/>) 

