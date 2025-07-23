import React from "react";
import ReactDOM from "react-dom/client";
import "react/jsx-dev-runtime";
import HeaderComponent from "../src/components/Header";
import BodyComponent from "../src/components/Body";

const MainApp = () => {
   return (<div className="main">
        <HeaderComponent/>
        <BodyComponent/>
    </div>)
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainApp/>);

