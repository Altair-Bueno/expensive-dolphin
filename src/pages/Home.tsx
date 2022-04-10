import { dealsBaseAPIURL } from "../cheapshark/apiurls";
import { ListOfDeals } from "../cheapshark/deals/listOfDeals";
import {DealList} from "../components/DealList";
import { AlertType, ExpensiveAlert } from "../components/ExpensiveAlert";
import { ExpensiveLoading } from "../components/ExpensiveLoading";
import { LoadError } from "../components/LoadError";
import { TApiResponse, useApiGet } from "../components/Query";

export {
    Home
}

function Home() {
    const ofertas: TApiResponse = useApiGet(dealsBaseAPIURL);

    var loading =
        ofertas.loading ||
        ofertas.data === undefined;
    var error = ofertas.error != null;

    if (error) {
        return (
        <>
            {LoadError()}
            {ExpensiveAlert({
            alertType: AlertType.danger,
            title: "Loading error",
            content:
                "An unexpected error occured while loading the data. Reaload the website to try again.",
            buttonText: "Close",
            })}
        </>
        );
    }

    if (loading) {
        return <ExpensiveLoading />;
    }

    return (
        <div className={"d-flex justify-content-center m-3"}>
            <DealList elements={ofertas.data}/>
        </div>
    );
}