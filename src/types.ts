import {Store} from "./cheapshark/stores/stores";
import React from "react";
import {Location} from "react-router-dom";
import useLocalStorageState from "use-local-storage-state";
import {ListOfDealsParam} from "./cheapshark/deals";

const defaultStores: Store[] = []
export const StoresContext = React.createContext(defaultStores)

export interface User {
    name: string,
    email: string
}
export type SearchHistory = ListOfDealsParam []
export type Favourites = Map<string,Date>

export function useFavourites(): [Favourites, (searchHistory: Favourites) => void] {
    const [favourites,setFavourites] = useLocalStorageState('favourites') as any as [Favourites | undefined, (searchHistory: Favourites) => void];
    const defaultFavourites = new Map() as Favourites
    return [favourites ? favourites : defaultFavourites, setFavourites]
}

export function useSearchHistory():[SearchHistory, (searchHistory: SearchHistory) => void] {
    const [searchHistory,setSearchHistory] = useLocalStorageState('searchHistory') as any as [SearchHistory | undefined, (searchHistory: SearchHistory) => void];
    return [searchHistory ? searchHistory : [], setSearchHistory]
}

export function useExpensiveUser() {
    return useLocalStorageState('user') as any as [User | undefined, (user: User) => void];
}

export interface LocationState {
    backgroundLocation?: Location
}