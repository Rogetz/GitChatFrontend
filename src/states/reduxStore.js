import {configureStore}  from "@reduxjs/toolkit"
import {likeReducer,modeReducer,userReducer,chatReducer} from "./newReducer"

// this is another object style they'll be exported as part of an object still{}.
export const store = configureStore({
    // check the right way of assigning a reducer whether its an array or an object.
    // found out it should be an object, instead of an array.
    reducer: {
        likeCounter : likeReducer,
        mode : modeReducer,
        user : userReducer,
        chat : chatReducer
        // surprisingly enough its this attribute names defined in the reducer attribute that actually get used by the components, since its this store that's provided to them.
    }
})
