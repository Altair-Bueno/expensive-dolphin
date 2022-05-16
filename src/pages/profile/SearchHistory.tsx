import {useSearchHistory} from "../../types";

export function SearchHistory() {
    let [searchHistory,setSearchHistory] = useSearchHistory()

    return <div>
        <button onClick={x=>setSearchHistory([])} className={"btn btn-primary"}>Clear search history</button>
        <h3 className={"text-light"}>{searchHistory.map(x => <>{x.title} <br/></>)}</h3>
        </div>
}