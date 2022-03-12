import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import {ExpensiveNavbar} from "./components/ExpensiveNavbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Help, Home, MyList, Pages, Profile, Search, Stores} from "./pages";


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ExpensiveNavbar/>
            <Routes>
                <Route path={Pages.Home} element={<Home/>}/>
                <Route path={Pages.Stores} element={<Stores/>}/>
                <Route path={Pages.MyList} element={<MyList/>}/>
                <Route path={Pages.Help} element={<Help/>}/>
                <Route path={Pages.Search} element={<Search/>}/>
                <Route path={Pages.Profile} element={<Profile/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
