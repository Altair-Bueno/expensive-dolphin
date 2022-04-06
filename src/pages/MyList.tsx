import { PriceTable } from "../components/game/PriceTable";
import { ExpensiveLoading } from "../components/ExpensiveLoading";
import { AlertType, ExpensiveAlert } from "../components/ExpensiveAlert";
import { TApiResponse, useApiGet } from "../components/Query";
import { gameLookUpBaseAPIURL, dealsBaseAPIURL, storesBaseAPIURL } from "../cheapshark/apiurls";
import { LoadError } from "../components/LoadError";

export { MyList };

function MyList() {
  // call to the hook

  const ofertas: TApiResponse = useApiGet(gameLookUpBaseAPIURL + "612");

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

  console.log(ofertas)
  console.log(tiendas)

  if (loading) {
    return <ExpensiveLoading />;
  }

  return (
    <>
      <h1>My List placeholder</h1>
      <div className="col-md-10 offset-md-1">
        <PriceTable storeModel={tiendas.data} tablemodel={ofertas.data.deals} />
      </div>
    </>
  );
}
