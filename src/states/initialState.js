// here I want to define two initial states, one to be used by the redux reducers,
// remember that one advantage reduc has over react reducers is that for it the initial states is immmutable.
// the other one which is a context to be used by the normal react reducers, for It I want to test if the context is mutable.
import {createContext} from "react"
import {timeSetter} from "../timeUpdater"

// redux state
// also note that some of the states are not accessed from the database like the colors, they are simply retrieved from the user or browser settings
let initialState = {
    // extract every piece of useful github information
    // linkedin has been placed here incase someone needs to connect with someone in terms of work he/she can know how to reach him/her
    user : {
        userName : "",
        gmail: "",
        token: null,
        socket: null,
        inbox : null,
        globalVGroup : null,
        linkedIn : "",
        githubFollowers : 0,
        githubFollowing: 0,
        githubBadgesEarned: 0,
        noOfRepos : 0,
        githubStars : 0,
        githubStats : {

        },
        githubprofilePic : true,
        likes : 25,
        comments : 10
    },
    // these properties are all subject to dynamic change
    chat : {
        groupsInvolved: [],
        messageDelivered : true,
        messageRead: true,
        currentlyTyping: "Tom",
        // look for an Api that can supply me with all these reactions, or that I can copy the various names in order to use them.
        messageReactions : {
            likes : 10,
            haha: 15,
            crying: 1,
            handshake: 2
        },
        onlineUsers: [],
        lastSeenUsers: [],
        today: timeSetter()
    },
    // identify the user using a combination of the usernameandGmail, hashed of course using different random salts.
    // that identity is what will be used as the identity of the currentActiveUser
    codeConference : {
        group: true,
        groupName : "",
        noOfUsers : 0,
        // azing the one who's screen is currently on the large screen for people to see and this is normally true for the prep room alone whereby the guys arrange themselves.
        currentActiveUser : "",
        currentActivity : "preparation Room",
        objectiveTitle: "making the new website",
        task: "bulding the login page"
    },
    prepRoom : {

    },
    codeRoom: {

    },
    musicSelection: {

    },
    colorSelection: {
        colorWhite: "rgba(255,255,255,1)",
        coloWhiteFaded: "rgba(255,255,255,0.1)",
        colorBlue: "rgba(0,0,255,1)",
        colorDark: "rgba(0,0,0,1)",
        colorDarkFaded: "rgba(0,0,0,0.8)",
        boxShadowInputs: "0.01rem 0.01rem 0.25rem rgba(0,0,255,1)",
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

// react context
let initialStateContext = createContext({
    // extract every piece of useful github information
    // linkedin has been placed here incase someone needs to connect with someone in terms of work he/she can know how to reach him/her
    user : {
        username : "",
        gmail: "",
        token: null,
        linkedIn : "",
        githubFollowers : 0,
        githubFollowing: 0,
        githubBadgesEarned: 0,
        noOfRepos : 0,
        githubStars : 0,
        githubStats : {

        },
        githubprofilePic : true,
        likes : 25,
        comments : 10
    },
    // these properties are all subject to dynamic change
    chat : {
        messageDelivered : true,
        messageRead: true,
        currentlyTyping: "Tom",
        // look for an Api that can supply me with all these reactions, or that I can copy the various names in order to use them.
        messageReactions : {
            likes : 10,
            haha: 15,
            crying: 1,
            handshake: 2
        }
    },
    // identify the user using a combination of the usernameandGmail, hashed of course using different random salts.
    // that identity is what will be used as the identity of the currentActiveUser
    codeConference : {
        group: true,
        groupName : "",
        noOfUsers : 0,
        // azing the one who's screen is currently on the large screen for people to see and this is normally true for the prep room alone whereby the guys arrange themselves.
        currentActiveUser : "",
        currentActivity : "preparation Room",
        objectiveTitle: "making the new website",
        task: "bulding the login page"
    },
    prepRoom : {

    },
    codeRoom: {

    },
    musicSelection: {

    }
})

export {initialState,initialStateContext}