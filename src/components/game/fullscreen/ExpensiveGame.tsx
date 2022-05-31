import {PriceTable} from "./PriceTable";
import {Price} from "../common/Price";
import {Rating} from "../common/Rating";
import Button from "react-bootstrap/Button";
import {useContext} from "react";
import {StoresContext, useEmailStorage} from "../../../types";
import {GameLookup} from "../../../cheapshark/games/gameLookup";
import {gameURL, steamURL} from "../../../cheapshark/stores";
import './ExpensiveGame.css'
import {Modal, ModalBody} from "react-bootstrap";
import {CreateAlert} from "../common/CreateAlert";
import {useCheapShark} from "../../../cheapshark";
import {EditAlertParam, ManageAlertsParam} from "../../../cheapshark/alerts";
import {UseQueryResult} from "react-query";
import {AlertProps, ExpensiveAlert} from "../../wrappers/ExpensiveAlert";
import {DealLookup} from "../../../cheapshark/deals/dealLookup";
import {ExpensiveLoading} from "../../wrappers/ExpensiveLoading";
import {DealList} from "../list/DealList";
import {DealLookupParam} from "../../../cheapshark/deals";

export {ExpensiveGame};

interface ExpensiveGameProps {
    gameLookup: GameLookup
}

function ExpensiveGame({gameLookup}: ExpensiveGameProps) { // Game ID for lookup
    const stores = useContext(StoresContext)
    // TODO lmao i hate this API
    const priceProps = {
        price:Number.parseFloat(gameLookup.deals[0].price),
        retailPrice:Number.parseFloat(gameLookup.deals[0].retailPrice),
        savings:Number.parseInt(gameLookup.deals[0].savings),
        // TODO
        isOnSale:true
    }

    const [email, setEmail] = useEmailStorage();
    const argsAlertSet: EditAlertParam = {action: 'set', email: "", gameID: Number.parseInt(gameLookup.info.steamAppID), price: priceProps.price}
    const argsAlertDelete: EditAlertParam = {action: 'delete', email: "", gameID: Number.parseInt(gameLookup.info.steamAppID), price: priceProps.price}
    const argsAlertManage: ManageAlertsParam = {action: 'manage', email: ""}

    /*

    function useCreateAlert(): void {
        if(!email){ //No hay email
            const emailInput = prompt("Please enter your email:");
            if(emailInput === null || emailInput === "" || !isValidEmail(emailInput)){
                window.alert("Alert has not been created. Please introduce a valid email.")
            } else{
                setEmail(emailInput);
                //Creamos la alerta
                useAlertHook();
            }
        } else { //Hay email, creamos la alerta
            useAlertHook();
        }
    }



    function useAlertHook(): void{
        let res: UseQueryResult<string, AlertProps> = useCheapShark('https://www.cheapshark.com/api/1.0/alerts', argsAlertSet)
        console.log(res.data)
        console.log(res.status)
        console.log(res.isSuccess)
        if(res.data){
            window.alert("Alert has been created succesfully.")
        }
    }

    function useDeleteAlert(): void {
        let res = useCheapShark('https://www.cheapshark.com/api/1.0/alerts', argsAlertDelete)
        if(email){
            argsAlertDelete.email = email;
            if(res.isSuccess.valueOf()){
                window.alert("Alert has been deleted.")
            }
        }
    }





    function useAlertButton(){
        if (email != null) {
            argsAlertManage.email = email;
        }
        let res = useCheapShark('https://www.cheapshark.com/api/1.0/alerts', argsAlertManage)
        if(email){
            argsAlertManage.email = email;
            console.log(gameLookup.info.steamAppID + " " + priceProps.price)
            if(res.data === undefined){
                argsAlertSet.email = email;
                return <Button variant={"primary"} onClick={() => useCreateAlert()}>
                    <div className={"d-lg-block"}>
                        <i className="bi bi-alarm m-1"></i>
                        <label className={"d-lg-block"}>Add alert</label>
                    </div>
                </Button>
            } else {
                return <Button variant={"danger"} onClick={() => useDeleteAlert()}>
                    <div className={"d-lg-block"}>
                        <i className="bi bi-alarm m-1"></i>
                        <label className={"d-lg-block"}>Delete alert</label>
                    </div>
                </Button>
            }
        }
        return <Button variant={"primary"} onClick={() => useCreateAlert()}>
            <div className={"d-lg-block"}>
                <i className="bi bi-alarm m-1"></i>
                <label className={"d-lg-block"}>Add alert</label>
            </div>
        </Button>
    }

     */

    function changeButton() {
        var elem = document.getElementById("alertbuttongame");
        if(elem!.innerText == "Delete alert"){
            window.alert("Alert deleted successfully");
            elem!.innerText = "Create alert"
            elem!.className = " btn btn-primary";
        } else {
            if(email){
                window.alert("Alert created successfully");
                elem!.innerText="Delete alert";
                elem!.className = "btn btn-danger";
            } else {
                const emailInput = prompt("Please enter your email:");
                if(emailInput === null || emailInput === "" || !isValidEmail(emailInput)){
                    window.alert("Alert has not been created. Please introduce a valid email.")
                } else {
                    setEmail(emailInput);
                    window.alert("Alert created successfully");
                    elem!.innerText="Delete alert";
                    elem!.className = "btn btn-danger";
                }
            }

        }
    }

    function isValidEmail(address : String): boolean {
        if (address != '' && address.search) {
            if (address.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1){
                return true;
            } else {
                return false;
            }
        }
        return false;
    }






    const priceTableProps = { storeModel: stores, tablemodel:gameLookup.deals }

    function rating() {
        let result;
        let decoded = decodeURIComponent(gameLookup.deals[0].dealID)
        const queryProps : DealLookupParam = {id: decoded}
        let query : UseQueryResult<DealLookup, AlertProps> = useCheapShark('https://www.cheapshark.com/api/1.0/deals', queryProps)
        if(query.isLoading){
            result = <small>Loading rating...</small>
        } else if (query.error) {
            result = <ExpensiveAlert {...query.error}/>
        } else if (query.data) {
            console.log(query.data)
            const props = {steamRatingPercent: Number.parseFloat((query.data.gameInfo.steamRatingPercent))}
            result = <Rating {...props}/>
        }
        return result;
    }


    return <div className="container-sm">
        <div className="row-6 d-flex" >
            <div className="col-5 me-4 ms-0 p-0 d-flex fotojuego safarionly aligns-items-center">
                <img src={gameLookup.info.thumb} className={"mx-auto d-block"} alt={gameLookup.info.title}/>
            </div>

            <div className="col-6 text-light m-0 p-0 justify-content-start">
                <div className="row ms-1">
                    <h3>
                        {gameLookup.info.title}
                    </h3>

                </div>
                <div className="row ms-1">
                    {rating()}
                </div>
                <div className="row">
                    <div className="col-5 ms-1 p-0">
                        <Price {...priceProps}/>
                    </div>
                </div>
                <div className="row ms-3">
                    <div className="col-12 mt-5 me-3 ms-0 me-lg-0 p-0">
                        <Button className={"steamButtonGame"}
                            onClick={() => window.open(`${steamURL}${gameLookup.info.steamAppID}`,'_blank')}
                            variant={"primary"}>
                            <i className="bi bi-controller m-1"></i>
                            <label className={"d-lg-block"}>On Steam</label>
                        </Button>
                    </div>
                    <div className="col-12 mt-3 ms-0 p-0">
                        <Button variant={"primary"} id={"alertbuttongame"} onClick={() => changeButton()}>
                            <div className={"d-lg-block"}>
                                <i className="bi bi-alarm m-1"></i>
                                <label className={"d-lg-block"}>Add alert</label>
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </div>

        <div className="row-6 d-flex">
            <div className="row-6 table-responsive">
                <PriceTable {...priceTableProps}/>
            </div>
        </div>
    </div>
}
