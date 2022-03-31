import {DealListElement} from "../DealListElement";
import {DealList} from "../DealList";
import {PriceTable} from "./PriceTable";
import {deals, stores} from "../../cheapshark/exampledata";
import './ExpensiveGame.css'
import {Price} from "./Price";
import {Rating} from "./Rating";
import Button from "react-bootstrap/Button";

export{
    ExpensiveGame
}

interface GameProps {
    title: string;
    dealID: string;
    gameID: string;
    salePrice: number;
    normalPrice: number;
    savings: number;
    steamRatingPercent: number;
    thumb: string;
}

function ExpensiveGame(props : GameProps){
    return(
        <div className={"container bg-secondary"}>
            <div className="row-6 d-flex">
                <div className="col-2 m-0 p-0 d-flex justify-content-center">
                    <img src={props.thumb} className={"img-fluid"}/>
                </div>

                <div className="col-6 text-light m-2 p-2 justify-content-start">
                    <div className="row">
                        {props.title}
                    </div>
                    <div className="row">
                        <Rating steamRatingPercent={props.steamRatingPercent}/>
                    </div>
                    <div className="row">
                        <div className="col-5 m-0 p-0 justify-content-start">
                            <Price price={props.salePrice} retailPrice={props.normalPrice} savings={props.savings} isOnSale={1}/>
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
                    <PriceTable storeModel={stores} tablemodel={deals} />
                </div>
            </div>
        </div>
    );
}