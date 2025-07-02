/* <div id="parent"=>
*   <div id="child1">
*       <h1>This is a h1 tag
*       </h1>
*       <h2> This is h2
*       </h2>
*   </div> 
*   <div id="child2">
*       <h1>This is a h1 tag
*       </h1>
*       <h2> This is h2
*       </h2>
*   </div> 
* </div> 
*/ 

import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("div", 
    {
        id:"parent"
    }, 
    [
        React.createElement("div", { id: "child1"}, [
            React.createElement("h1", {}, "This is a h1"),
            React.createElement("h2", {}, "This is a h2")
        ]),
        React.createElement("div", { id: "child2"}, [
            React.createElement("h1", {}, "This is a h1"),
            React.createElement("h2", {}, "This is a h2 tag")
        ]),
    ]
);

console.log("heading", heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);