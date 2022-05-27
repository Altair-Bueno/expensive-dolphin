import {useSearchHistory} from "../../types";
import './SearchHistory.css'

export function SearchHistory() {
    let [searchHistory,setSearchHistory] = useSearchHistory()
    document.title = "Expensive Dolphin - Search history";
    // @ts-ignore
    return <div className={"text-light"}>

        <button onClick={() =>setSearchHistory([])} className={"btn btn-primary btn-sm mb-1"}>
            Clear search history
        </button>


        {<h5 className={"text-light"}>{searchHistory.map((x,i) => {
            if(x.title != undefined && x.title.length > 0 && i <= 4){
                return <>
                    <div className="row">
                        <div className="col-sm-5 text-truncate">
                            <div className="container mt-1 p-1 bg-dark rounded-3">
                                <div className={"ms-2 me-2"}>
                                    <a href={"/search?title=" + x.title} className={"linkHistorial"}>{
                                        x.title.length > 10 ? x.title.slice(0,10).concat('...') : x.title
                                    }</a>
                                </div>
                            </div>

                        </div>

                        <div className="col-sm-auto">
                            <button onClick={() => {
                                searchHistory[i].title = "";
                                setSearchHistory(searchHistory);
                            }
                            } className={"btn btn-primary btn-sm m-1"}><i className="bi bi-x"></i></button>
                        </div>
                    </div>
                </>
            }
        })}</h5>}

        </div>
}