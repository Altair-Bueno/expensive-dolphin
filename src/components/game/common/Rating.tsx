import {DealLookupParam} from "../../../cheapshark/deals";
import {UseQueryResult} from "react-query";
import {DealLookup, GameInfo} from "../../../cheapshark/deals/dealLookup";
import {AlertProps, ExpensiveAlert} from "../../wrappers/ExpensiveAlert";
import {useCheapShark} from "../../../cheapshark";
import {GameLookupParam, gamesURL} from "../../../cheapshark/games";
import {GameLookup} from "../../../cheapshark/games/gameLookup";
import {ExpensiveLoading} from "../../wrappers/ExpensiveLoading";
import {ExpensiveError} from "../../wrappers/ExpensiveError";

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
        return <ExpensiveLoading/>
    } else if (query.error) {
        return <ExpensiveError/>
    } else if (query.data) {
        return loadData(query.data.deals[0].dealID) // first deal found
    }
}

function loadData(dealID: string) {
    let decoded = decodeURIComponent(dealID)
    const queryProps : DealLookupParam = {id: decoded}
    let query : UseQueryResult<DealLookup, AlertProps> = useCheapShark('https://www.cheapshark.com/api/1.0/deals', queryProps)
    if(query.isLoading){
        return <ExpensiveLoading />
    } else if (query.error) {
        return <ExpensiveError />
    } else if (query.data) {
        return query.data.gameInfo
    }
}


function Rating(receivedProps: RatingProps): JSX.Element{
    const commonClasses = 'text-warning h5'
    const fillIconClass = 'bi-star-fill'
    const halfIconClass = 'bi-star-half'
    const emptyIconClass = 'bi-star'
    let fill = 100 / 20;
    let half = 0;
    let empty = 0;
    let count = 0;
    let result: JSX.Element;
    console.log("Props from Rating")
    console.log(receivedProps.dealId)
    if(receivedProps.steamRatingPercent != null && receivedProps.steamRatingCount != null){
        fill = Math.floor(receivedProps.steamRatingPercent / 20)
        half = receivedProps.steamRatingPercent % 20 ? 1 : 0
        empty = 5 - (fill + half)
        count = receivedProps.steamRatingCount

        const stars = [
            ...Array.from({length:fill}).map(()=>fillIconClass),
            ...Array.from({length:half}).map(()=>halfIconClass),
            ...Array.from({length:empty}).map(()=>emptyIconClass)
        ].map((x,index)=><i className={`${x} ${commonClasses}`} key={index}/>);

        result = (
            <div className={"col-sm-8 col-lg-10"}>
                {stars} {count && <small>{" "}</small> && <small>{` ${count} reviews`}</small>}
            </div>
        );
    } else if(receivedProps.dealId){
        let data = loadData(receivedProps.dealId)
        if(data){
            if(!(data instanceof ExpensiveLoading) && !(data instanceof ExpensiveError)){
                let gameData = data as GameInfo
                let rating = Number.parseFloat(gameData.steamRatingPercent)
                fill = Math.floor(rating / 20)
                half = rating % 20 ? 1 : 0
                empty = 5 - (fill + half)
                count = Number.parseInt(gameData.steamRatingCount);

                const stars = [
                    ...Array.from({length:fill}).map(()=>fillIconClass),
                    ...Array.from({length:half}).map(()=>halfIconClass),
                    ...Array.from({length:empty}).map(()=>emptyIconClass)
                ].map((x,index)=><i className={`${x} ${commonClasses}`} key={index}/>);

                result = (
                    <div className={"col-sm-8 col-lg-10"}>
                        {stars} {count && <small>{" "}</small> && <small>{` ${count} reviews`}</small>}
                    </div>
                );
            } else {
                result = data as JSX.Element;
            }
        }
    } else if(receivedProps.gameId) {
        let data = loadDataFromGame(receivedProps.gameId)
        if(data){
            if(!(data instanceof ExpensiveLoading)){
                let gameData = data as GameInfo
                let rating = Number.parseFloat(gameData.steamRatingPercent)
                fill = Math.floor(rating / 20)
                half = rating % 20 ? 1 : 0
                empty = 5 - (fill + half)
                count = Number.parseInt(gameData.steamRatingCount);

                const stars = [
                    ...Array.from({length:fill}).map(()=>fillIconClass),
                    ...Array.from({length:half}).map(()=>halfIconClass),
                    ...Array.from({length:empty}).map(()=>emptyIconClass)
                ].map((x,index)=><i className={`${x} ${commonClasses}`} key={index}/>);

                result = (
                    <div className={"col-sm-8 col-lg-10"}>
                        {stars} {count && <small>{" "}</small> && <small>{` ${count} reviews`}</small>}
                    </div>
                );
            } else {
                result = data as JSX.Element;
            }
        }
    }
    return result!;
}