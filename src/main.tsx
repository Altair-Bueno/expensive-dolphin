import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { GameListElement, PriceTable } from "./components/game";

ReactDOM.render(
    <React.StrictMode>
        <GameListElement />
        <PriceTable />
    </React.StrictMode>,
    document.getElementById("root")
);
