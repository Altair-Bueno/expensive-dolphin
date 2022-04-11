import {DealList} from "../components/DealList";
import {AlertType, ExpensiveAlert} from "../components/ExpensiveAlert";
import {ExpensiveLoading} from "../components/ExpensiveLoading";
import {LoadError} from "../components/LoadError";
import {useCheapShark} from "../cheapshark";
import {dealsURL, ListOfDealsParam} from "../cheapshark/deals";
import {Store} from "../cheapshark/stores/stores";
import {storesURL} from "../cheapshark/stores";

export {
    Home
}

function Home() {
    const query: ListOfDealsParam = {}
    const ofertas = useCheapShark(dealsURL, query);

    const tiendas = useCheapShark(storesURL)

    if (ofertas.isLoading || tiendas.isLoading) {
        return <ExpensiveLoading/>;
    } else if (ofertas.data && tiendas.data) {
        return (
            <div className={"d-flex justify-content-center m-3"}>
                <DealList elements={ofertas.data} stores={tiendas.data}/>
            </div>
        );
    } else {
        const alert = {
            alertType: AlertType.danger,
            title: "Loading error",
            content: "An unexpected error occurred while loading the data. Reload the website to try again.",
            buttonText: "Close",
        }
        return <>
            <LoadError/>
            <ExpensiveAlert {...alert}/>
        </>
    }
}