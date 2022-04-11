import {DealListElement} from "./DealListElement";
import Col from "react-bootstrap/Col";
import {Fragment, useState} from "react";
import {ShowMore} from "./ShowMore";
import {Deal} from "../cheapshark/deals/listOfDeals";
import {ExpensiveGame} from "./game/ExpensiveGame";
import Popup from "reactjs-popup";
import "./DealList.css";

export {DealList};

interface DealListProps {
    elements: Deal[],
    numberOfDeals?:number
}

function DealList(props: DealListProps) {
    const [numberOfDeals, setNumberOfDeals] = useState(props.numberOfDeals);
    const isShowMoreEnabled = props.numberOfDeals && numberOfDeals
    const deals = props.elements.slice(0, numberOfDeals);
    return (
        <>
            <div className={"container bg-secondary p-3"}>
                <div className={"row g-2 gy-3"}>
                    {deals.map((x, index) => (
                        <Fragment key={index}>
                            <Col
                                className="dealdiv"
                                xs={12}
                                md={6}
                            >
                                <Popup
                                    trigger={
                                        <button
                                            type="button"
                                            className="btn text-light shadow-none"
                                        >
                                            <DealListElement {...x} />
                                        </button>
                                    }
                                    position="top center"
                                    modal
                                >
                                    <button className={"close"} onClick={() => {close()}}>
                                        <div className={"text-danger"}>
                                            <i className="bi bi-x-square"></i>
                                        </div>
                                        </button>
                                    <ExpensiveGame
                                        oferta={x}
                                    />
                                </Popup>
                            </Col>
                        </Fragment>
                    ))}
                </div>
                {
                    isShowMoreEnabled &&
                    numberOfDeals < props.elements.length &&
                    <ShowMore onClick={()=>setNumberOfDeals(props.numberOfDeals ? props.numberOfDeals + numberOfDeals : undefined)}/>
                }
            </div>
        </>
    );
}
