import {ExpensiveGame} from "../components/game/fullscreen/ExpensiveGame";
import {dealsURL, ListOfDealsParam} from "../cheapshark/deals";
import {useCheapShark} from "../cheapshark";
import {ExpensiveLoading} from "../components/wrappers/ExpensiveLoading";
import {AlertType, ExpensiveAlert} from "../components/wrappers/ExpensiveAlert";
import {ExpensiveError} from "../components/wrappers/ExpensiveError";

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
                <ExpensiveError/>
                <ExpensiveAlert {...alert}/>
            </>
        );
    }


}
