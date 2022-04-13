import {PriceTable} from "./PriceTable";
import {Price} from "../common/Price";
import {Rating} from "../common/Rating";
import Button from "react-bootstrap/Button";
import {Deal} from "../../../cheapshark/deals/listOfDeals";
import {useContext} from "react";
import {StoresContext} from "../../../types";
import {GameLookup} from "../../../cheapshark/games/gameLookup";

export {ExpensiveGame};

interface ExpensiveGameProps {
    deal: Deal,
    gameLookup: GameLookup
}

function ExpensiveGame(props: ExpensiveGameProps) { // Game ID for lookup
    const {deal, gameLookup} = props;
    const stores = useContext(StoresContext)

    const priceProps = {
        price:Number.parseFloat(deal.salePrice),
        retailPrice:Number.parseFloat(deal.normalPrice),
        savings:Number.parseInt(deal.savings),
        isOnSale:deal.isOnSale
    }
    const ratingProps = { steamRatingPercent:Number.parseInt(deal.steamRatingPercent) }
    const priceTableProps = { storeModel: stores, tablemodel:gameLookup.deals }

    return <div className={"container-sm bg-secondary"}>
        <div className="row-6 d-flex">
            <div className="col-2 m-0 p-0 d-flex justify-content-center">
                <img src={gameLookup.info.thumb} className={"img-fluid"} alt={gameLookup.info.title}/>
            </div>

            <div className="col-6 text-light m-2 p-2 justify-content-start">
                <div className="row">
                    {gameLookup.info.title}
                </div>
                <div className="row">
                    <Rating {...ratingProps}/>
                </div>
                <div className="row">
                    <div className="col-5 m-0 p-0 justify-content-start">
                        <Price {...priceProps}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 m-0 p-0">
                        <Button variant={"primary"}>
                            On Steam
                        </Button>
                    </div>
                    <div className="col-3 m-0 p-0">
                        <Button variant={"primary"}>
                            Add to list
                        </Button>
                    </div>
                </div>
            </div>
        </div>

        <div className="row-6 d-flex">
            <div className="col-6">
                <PriceTable {...priceTableProps}/>
            </div>
        </div>
    </div>
}
