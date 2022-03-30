import {useState} from "react";

export {
    Search
}

function FilterPanel() {
    return <></>
}
interface Filter {

}

function fetchGames(filter: Filter) {
    return []
}

function Search() {
    const [filter,setFilter] = useState({})
    const gameList = fetchGames(filter)


    return <div className={"container"}>
        <div className={"row"}>
            <aside className={"col-lg-4 col-md-12 border"}>
                <h1>Aside placeholder</h1>
                <FilterPanel/>
            </aside>
            <main className={"col-lg col-md-12 border"}>
                <h1>Gamelist placeholder</h1>
                {gameList}
            </main>
        </div>
    </div>
}