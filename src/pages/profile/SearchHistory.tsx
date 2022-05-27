import {useSearchHistory} from "../../types";

export function SearchHistory() {
    let [searchHistory,setSearchHistory] = useSearchHistory()
    document.title = "Expensive Dolphin - Search history";
    // @ts-ignore
    return <div>
            <h1 className={"text-light"}>
                Search history:
                <button onClick={() =>setSearchHistory([])} className={"btn btn-primary ms-5"}>
                    Clear search history
                </button>
            </h1>

        {<h5 className={"text-light"}>{searchHistory.map((x,i) => {
            if(x.title != undefined && x.title.length > 0){
                return <>
                    <div className="row">
                        <div className="col-4">
                            - {x.title}
                        </div>

                        <div className="col">
                            <button onClick={() => {
                                    searchHistory[i].title = "";
                                    setSearchHistory(searchHistory);
                                }
                            } className={"btn btn-primary ms-5 m-1"}>Clear</button>
                        </div>
                    </div>
                </>
            }
        })}</h5>}

        </div>
}