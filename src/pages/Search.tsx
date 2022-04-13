import {useCheapShark} from "../cheapshark";
import {ExpensiveLoading} from "../components/wrappers/ExpensiveLoading";
import {ExpensiveAlert} from "../components/wrappers/ExpensiveAlert";
import {useContext, useState} from "react";
import {dealsURL} from "../cheapshark/deals";
import {Filter} from "../components/search/Filter";
import {DealList} from "../components/game/list/DealList";
import {StoresContext} from "../context";

export {
    Search
}

function Search() {
    const [filter,setFilter] = useState({})
    const gameList = useCheapShark(dealsURL, filter)
    const stores = useContext(StoresContext)

    let main;
    if (gameList.isLoading) {
        main = <ExpensiveLoading/>
    } else if (gameList.isError) {
        main = <ExpensiveAlert {...gameList.error}/>
    } else if (gameList.data) {
        main = <DealList elements={gameList.data}/>
    }

    return <div className={"container mt-3"}>
        <div className={"row mb-3"}>
            <h1 className={"text-light"}>Search titles on CheapShark</h1>
        </div>
        <div className={"row"}>
            <aside className={"col-lg-4 col-md-12"}>
                <Filter setFilter={setFilter} filter={filter} stores={stores}/>
            </aside>
            <main className={"col-lg col-md-12"}>
                {main}
            </main>
        </div>
    </div>
}