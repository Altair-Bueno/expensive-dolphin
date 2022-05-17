import {DealList} from "../components/game/list/DealList";
import {
    AlertProps,
    ExpensiveAlert
} from "../components/wrappers/ExpensiveAlert";
import {ExpensiveLoading} from "../components/wrappers/ExpensiveLoading";
import {useCheapShark} from "../cheapshark";
import {dealsURL} from "../cheapshark/deals";
import {useContext} from "react";
import {StoresContext} from "../types";
import {UseQueryResult} from "react-query";
import {Store} from "../cheapshark/stores/stores";
import {Deal} from "../cheapshark/deals/listOfDeals";

export {
    Home
}


function queryToContent(query: UseQueryResult<Deal[],AlertProps>, store: Store) {
    let result;
    let noDataFound;

    if (query.isLoading) {
        result = <ExpensiveLoading/>
    } else if (query.error) {
        result = <ExpensiveAlert {...query.error}/>
    } else if (query.data) {
        result = <DealList elements={query.data} numberOfDeals={4}/>
        noDataFound = query.data.length === 0;
    }

    /**
     * Only returns info of that shop in case it has store.gameList.length > 0
     */
    if(!noDataFound){
        return <div className={"bg-dark my-3 p-2 rounded"} key={store.storeID}>
            <h1 className={"text-light ms-3"}>{store.storeName}</h1>
            {result}
        </div>;
    } else {
        return <></>
    }
}

function Home() {
    document.title = "Expensive Dolphin -  Home";
    const stores = useContext(StoresContext)
    const mainContent = stores
        .map(x=> [useCheapShark(dealsURL, {storeID: [Number.parseInt(x.storeID)]}),x] as [UseQueryResult<Deal[],AlertProps>,Store])
        .map(([x,y])=>queryToContent(x,y))

    return <main className={"container"}>
        {mainContent}
    </main>
}