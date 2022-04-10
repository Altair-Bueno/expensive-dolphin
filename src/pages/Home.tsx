import {DealList} from "../components/DealList";
import {AlertType, ExpensiveAlert} from "../components/ExpensiveAlert";
import {ExpensiveLoading} from "../components/ExpensiveLoading";
import {LoadError} from "../components/LoadError";
import {useCheapShark} from "../cheapshark";
import {dealsURL, ListOfDealsParam} from "../cheapshark/deals";

export {
    Home
}

function Home() {
    const query:ListOfDealsParam = {}
    const ofertas = useCheapShark(dealsURL,query);

    if (ofertas.isLoading) {
        return <ExpensiveLoading />;
    } else if (ofertas.data) {
        return (
            <div className={"d-flex justify-content-center m-3"}>
                <DealList elements={ofertas.data}/>
            </div>
        );
    }else{
        const alert = {
            alertType: AlertType.danger,
            title: "Loading error",
            content: "An unexpected error occured while loading the data. Reaload the website to try again.",
            buttonText: "Close",
        }
        return <>
            <LoadError/>
            <ExpensiveAlert {...alert}/>
        </>
    }
}