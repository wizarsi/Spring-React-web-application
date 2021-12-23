import React from "react";
import {routes, AppRoute} from "./security/routes"

import {BrowserRouter, Route, Routes} from "react-router-dom";
import MyHeaderContainer from "./components/Header/MyHeaderContainer";
import "../src/myAssets/style.css"

const App = () => {
    return (<BrowserRouter>
            <div class="wrapper">
                <div class="header">
                    <MyHeaderContainer/>
                </div>
                <div class="content">
                    <Routes>
                        {
                            routes.map((route) => {
                                return <Route path={route.path} element={<AppRoute component={route.component}
                                                                                   isPrivate={route.isPrivate}/>}/>
                            })
                        }
                    </Routes>
                </div>
            </div>


        </BrowserRouter>
    )
}

export default App



