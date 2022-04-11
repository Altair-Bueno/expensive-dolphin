import {useCheapShark} from "../cheapshark";
import {ExpensiveLoading} from "../components/ExpensiveLoading";
import {AlertProps, ExpensiveAlert} from "../components/ExpensiveAlert";
import {useState} from "react";
import {UseQueryResult} from "react-query";
import {Deal} from "../cheapshark/deals/listOfDeals";
import {dealsURL} from "../cheapshark/deals";
import {Filter, FilterProps} from "../components/search/Filter";
import {DealList} from "../components/DealList";

export {
    Search
}

function Search() {
    const [filter,setFilter] = useState({})
    const gameList:UseQueryResult<Deal[],AlertProps> = useCheapShark(dealsURL, filter)
    const filterProps:FilterProps = { setFilter, filter }

    let main;
    if (gameList.isLoading) {
        main = <ExpensiveLoading/>
    } else if (gameList.isError) {
        main = <ExpensiveAlert {...gameList.error}/>
    } else if (gameList.data) {
        main = <DealList elements={gameList.data}/>
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