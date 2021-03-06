import {Store} from "./cheapshark/stores/stores";
import React from "react";
import {Location} from "react-router-dom";
import useLocalStorageState from "use-local-storage-state";
import {ListOfDealsParam} from "./cheapshark/deals";
import {Alert} from "react-bootstrap";
//import List = types.List;

const defaultStores: Store[] = []
export const StoresContext = React.createContext(defaultStores)

export interface User {
    name: string,
    email: string
}
export type SearchHistory = ListOfDealsParam []
export type Favourites = Map<string,Date>
export type AlertMap = Map<String, String[]>

export function useFavourites(): [Favourites, (searchHistory: Favourites) => void] {
    const [favourites,setFavourites] = useLocalStorageState('favourites') as any as [Favourites | undefined, (searchHistory: Favourites) => void];
    const defaultFavourites = new Map() as Favourites
    return [favourites ? favourites : defaultFavourites, setFavourites]
}

export function useSearchHistory():[SearchHistory, (searchHistory: SearchHistory) => void] {
    const [searchHistory,setSearchHistory] = useLocalStorageState('searchHistory') as any as [SearchHistory | undefined, (searchHistory: SearchHistory) => void];
    return [searchHistory ? searchHistory : [], setSearchHistory]
}

export function useEmailStorage():[String | undefined, (email: String) => void] {
    const [email, setEmail] = useLocalStorageState('email') as any as [String | undefined, (email: String) => void];
    return [email ? email : undefined, setEmail]
}


export function useExpensiveUser() {
    return useLocalStorageState('user') as any as [User | undefined, (user: User) => void];
}

export interface LocationState {
    backgroundLocation?: Location
}