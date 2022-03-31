import { useQuery } from "react-query";
import { ExpensiveLoading } from "../components/ExpensiveLoading";
import { LoadError } from "./LoadError";
import { AlertType, ExpensiveAlert } from "../components/ExpensiveAlert";
import { ListOfDeals } from "../cheapshark/deals/listOfDeals";
import { Store } from "../cheapshark/stores";
import { DealParams } from "../cheapshark/queryparams/queryparams";

export { fetchDeals, getStores };

const dealsBaseAPIURL = "https://www.cheapshark.com/api/1.0/deals";
const storesBaseAPIURL = "https://www.cheapshark.com/api/1.0/stores";

interface DealFetch {
        deals: ListOfDeals[];
}

interface StoreFetch {
        stores: Store[];
}

async function fetchDeals(params: DealParams) {
        const response = await fetch(dealsBaseAPIURL + `${params.queryKey[0]}/`);
        if (!response.ok) {
                throw new Error("Problem fetching data");
        }
        const res = await response.json();

        return res;
}

async function fetchStores() {
        const response = await fetch(storesBaseAPIURL);
        if (!response.ok) {
                throw new Error("Problem fetching data");
        }
        const res = await response.json();

        return res;
}

function getStores() {
        const { status, error, data } = useQuery<StoreFetch, Error>(
                [],
                fetchStores
        );

        if (status === "loading") {
                return ExpensiveLoading();
        }

        if (status === "error") {
                return (
                        <>
                                {LoadError()}
                                {ExpensiveAlert({
                                        alertType: AlertType.danger,
                                        title: "Loading error",
                                        content: "An unexpected error occured while loading the data. Reaload the website to try again.",
                                        buttonText: "Close",
                                })}
                        </>
                );
        }

        return data;
}

