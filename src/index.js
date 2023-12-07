//import {render} from "react-dom"
import React from "react";
// finally my react worked and just realized that the initial issue was that I had placed the react-dom and react-icons which are actually needed in the react app during its working in the devDependencies and that was just being a great issue finally when I changed it to be placed in the dependencies section, this worked perfectly fine.
import reactDom from "react-dom/client";
import {createRoot} from "react-dom/client";
import {HelloComponent} from "./app";
import CodeRoom from "./codeRoom"
import {PrepRoom} from "./prepRoom"
import { Authentication } from "./Login";

// for the redux maintenance.
import {store} from "./states/reduxStore"
import {Provider} from "react-redux"

// Note that the index file should only be used for rendering the main component and nothing else, to help with organization.
/*const root = document.getElementById("root")
render(<HelloComponent/>,root)*/
// render method was deprecated in react 18 thats why we're using the root node to render.
const element = document.getElementById("root");
const rootCreated = reactDom.createRoot(element);
rootCreated.render(
    //so for sockets avoid using the React.StrictMode so  that the sockets are not called twice due to debugging
    <Provider store={store}>
        <Authentication/>            
    </Provider>
)

/* // strict mode is only useful for debugging but it's an enemy to sockets.
    <React.StrictMode>
        <Provider store={store}>
            <Authentication/>            
        </Provider>
    </React.StrictMode>

*/
// just realized that webpack actually doesn't notice logical errors. I want to try running it using eslint.
