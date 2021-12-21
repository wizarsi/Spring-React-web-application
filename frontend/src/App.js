import React from "react";
import {routes, AppRoute} from "./security/routes"

import {BrowserRouter, Route, Routes} from "react-router-dom";
import MyHeaderContainer from "./components/Header/MyHeaderContainer";

const App = ()=>{
    return (<BrowserRouter>
                <MyHeaderContainer/>
                <Routes>
                    {
                        routes.map((route)=>{
                            return <Route path={route.path}  element={<AppRoute component={route.component} isPrivate={route.isPrivate}/>}/>
                        })
                    }
                </Routes>
        </BrowserRouter>
    )
}

export default App



