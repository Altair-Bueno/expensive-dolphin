import {useSearchHistory} from "../../types";

export function SearchHistory() {
    let [searchHistory,setSearchHistory] = useSearchHistory()

    return <div>
        <h1 className={"text-light"}>
            Search history:
            <button onClick={x=>setSearchHistory([])} className={"btn btn-primary ms-5"}>Clear search history
            </button>
        </h1>

        <h5 className={"text-light"}>{searchHistory.map(x => <>-{x.title} <br/></>)}</h5>
        </div>
}