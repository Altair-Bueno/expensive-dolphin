import {PriceTable} from "./PriceTable";
import {LoadError} from "../LoadError";
import {AlertType, ExpensiveAlert} from "../ExpensiveAlert";
import {ExpensiveLoading} from "../ExpensiveLoading";
import {Price} from "./Price";
import {Rating} from "./Rating";
import Button from "react-bootstrap/Button";
import "./ExpensiveGame.css";
import {useCheapShark} from "../../cheapshark";
import {GameLookupParam, gamesURL} from "../../cheapshark/games";
import {Deal} from "../../cheapshark/deals/listOfDeals";
import {storesURL} from "../../cheapshark/stores";

export {ExpensiveGame};

interface ExpensiveGameProps {
    oferta: Deal
}

function ExpensiveGame(props: ExpensiveGameProps) { // Game ID for lookup
    const query: GameLookupParam = {id: Number.parseInt(props.oferta.gameID)}
    const juego = useCheapShark(gamesURL, query);
    const stores = useCheapShark(storesURL)

    if (juego.isLoading) {
        return <ExpensiveLoading/>;
    } else if (juego.data) {
        return (
            <div className={"container-sm bg-secondary"}>
                <div className="row-6 d-flex">
                    <div className="col-2 m-0 p-0 d-flex justify-content-center">
                        <img src={juego.data.info.thumb} className={"img-fluid"}/>
                    </div>

                    <div className="col-6 text-light m-2 p-2 justify-content-start">
                        <div className="row">{juego.data.info.title}</div>
                        <div className="row">
                            <Rating
                                steamRatingPercent={Number.parseInt(props.oferta.steamRatingPercent)}
                            />
                        </div>
                        <div className="row">
                            <div className="col-5 m-0 p-0 justify-content-start">
                                <Price
                                    price={Number.parseFloat(props.oferta.salePrice)}
                                    retailPrice={Number.parseFloat(props.oferta.normalPrice)}
                                    savings={Number.parseInt(props.oferta.savings)}
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

                <div className="row-6 d-flex">
                    <div className="col-6">
                        {
                            stores.data && <PriceTable storeModel={stores.data} tablemodel={juego.data.deals}/>
                        }
                    </div>
                </div>
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
            <LoadError/>
            <ExpensiveAlert {...alert}/>
        </>
    }

}
