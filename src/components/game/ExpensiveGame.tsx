import {PriceTable} from "./PriceTable";
import {LoadError} from "../LoadError";
import {AlertType, ExpensiveAlert} from "../ExpensiveAlert";
import {ExpensiveLoading} from "../ExpensiveLoading";
import {Price} from "./Price";
import {ListOfDeals} from "../../cheapshark/deals/listOfDeals";
import {Rating} from "./Rating";
import Button from "react-bootstrap/Button";
import "./ExpensiveGame.css";

export { ExpensiveGame };

function ExpensiveGame(props: ListOfDeals) {
  const ofertas: TApiResponse = useApiGet(gameLookUpBaseAPIURL + props.dealID);

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
    <div className={"container bg-secondary"}>
      <div className="row-6 d-flex">
        <div className="col-2 m-0 p-0 d-flex justify-content-center">
          <img src={props.thumb} className={"img-fluid"} />
        </div>

        <div className="col-6 text-light m-2 p-2 justify-content-start">
          <div className="row">{props.title}</div>
          <div className="row">
            <Rating
              steamRatingPercent={Number.parseInt(props.steamRatingPercent)}
            />
          </div>
          <div className="row">
            <div className="col-5 m-0 p-0 justify-content-start">
              <Price
                price={Number.parseFloat(props.salePrice)}
                retailPrice={Number.parseFloat(props.normalPrice)}
                savings={Number.parseInt(props.savings)}
                isOnSale={1}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-3 m-0 p-0">
              <Button variant={"primary"}>On Steam</Button>
            </div>
            <div className="col-3 m-0 p-0">
              <Button variant={"primary"}>Add to list</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="row-6 d-flex justify-content-center">
        <div className="col-6">
          <PriceTable storeModel={tiendas.data} tablemodel={ofertas.data.deals} />
        </div>
      </div>
    </div>
  );
}
