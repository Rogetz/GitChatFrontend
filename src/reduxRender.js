import React from "react"
import ReactDom from "react-dom/client"
import {store} from "./states/reduxStore"
import {Provider} from "react-redux"
import {LikeTest} from "./reactReduxTest"


let actualRoot = ReactDom.createRoot(document.getElementById("root"))
actualRoot.render(
    <React.StrictMode>
        <Provider store={store}>
            <LikeTest/>
        </Provider>
    </React.StrictMode>
)