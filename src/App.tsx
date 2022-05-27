import {Route, Routes, useLocation} from "react-router-dom";
import {LocationState} from "./types";
import {Game, Help, Home, NotFound, Pages, Search} from "./pages";
import {ExpensiveNavbar} from "./components/wrappers/ExpensiveNavbar";
import React from "react";
import {Alerts} from "./pages/Alerts";


export function App() {
    const currentLocation = useLocation()
    const state = currentLocation.state as LocationState | undefined
    const backgroundLocation = state?.backgroundLocation

    const routes = {
        Home: <Route path={Pages.Home} element={<Home/>}/>,
        Help: <Route path={Pages.Help} element={<Help/>}/>,
        Search: <Route path={Pages.Search} element={<Search/>}/>,
        Alerts: <Route path={Pages.Alerts} element={<Alerts/>}/>,
        Game: <Route path={Pages.Game} element={<Game/>}/>,
        all: <Route path="*" element={<NotFound/>}/>,
    }
    return <div id={"page-content"}>
        <ExpensiveNavbar/>
        <Routes
            location={backgroundLocation ? backgroundLocation : currentLocation}>
            {Object.entries(routes).map(([_, v]) => v)}
        </Routes>
        {backgroundLocation && (
            <Routes>
                {routes.Game}
            </Routes>
        )}
    </div>
}