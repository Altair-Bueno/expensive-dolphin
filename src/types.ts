import {Store} from "./cheapshark/stores/stores";
import React from "react";
import {Location} from "react-router-dom";

const defaultStores: Store[] = []
export const StoresContext = React.createContext(defaultStores)

export interface LocationState {
    backgroundLocation?: Location
}