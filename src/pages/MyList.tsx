import { PriceTable } from "../components/game/PriceTable";
import { ExpensiveLoading } from "../components/ExpensiveLoading";
import { AlertType, ExpensiveAlert } from "../components/ExpensiveAlert";
import {
  dealsBaseAPIURL,
  storesBaseAPIURL,
  TApiResponse,
  useApiGet,
} from "../components/Query";
import { deals, stores } from "../cheapshark/exampledata";
import { Store } from "../cheapshark/stores";
import { LoadError } from "../components/LoadError";
import { ListOfDeals } from "../cheapshark/deals/listOfDeals";
import { useEffect, useState } from "react";

export { MyList };

function MyList() {
  // call to the hook

  const ofertas: TApiResponse = useApiGet(dealsBaseAPIURL);

  const tiendas: TApiResponse = useApiGet(storesBaseAPIURL);

  var loading =
    ofertas.loading ||
    ofertas.data === undefined ||
    tiendas.loading ||
    tiendas.data === undefined;
  var error = ofertas.error != null || tiendas.error != null;

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
    <>
      <h1>My List placeholder</h1>
      <div className="col-md-10 offset-md-1">
        <PriceTable storeModel={tiendas.data} tablemodel={ofertas.data} />
      </div>
    </>
  );
}
