import {useCheapShark} from "../cheapshark";
import {ExpensiveLoading} from "../components/wrappers/ExpensiveLoading";
import {ExpensiveAlert} from "../components/wrappers/ExpensiveAlert";
import {useContext, useEffect, useState} from "react";
import {dealsURL, ListOfDealsParam} from "../cheapshark/deals";
import {Filter} from "../components/search/Filter";
import {DealList} from "../components/game/list/DealList";
import {StoresContext, useSearchHistory} from "../types";
import {useSearchParams} from "react-router-dom";

export {
    Search
}

function Search() {
    // When the component it's first mounted on React, it fetches the initial
    // state from the URL params (link shared or saved on bookmarks)
    const [searchHistory,setSearchHistory] = useSearchHistory()
    const [searchParams,setSearchParams] = useSearchParams()
    const [filter,setFilter] = useState(()=>{
        const params = new URLSearchParams(searchParams)
        return Object.fromEntries(params) as ListOfDealsParam
    })
    // After each component re-render, if `filter` gets updated, we also update
    // the URL parameters. This way we keep the component state updated with the
    // browser's URL
    useEffect(()=>{
        setSearchParams(new URLSearchParams(filter as any))
        // TODO improve the search history
        if (searchHistory.length === 40) searchHistory.pop()
        searchHistory.unshift(filter)
        setSearchHistory(searchHistory)
    },[filter])

    const gameList = useCheapShark(dealsURL, filter)
    const stores = useContext(StoresContext)

    document.title = "Expensive Dolphin -  Search";


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