import {useQuery, UseQueryOptions, UseQueryResult} from "react-query";
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
import {AlertProps, AlertType} from "../components/wrappers/ExpensiveAlert";

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

type CheapSharkParameters =
    ListOfDealsParam
    | DealLookupParam
    | ListOfGamesParam
    | GameLookupParam
    | MultipleGameLookupParam
    | EditAlertParam
    | ManageAlertsParam
type CheapSharkResult =
    Deal[]
    | DealLookup
    | Game[]
    | GameLookup
    | GameLookup[]
    | string
    | any

export function useCheapShark(
    baseURL: 'https://www.cheapshark.com/api/1.0/deals',
    props: ListOfDealsParam,
    options?: UseQueryOptions<any, AlertProps, any, any[]>
): UseQueryResult<Deal[], AlertProps>
export function useCheapShark(
    baseURL: 'https://www.cheapshark.com/api/1.0/deals',
    props: DealLookupParam,
    options?: UseQueryOptions<any, AlertProps, any, any[]>
): UseQueryResult<DealLookup, AlertProps>
export function useCheapShark(
    baseURL: 'https://www.cheapshark.com/api/1.0/games',
    props: ListOfGamesParam,
    options?: UseQueryOptions<any, AlertProps, any, any[]>
): UseQueryResult<Game[], AlertProps>
export function useCheapShark(
    baseURL: 'https://www.cheapshark.com/api/1.0/games',
    props: GameLookupParam,
    options?: UseQueryOptions<any, AlertProps, any, any[]>
): UseQueryResult<GameLookup, AlertProps>
export function useCheapShark(
    baseURL: 'https://www.cheapshark.com/api/1.0/games',
    props: MultipleGameLookupParam,
    options?: UseQueryOptions<any, AlertProps, any, any[]>
): UseQueryResult<GameLookup[], AlertProps>
export function useCheapShark(
    baseURL: 'https://www.cheapshark.com/api/1.0/stores',
    props?:undefined,
    options?: UseQueryOptions<any, AlertProps, any, any[]>
): UseQueryResult<Store[], AlertProps>
export function useCheapShark(
    baseURL: 'https://www.cheapshark.com/api/1.0/alerts',
    props: EditAlertParam,
    options?: UseQueryOptions<any, AlertProps, any, any[]>
): UseQueryResult<string, AlertProps>
export function useCheapShark(
    baseURL: 'https://www.cheapshark.com/api/1.0/alerts',
    props: ManageAlertsParam,
    options?: UseQueryOptions<any, AlertProps, any, any[]>
): UseQueryResult<string, AlertProps>
export function useCheapShark(
    baseURL: string,
    props?:undefined,
    options?: UseQueryOptions<any, AlertProps, any, any[]>
): UseQueryResult<any, AlertProps>

export function useCheapShark(
    baseURL: string,
    props?: CheapSharkParameters,
    options?: UseQueryOptions<any, AlertProps, any, any[]>
): UseQueryResult<CheapSharkResult, AlertProps> {
    const f = () => createQuery(baseURL, props)
    return useQuery([baseURL, props as any], f, options)
}