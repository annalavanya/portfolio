import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "react/jsx-dev-runtime";
import HeaderComponent from "../src/components/Header";
import BodyComponent from "../src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import ResDetail from "./components/ResDetails";

const Grocery = lazy(() => import("./components/Grocery"));

import UserContext from "./utility/UserContext";


const MainApp = () => {
    const [userNameUpdate, setUserNameUpdate] = useState();

    useEffect(() => {
    const data = {
        user: "Lavanya"
    }

    setUserNameUpdate(data?.user);

},[]);

   return (<div className="main">
    <UserContext.Provider value={{user: userNameUpdate, setUserNameUpdate}}>
        <HeaderComponent/>
        <Outlet/>
    </UserContext.Provider>
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

                path: '/grocery',
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
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

