import React from "react";
import ReactDOM from "react-dom";

import "./expensive-dark.sass";
import {ExpensiveNavbar} from "./components/ExpensiveNavbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Help, Home, MyList, NotFound, Pages, Profile, Search,} from "./pages";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ExpensiveNavbar/>
            <Routes>
                <Route path={Pages.Home} element={<Home/>}/>
                <Route path={Pages.MyList} element={<MyList/>}/>
                <Route path={Pages.Help} element={<Help/>}/>
                <Route path={Pages.Search} element={<Search/>}/>
                <Route path={Pages.Profile} element={<Profile/>}/>
                <Route path="*" element = {<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
