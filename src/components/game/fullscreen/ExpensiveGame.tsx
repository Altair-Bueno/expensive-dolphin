import {PriceTable} from "./PriceTable";
import {Price} from "../common/Price";
import {Rating} from "../common/Rating";
import Button from "react-bootstrap/Button";
import {useContext} from "react";
import {StoresContext} from "../../../types";
import {GameLookup} from "../../../cheapshark/games/gameLookup";
import {gameURL, steamURL} from "../../../cheapshark/stores";
import {Modal, ModalBody} from "react-bootstrap";
import {checkEmail, setCookie} from "../../../pages/profile/ManageMyData";
import './ExpensiveGame.css'

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

    const createAlert = () => {
        if(!document.cookie.includes("email")){ //No hay email
            const email = prompt("Please enter your email:");

            if(email == null || email == "" || !checkEmail(email)){
                window.alert("Alert has not been created. Please introduce a valid email.")
            } else{
                setCookie("email", email);
            }
        } else { //Hay email, creamos la alerta
            window.alert("Alert has been created.")
        }
    }

    const ratingProps = {steamRatingPercent: Number.parseFloat(gameLookup.deals[0].savings)}
    const priceTableProps = { storeModel: stores, tablemodel:gameLookup.deals }

    return <div className={"container-sm"} >
        <div className="row-6 d-flex background">
            <div className="col-4 me-4 ms-0 p-0 d-flex justify-content-center" >
                <img src={gameLookup.info.thumb} className={"img-fluid"} alt={gameLookup.info.title}/>
            </div>

            <div className="col-6 text-light m-0 p-0 justify-content-start">
                <div className="row ms-1">
                    <h3>
                        {gameLookup.info.title}
                    </h3>

                </div>
                <div className="row ms-1">
                    <Rating {...ratingProps}/>
                </div>
                <div className="row">
                    <div className="col-5 ms-1 p-0" >
                        <Price {...priceProps}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 mt-5 me-3 p-0">
                        <Button className={"steamButtonGame"}
                            onClick={() => window.open(`${steamURL}${gameLookup.info.steamAppID}`,'_blank')}
                            variant={"primary"}>
                            <i className="bi bi-controller"></i> Steam
                        </Button>
                    </div>
                    <div className="col-6 mt-5 ms-1 p-0">
                        <Button variant={"primary"} className={"alertButtonGame"} onClick={() => createAlert()} >
                            <div className={"d-none d-lg-block"}>
                                <i className="bi bi-alarm m-1"></i>
                                <label>Create alert</label>
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </div>

        <div className="row-6 d-flex">
            <div className="row-6">
                <PriceTable {...priceTableProps}/>
            </div>
        </div>
    </div>
}
