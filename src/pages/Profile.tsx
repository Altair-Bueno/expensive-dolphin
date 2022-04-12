import {ExpensiveGame} from "../components/game/ExpensiveGame";
import {dealsURL, ListOfDealsParam} from "../cheapshark/deals";
import {useCheapShark} from "../cheapshark";
import {ExpensiveLoading} from "../components/ExpensiveLoading";
import {AlertType, ExpensiveAlert} from "../components/ExpensiveAlert";
import {LoadError} from "../components/LoadError";

export {Profile};

function Profile() {
    const query: ListOfDealsParam = {}
    const ofertas = useCheapShark(dealsURL, query);

    if (ofertas.isLoading) {
        return <ExpensiveLoading/>;
    } else if (ofertas.data) {
        return (
            <>
                <ExpensiveGame oferta={ofertas.data[0]}/>
            </>
        );
    } else {
        const alert = {
            alertType: AlertType.danger,
            title: "Loading error",
            content: "An unexpected error occurred while loading the data. Reload the website to try again.",
            buttonText: "Close",
        }
        return (
            <>
                <LoadError/>
                <ExpensiveAlert {...alert}/>
            </>
        );
    }


}
