import "./expensive-dark.sass";

import React from "react";
import ReactDOM from "react-dom";

import {ExpensiveNavbar} from "./components/ExpensiveNavbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Help, Home, MyList, NotFound, Pages, Profile, Search,} from "./pages";
import {QueryClient, QueryClientProvider} from "react-query";
import {storesURL} from "./cheapshark/stores";
import {Store} from "./cheapshark/stores/stores";
import {StoresContext} from "./ExpensiveContext";

const queryClient = new QueryClient()
const stores = await queryClient.fetchQuery([storesURL, undefined], async () => await fetch(storesURL).then(async x => await x.json() as Store[]))
const expensiveRouter = (
    <BrowserRouter>
        <ExpensiveNavbar/>
        <Routes>
            <Route path={Pages.Home} element={<Home/>}/>
            <Route path={Pages.MyList} element={<MyList/>}/>
            <Route path={Pages.Help} element={<Help/>}/>
            <Route path={Pages.Search} element={<Search/>}/>
            <Route path={Pages.Profile} element={<Profile/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
)

ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <StoresContext.Provider value={stores}>
                <div id={"page-content"}>
                    {expensiveRouter}
                </div>
            </StoresContext.Provider>
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
