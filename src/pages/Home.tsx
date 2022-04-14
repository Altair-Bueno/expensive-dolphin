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

    if (query.isLoading) {
        result = <ExpensiveLoading/>
    } else if (query.error) {
        result = <ExpensiveAlert {...query.error}/>
    } else if (query.data) {
        result = <DealList elements={query.data} numberOfDeals={4}/>
    }

    return <div className={"bg-dark"} key={store.storeID}>
        <h1 className={"text-light"}>{store.storeName}</h1>
        {result}
    </div>;
}

function Home() {
    const stores = useContext(StoresContext)
    const mainContent = stores
        .map(x=> [useCheapShark(dealsURL, {storeID: x.storeID}),x] as [UseQueryResult<Deal[],AlertProps>,Store])
        .map(([x,y])=>queryToContent(x,y))

    return <main className={"container"}>
        {mainContent}
    </main>
}