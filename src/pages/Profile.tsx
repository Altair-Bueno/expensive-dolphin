import {Link, Route, Routes} from "react-router-dom";
import {ProfilePages} from "./index";

export function Profile() {
    const asideList = [
        { name: "Search history", to: ProfilePages.Recent },
        { name: "Your data" , to: ProfilePages.YourData }
    ].map(x=><li className={"list-group-item"} key={x.name}>
        <Link to={x.to}>
            {x.name}
        </Link>
    </li>)

    const profileRoutes = [
        { element:<h1>Placeholder</h1>, index: true },
        { element: <h1>Placeholder 2</h1>, path: ProfilePages.Recent },
        { element: <h1>Placeholder 3</h1>, path: ProfilePages.YourData }
    ].map(x=><Route {...x}/>)

    return <div className={"container mt-3"}>
        <div className={"row mb-3"}>
            <h1 className={"text-light"}>
                Search titles on CheapShark
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
