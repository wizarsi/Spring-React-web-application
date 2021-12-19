import React from "react";
import {Navigate} from "react-router-dom";

import SignupPage from "../components/pages/SignupPage/SignupPage"
import MainPage from "../components/pages/MainPage/MainPage"
import RegisterPage from "../components/pages/RegisterPage/RegisterPage"

export const routes = [
    {
        path: "/login",
        component: SignupPage,
        isPrivate: false
    },
    {
        path: "/main",
        component: MainPage,
        isPrivate: true
    },
    {
        path: "/register",
        component: RegisterPage,
        isPrivate: false
    },
    {
        path: "/",
        component: SignupPage,
        isPrivate: false
    },
]

export const AppRoute = ({component: Component, isPrivate, props}) => {
    const isAuth = localStorage.getItem("userRSWebLab4")
    return (
            (isPrivate && !isAuth) ?  (<Navigate to="/login"/>) : (<Component {...props}/>)
    )
}
