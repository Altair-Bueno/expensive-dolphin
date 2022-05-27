import {useSearchHistory} from "../../types";

export function SearchHistory() {
    let [searchHistory,setSearchHistory] = useSearchHistory()
    document.title = "Expensive Dolphin - Search history";
    // @ts-ignore
    return <div>
            <h1 className={"text-light"}>
                Search history:
                <button onClick={x=>setSearchHistory([])} className={"btn btn-primary ms-5"}>
                    Clear search history
                </button>
            </h1>

        {<h5 className={"text-light"}>{searchHistory.map(x => {
            if(x.title != undefined && x.title.length > 0){
                return <>- {x.title} <br/> </>
            }
        })}</h5>}

        </div>
}