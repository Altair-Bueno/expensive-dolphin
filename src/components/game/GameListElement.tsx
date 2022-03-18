import {Price} from "./Price";
import {Rating} from "./Rating";
import './GameListElement.css'

import logo from "/src/resources/logo.svg"

export {
    GameListElement
}

function GameListElement() {
    return <div className={"d-flex text-light game-list-element-root"}>
        <div className={"col-2"}>
            <img src={logo} alt={"Lego batman"} />
        </div>
        <div className={"col-6"}>
            <div className={"row"}>
                <h3>LEGO Batman</h3>
            </div>
            <div className={"row"}>
                <Price price={10} retailPrice={20} savings={50} isOnSale={true}/>
            </div>
        </div>
        <div className={"col-3"}>
            <Rating steamRatingPercent={60}/>
        </div>
    </div>
}