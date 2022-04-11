import {DealListElement} from "./DealListElement";
import Col from "react-bootstrap/Col";
import {Fragment, useState} from "react";
import {ShowMore} from "./ShowMore";
import {ListOfDeals} from "../cheapshark/deals/listOfDeals";
import {ExpensiveGame} from "./game/ExpensiveGame";
import Popup from "reactjs-popup";
import "./DealList.css";
import {Store} from "../cheapshark/stores/stores";

export {DealList};

interface DealListProps {
    elements: ListOfDeals[],
    stores: Store[];
}

function DealList(props: DealListProps) {
    const [numberOfDeals, setNumberOfDeals] = useState(6);
    const deals = props.elements.slice(0, numberOfDeals);
    const showMore = () => {
        setNumberOfDeals(numberOfDeals + 6);
    };

    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

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
                                    <ExpensiveGame
                                        oferta={x} tiendas={props.stores}
                                    />
                                </Popup>
                            </Col>
                        </Fragment>
                    ))}
                </div>
                {numberOfDeals < props.elements.length ? (
                    <ShowMore onClick={showMore}/>
                ) : (
                    <></>
                )}
            </div>
        </>
    );
}
