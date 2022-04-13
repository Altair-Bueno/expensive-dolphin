import {DealListElement} from "./DealListElement";
import {useState} from "react";
import {ShowMore} from "./ShowMore";
import {Deal} from "../../../cheapshark/deals/listOfDeals";
import "./DealList.css";
import {Link, Location, useLocation} from "react-router-dom";
import {Pages} from "../../../pages";
import {LocationState} from "../../../types";

export {DealList};

interface DealListProps {
    elements: Deal[],
    numberOfDeals?: number
}

function mapDeal(deal: Deal, location: Location) {
    const searchParams = {id: deal.dealID}
    const state: LocationState = {backgroundLocation: location}
    const to = `${Pages.Game}?${new URLSearchParams(searchParams)}`

    return <Link key={deal.dealID} to={to} state={state} className={"btn"}>
        <DealListElement {...deal}/>
    </Link>
}

function DealList(props: DealListProps) {
    const [numberOfDeals, setNumberOfDeals] = useState(props.numberOfDeals);
    const location = useLocation()
    const deals = props.elements.slice(0, numberOfDeals).map((deal) => mapDeal(deal, location));

    const onClickShowMore = () => {
        const newNumberOfDeals: number | undefined = props.numberOfDeals && numberOfDeals ?
            props.numberOfDeals + numberOfDeals : undefined
        setNumberOfDeals(newNumberOfDeals)
    }
    const isShowMoreEnabled = props.numberOfDeals && numberOfDeals && numberOfDeals < props.elements.length
    const showMoreDiv = <div className={"text-center"}>
        <ShowMore onClick={onClickShowMore}/>
    </div>

    return <div className={"container g-3"}>
        <div className={"row row-cols-1 row-cols-xxl-2"}>
            {deals}
        </div>
        {isShowMoreEnabled && showMoreDiv}
    </div>
}
