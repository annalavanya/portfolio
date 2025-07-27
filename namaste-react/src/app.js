import React from "react";
import ReactDOM from "react-dom/client";
import "react/jsx-dev-runtime";
import HeaderComponent from "../src/components/Header";
import BodyComponent from "../src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import ResDetail from "./components/ResDetails";

const MainApp = () => {
   return (<div className="main">
        <HeaderComponent/>
        <Outlet/>
    </div>)
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainApp/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <BodyComponent/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {

                path: '/restaurant/:resId',
                element: <ResDetail/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

