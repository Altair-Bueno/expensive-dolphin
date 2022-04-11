import {useCheapShark} from "../cheapshark";
import {ExpensiveLoading} from "../components/ExpensiveLoading";
import {AlertProps, ExpensiveAlert} from "../components/ExpensiveAlert";
import {useState} from "react";
import {UseQueryResult} from "react-query";
import {Deal} from "../cheapshark/deals/listOfDeals";
import {DealListElement} from "../components/DealListElement";
import {dealsURL, ListOfDealsParam} from "../cheapshark/deals";
import {Filter, FilterProps} from "../components/search/Filter";

export {
    Search
}

function Search() {
    const init: ListOfDealsParam = { title:"" }
    const [filter,setFilter] = useState(init)
    const gameList:UseQueryResult<Deal[],AlertProps> = useCheapShark(dealsURL, filter)

    const filterProps:FilterProps = {
        updateTitle: x => setFilter({...filter,title:x.target.value})
    }

    let main;
    if (gameList.isLoading) {
        main = <ExpensiveLoading/>
    } else if (gameList.isError) {
        main = <ExpensiveAlert {...gameList.error}/>
    } else if (gameList.data) {
        main = gameList.data.map(DealListElement)
    }
    return <div className={"container"}>
        <div className={"row"}>
            <aside className={"col-lg-4 col-md-12"}>
                <Filter {...filterProps}/>
            </aside>
            <main className={"col-lg col-md-12"}>
                {main}
            </main>
        </div>
    </div>
}