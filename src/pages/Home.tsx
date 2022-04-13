import {DealList} from "../components/game/list/DealList";
import {AlertType, ExpensiveAlert} from "../components/wrappers/ExpensiveAlert";
import {ExpensiveLoading} from "../components/wrappers/ExpensiveLoading";
import {ExpensiveError} from "../components/wrappers/ExpensiveError";
import {useCheapShark} from "../cheapshark";
import {dealsURL, ListOfDealsParam} from "../cheapshark/deals";

export {
    Home
}

function Home() {
    const query: ListOfDealsParam = {}
    const ofertas = useCheapShark(dealsURL, query);
    if (ofertas.isLoading ) {
        return <ExpensiveLoading/>;
    } else if (ofertas.data) {
        return (
            <div className={"d-flex justify-content-center m-3"}>
                <DealList elements={ofertas.data} numberOfDeals={6}/>
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
            <ExpensiveError/>
            <ExpensiveAlert {...alert}/>
        </>
    }
}