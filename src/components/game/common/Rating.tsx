import {DealLookupParam} from "../../../cheapshark/deals";
import {UseQueryResult} from "react-query";
import {DealLookup} from "../../../cheapshark/deals/dealLookup";
import {AlertProps, ExpensiveAlert} from "../../wrappers/ExpensiveAlert";
import {useCheapShark} from "../../../cheapshark";
import {GameLookupParam, gamesURL} from "../../../cheapshark/games";
import {GameLookup} from "../../../cheapshark/games/gameLookup";

export {
    Rating
}

interface RatingProps {
    dealId?: string | null,
    steamRatingPercent?: number| null,
    steamRatingCount?: number | null,
    gameId?: string | null
}

function loadDataFromGame(gameID: string){
    let decoded = decodeURIComponent(gameID)
    const queryProps : GameLookupParam = {id: decoded}
    let query : UseQueryResult<GameLookup, AlertProps> = useCheapShark(gamesURL, queryProps)
    if(query.isLoading){
        return undefined
    } else if (query.error) {
        return undefined
    } else if (query.data) {
        return loadData(query.data.deals[0].dealID) // first deal found
    }
}

function loadData(dealID: string) {
    let decoded = decodeURIComponent(dealID)
    const queryProps : DealLookupParam = {id: decoded}
    let query : UseQueryResult<DealLookup, AlertProps> = useCheapShark('https://www.cheapshark.com/api/1.0/deals', queryProps)
    if(query.isLoading){
        return undefined
    } else if (query.error) {
        return undefined
    } else if (query.data) {
        return query.data.gameInfo
    }
}


function Rating(receivedProps: RatingProps) {
    let fill = 100 / 20;
    let half = 0;
    let empty = 0;
    let count = 0;
    console.log("Props from Rating")
    console.log(receivedProps.dealId)
    if(receivedProps.steamRatingPercent != null && receivedProps.steamRatingCount != null){
        fill = Math.floor(receivedProps.steamRatingPercent / 20)
        half = receivedProps.steamRatingPercent % 20 ? 1 : 0
        empty = 5 - (fill + half)
        count = receivedProps.steamRatingCount
    } else if(receivedProps.dealId){
        let data = loadData(receivedProps.dealId)

        if(data){
            let rating = Number.parseFloat(data.steamRatingPercent)
            fill = Math.floor(rating / 20)
            half = rating % 20 ? 1 : 0
            empty = 5 - (fill + half)
            count = Number.parseInt(data.steamRatingCount)
        }
    } else if(receivedProps.gameId) {
        let data = loadDataFromGame(receivedProps.gameId)
        console.log("Data received from Rating")
        console.log(data)

        if (data) {
            let rating = Number.parseFloat(data.steamRatingPercent)
            fill = Math.floor(rating / 20)
            half = rating % 20 ? 1 : 0
            empty = 5 - (fill + half)

        }
    }

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
            {count &&
                <small>{`${count} reviews`}</small>}
        </div>
    );
}