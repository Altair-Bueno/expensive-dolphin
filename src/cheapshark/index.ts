import {useQuery, UseQueryResult} from "react-query";
import {DealLookupParam, ListOfDealsParam} from "./deals";
import {Deal} from "./deals/listOfDeals";
import {DealLookup} from "./deals/dealLookup";
import {
    GameLookupParam,
    ListOfGamesParam,
    MultipleGameLookupParam,
} from "./games";
import {Game} from "./games/listOfGames";
import {GameLookup} from "./games/gameLookup";
import {EditAlertParam, ManageAlertsParam} from "./alerts";
import {Store} from "./stores/stores";
import {AlertProps, AlertType} from "../components/ExpensiveAlert";

async function createQuery(baseURL:string, parameters:any):Promise<CheapSharkResult> {
    const url = `${baseURL}?${new URLSearchParams(parameters as any)}`
    return await fetch(url).then(x=>{
        if (x.ok) {
            return x.json()
        } else {
            throw {
                alertType: AlertType.danger,
                buttonText: "Reload",
                content: x,
                title: x.text()
            }
        }
    })
}

type CheapSharkParameters = ListOfDealsParam | DealLookupParam | ListOfGamesParam | GameLookupParam | MultipleGameLookupParam | EditAlertParam | ManageAlertsParam
type CheapSharkResult = Deal[] | DealLookup | Game[] | GameLookup | GameLookup[] | string | any

export function useCheapShark(baseURL:'https://www.cheapshark.com/api/1.0/deals', props:ListOfDealsParam):UseQueryResult<Deal[],AlertProps>
export function useCheapShark(baseURL:'https://www.cheapshark.com/api/1.0/deals', props:DealLookupParam):UseQueryResult<DealLookup,AlertProps>
export function useCheapShark(baseURL:'https://www.cheapshark.com/api/1.0/games', props:ListOfGamesParam):UseQueryResult<Game[],AlertProps>
export function useCheapShark(baseURL:'https://www.cheapshark.com/api/1.0/games', props:GameLookupParam):UseQueryResult<GameLookup,AlertProps>
export function useCheapShark(baseURL:'https://www.cheapshark.com/api/1.0/games', props:MultipleGameLookupParam):UseQueryResult<GameLookup[],AlertProps>
export function useCheapShark(baseURL:'https://www.cheapshark.com/api/1.0/stores'):UseQueryResult<Store[], AlertProps>
export function useCheapShark(baseURL:'https://www.cheapshark.com/api/1.0/alerts', props:EditAlertParam):UseQueryResult<string,AlertProps>
export function useCheapShark(baseURL:'https://www.cheapshark.com/api/1.0/alerts', props:ManageAlertsParam):UseQueryResult<string,AlertProps>
export function useCheapShark(baseURL:string):UseQueryResult<any,AlertProps>

export function useCheapShark(baseURL:string, props?:CheapSharkParameters):UseQueryResult<CheapSharkResult,AlertProps> {
    const f = () => createQuery(baseURL,props)
    return useQuery([baseURL, props as any],f)
}