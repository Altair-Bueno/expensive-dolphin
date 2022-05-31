import "./sass/dark.sass";

import React from "react";
import ReactDOM from "react-dom";

import {QueryClient, QueryClientProvider} from "react-query";
import {storesURL} from "./cheapshark/stores";
import {Store} from "./cheapshark/stores/stores";
import {StoresContext} from "./types";
import {App} from "./App";
import {BrowserRouter} from "react-router-dom";


async function main() {
    const queryClient = new QueryClient()
    const stores = await queryClient.fetchQuery([storesURL, undefined], async () => await fetch(storesURL).then(async x => await x.json() as Store[]))
    ReactDOM.render(
        <React.StrictMode>
            <QueryClientProvider client={queryClient}>
                <StoresContext.Provider value={stores}>
                    <BrowserRouter>
                        <App/>
                    </BrowserRouter>
                </StoresContext.Provider>
            </QueryClientProvider>
        </React.StrictMode>,
        document.getElementById("root")
    )
}