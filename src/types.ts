import {Store} from "./cheapshark/stores/stores";
import React from "react";
import {Location} from "react-router-dom";
import useLocalStorageState from "use-local-storage-state";

const defaultStores: Store[] = []
export const StoresContext = React.createContext(defaultStores)

export interface User {
    name: string,
    email: string
}

export function useExpensiveUser() {
    return useLocalStorageState('user') as any as [User | undefined, (user: User) => void];
}

export interface LocationState {
    backgroundLocation?: Location
}