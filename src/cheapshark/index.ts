import {useQuery, UseQueryResult} from "react-query";
import {DealLookupParam, ListOfDealsParam} from "./deals";
import {ListOfDeals} from "./deals/listOfDeals";
import {DealLookup} from "./deals/dealLookup";
import {
    GameLookupParam,
    ListOfGamesParam,
    MultipleGameLookupParam,
} from "./games";
import {Game} from "./games/listOfGames";
import {GameLookup} from "./games/gameLookup";
import {EditAlertParam, ManageAlertsParam} from "./alerts";

type CheapSharkParameters = ListOfDealsParam | DealLookupParam | ListOfGamesParam | GameLookupParam | MultipleGameLookupParam | EditAlertParam | ManageAlertsParam
type CheapSharkResult = ListOfDeals | DealLookup | Game[] | GameLookup | GameLookup[] | string | any

async function createQuery(baseURL:string, parameters:any) {
    const url = `${baseURL}?${new URLSearchParams(parameters as any)}`
    return fetch(url).then(x=>x.json())
}

export function useCheapShark(baseURL:string, props:ListOfDealsParam):UseQueryResult<ListOfDeals[],any>
export function useCheapShark(baseURL:string, props:DealLookupParam):UseQueryResult<DealLookup,any>
export function useCheapShark(baseURL:string, props:ListOfGamesParam):UseQueryResult<Game[],any>
export function useCheapShark(baseURL:string, props:GameLookupParam):UseQueryResult<GameLookup,any>
export function useCheapShark(baseURL:string, props:MultipleGameLookupParam):UseQueryResult<GameLookup[],any>
export function useCheapShark(baseURL:string, props:EditAlertParam):UseQueryResult<string,any>
export function useCheapShark(baseURL:string, props:ManageAlertsParam):UseQueryResult<string,any>
export function useCheapShark(baseURL:string):UseQueryResult<any,any>

export function useCheapShark(baseURL:string, props?:CheapSharkParameters):UseQueryResult<CheapSharkResult,any> {
    const f = () => createQuery(baseURL,props)
    return useQuery([baseURL, props as any],f)
}