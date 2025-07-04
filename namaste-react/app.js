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
import "react/jsx-dev-runtime";
const heading = React.createElement("div", 
    {
        id:"parent"
    },
    "This is lavanya from React"
);

console.log("heading", heading);

// react element
const jsxHeading = <h1 id="heading">This is Variable 1</h1>
console.log(jsxHeading);

const jsxHeading1 = <div>{jsxHeading} <h1>This is Variable 2</h1></div>

//react component
const FirstComponent = () => { return <div>{jsxHeading1}<h1 id="heading">First Component </h1></div>};

const SecondComponent = () => <div>{FirstComponent()}<FirstComponent/><FirstComponent></FirstComponent><h1 id="heading">Second Component </h1></div>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SecondComponent/>);