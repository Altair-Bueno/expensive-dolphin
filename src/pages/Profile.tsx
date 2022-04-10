import { dealLookUpBaseAPIURL, } from "../cheapshark/apiurls";
import { DealList } from "../components/DealList";
import { AlertType, ExpensiveAlert } from "../components/ExpensiveAlert";
import { ExpensiveLoading } from "../components/ExpensiveLoading";
import { ExpensiveGame } from "../components/game/ExpensiveGame";
import { LoadError } from "../components/LoadError";
import { TApiResponse, useApiGet } from "../components/Query";

export { Profile };

function Profile() {
        const ofertas: TApiResponse = useApiGet(dealLookUpBaseAPIURL + "612");

        var loading = ofertas.loading || ofertas.data === undefined;

        var error = ofertas.error != null;

        if (error) {
                return (
                        <>
                                {LoadError()}
                                {ExpensiveAlert({
                                        alertType: AlertType.danger,
                                        title: "Loading error",
                                        content: "An unexpected error occured while loading the data. Reload the website to try again.",
                                        buttonText: "Close",
                                })}
                        </>
                );
        }

        if (loading) {
                return <ExpensiveLoading />;
        }

        return (
                <>
                        <ExpensiveGame
                                title={ofertas.data.title}
                                dealID={""}
                                storeID={""}
                                gameID={""}
                                salePrice={"2"}
                                normalPrice={"2"}
                                savings={"2"}
                                steamRatingPercent={"2"}
                                thumb={""}
                        ></ExpensiveGame>
                </>
        );
}
