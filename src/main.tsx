import "./expensive-dark.sass";

import React from "react";
import ReactDOM from "react-dom";

import {ExpensiveNavbar} from "./components/ExpensiveNavbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Help, Home, MyList, NotFound, Pages, Profile, Search,} from "./pages";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient()
const expensiveRouter = (
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
)

ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <div>
                {expensiveRouter}
            </div>
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
