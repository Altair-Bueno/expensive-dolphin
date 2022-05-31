import {DealLookupParam} from "../../../cheapshark/deals";
import {UseQueryResult} from "react-query";
import {DealLookup} from "../../../cheapshark/deals/dealLookup";
import {AlertProps, ExpensiveAlert} from "../../wrappers/ExpensiveAlert";
import {useCheapShark} from "../../../cheapshark";

export {
    Rating
}

interface RatingProps {
    steamRatingPercent: number,
    steamRatingCount?: number| null
}

function loadData(dealID: string) {
    let result;
    let decoded = decodeURIComponent(dealID)
    const queryProps : DealLookupParam = {id: decoded}
    let query : UseQueryResult<DealLookup, AlertProps> = useCheapShark('https://www.cheapshark.com/api/1.0/deals', queryProps)
    if(query.isLoading){
        return undefined
    } else if (query.error) {
        return undefined
    } else if (query.data) {
        return query.data.gameInfo.steamRatingPercent
    }
}


function Rating(props: RatingProps) {
    const fill = Math.floor(props.steamRatingPercent / 20)
    const half = props.steamRatingPercent % 20 ? 1 : 0
    const empty = 5 - (fill + half)

    const commonClasses = 'text-warning h5'
    const fillIconClass = 'bi-star-fill'
    const halfIconClass = 'bi-star-half'
    const emptyIconClass = 'bi-star'

    const stars = [
        ...Array.from({length:fill}).map(()=>fillIconClass),
        ...Array.from({length:half}).map(()=>halfIconClass),
        ...Array.from({length:empty}).map(()=>emptyIconClass)
    ].map((x,index)=><i className={`${x} ${commonClasses}`} key={index}/>)

    return (
        <div>
            {stars}
            {props.steamRatingCount &&
                <small>{`${props.steamRatingCount} reviews`}</small>}
        </div>
    );
}