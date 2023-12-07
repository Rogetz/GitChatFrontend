import { DateTime } from "luxon";

// create a today state in the store that can be updated from here always.
import { useDispatch } from "react-redux";
// ThiS will only be a functional component that only updates the today state in the redux store so i CAN PLACE IT ANYWHERE.

//run after every minute,so that when the day changes it can notice it.

// use it inside a component
/// pass it the reduxDispatch and the timeUpdater reducer
export function timeUpdating(reduxDispatch,timeUpdate){
    let rawTime = Date.now()
    let date = new DateTime(rawTime).day
    let month = new DateTime(rawTime).month
    let year = new DateTime(rawTime).year
    let hour = () => {let hour = new DateTime(rawTime).hour;if( hour < 10 ){ return "0"+hour}else{return hour}}
    let minute = () =>  {let minute = new DateTime(rawTime).minute;if( minute < 10 ){ return "0"+minute}else{return minute}}
    let second = () =>  {let second = new DateTime(rawTime).second;if( second < 10 ){ return "0"+second}else{return second}}
    let fullDate =  `${date}/${month}/${year}.${hour()}:${minute()}:${second()}`                 
    let time = fullDate.trim() 
    //set the dispatch to point to the time from here. 
    reduxDispatch(timeUpdate({today: time}))
}

export function daySetter(day){
    switch (day) {
        case 1 : 
            return "monday"
            break
        case 2 : 
            return "Tuesday"
            break
        case 3 : 
            return "wednesday"
            break
        case 4 : 
            return "Thursday"
            break
        case 5 : 
            return "friday"
            break
        case 6 : 
            return "saturday"
            break
        case  7: 
            return "sunday"
            break

    }    
}


export function timeSetter(){
    let rawTime = Date.now()
    let date = new DateTime(rawTime).day
    let month = new DateTime(rawTime).month
    let year = new DateTime(rawTime).year
    let hour = () => {let hour = new DateTime(rawTime).hour;if( hour < 10 ){ return "0"+hour}else{return hour}}
    let minute = () =>  {let minute = new DateTime(rawTime).minute;if( minute < 10 ){ return "0"+minute}else{return minute}}
    let second = () =>  {let second = new DateTime(rawTime).second;if( second < 10 ){ return "0"+second}else{return second}}
    let fullDate =  `${date}/${month}/${year}.${hour()}:${minute()}:${second()}`                 
    let time = fullDate.trim() 
    return time
}

