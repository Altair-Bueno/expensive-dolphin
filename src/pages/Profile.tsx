import {Link, Route, Routes} from "react-router-dom";
import {ProfilePages} from "./index";
import {useExpensiveUser} from "../types";
import {SearchHistory} from "./profile/SearchHistory";
import {ManageAlerts} from "./profile/ManageAlerts";
import {Favourites} from "./profile/Favourites";
import {ManageMyData} from "./profile/ManageMyData";

function ProfilePlaceholder() {
    return <h1>
        Just a main panel placeholder
    </h1>
}

export function Profile() {
    const [user,_] = useExpensiveUser()
    const headerText = user ? user.name : "My account"

    const asideList = [
        { name: "Search history", to: ProfilePages.SearchHistory },
        { name: "Manage alerts" , to: ProfilePages.ManageAlerts },
        { name: "Favourites" , to: ProfilePages.Favourites },
        { name: "Manage my Data" , to: ProfilePages.ManageMyData}
    ].map(x=><li className={"list-group-item"} key={x.name}>
        <Link to={x.to}>
            {x.name}
        </Link>
    </li>)

    const profileRoutes = [
        { element: <ProfilePlaceholder/>, index: true },
        { element: <SearchHistory/>, path: ProfilePages.SearchHistory },
        { element: <ManageAlerts/>, path: ProfilePages.ManageAlerts },
        { element: <Favourites/>, path: ProfilePages.Favourites },
        { element: <ManageMyData/>, path: ProfilePages.ManageMyData }
    ].map(x=><Route {...x}/>)

    return <div className={"container mt-3"}>
        <div className={"row mb-3"}>
            <h1 className={"text-light"}>
                {headerText}
            </h1>
        </div>
        <div className={"row"}>
            <aside className={"col-lg-4 col-md-12"}>
                <ul className={"list-group"}>
                    {asideList}
                </ul>
            </aside>
            <main className={"col-lg col-md-12"}>
                <Routes>
                    {profileRoutes}
                </Routes>
            </main>
        </div>
    </div>
}
