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
            <aside className={"col-4"}>
                <FilterPanel/>
            </aside>
            <main className={"col"}>
                {gameList}
            </main>
        </div>
    </div>
}