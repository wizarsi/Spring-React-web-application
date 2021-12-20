import React from "react";
import {Navigate} from "react-router-dom";

import LoginPage from "../components/pages/LoginPage/LoginPage"
import MainPage from "../components/pages/MainPage/MainPage"
import RegisterPage from "../components/pages/RegisterPage/RegisterPage"

export const routes = [
    {
        path: "/login",
        component: LoginPage,
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
        component: LoginPage,
        isPrivate: false
    },
]

export const AppRoute = ({component: Component, isPrivate, props}) => {
    const isAuth = localStorage.getItem("userRSWebLab4")
    return (
            (isPrivate && !isAuth) ?  (<Navigate to="/login"/>) : (<Component {...props}/>)
    )
}
