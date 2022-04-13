import {Store} from "./cheapshark/stores/stores";
import React from "react";

const defaultStores: Store[] = []
export const StoresContext = React.createContext(defaultStores)