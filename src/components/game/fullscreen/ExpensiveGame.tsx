import {PriceTable} from "./PriceTable";
import {Price} from "../common/Price";
import {Rating} from "../common/Rating";
import Button from "react-bootstrap/Button";
import {useContext} from "react";
import {StoresContext} from "../../../types";
import {GameLookup} from "../../../cheapshark/games/gameLookup";

export {ExpensiveGame};

interface ExpensiveGameProps {
    gameLookup: GameLookup
}

function ExpensiveGame({gameLookup}: ExpensiveGameProps) { // Game ID for lookup
    const stores = useContext(StoresContext)
/*
    const priceProps = {
        price:Number.parseFloat(deal.salePrice),
        retailPrice:Number.parseFloat(deal.normalPrice),
        savings:Number.parseInt(deal.savings),
        isOnSale:deal.isOnSale
    }

 */
    // TODO lmao i hate this API
    const priceProps = {
        price:Number.parseFloat(gameLookup.deals[0].price),
        retailPrice:Number.parseFloat(gameLookup.deals[0].retailPrice),
        savings:Number.parseInt(gameLookup.deals[0].savings),
        // TODO
        isOnSale:true
    }
    const ratingProps = { steamRatingPercent:10 }
    const priceTableProps = { storeModel: stores, tablemodel:gameLookup.deals }

    return <div className={"container-sm"}>
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
