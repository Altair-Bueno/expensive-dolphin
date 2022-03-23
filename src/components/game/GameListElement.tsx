import {Price} from "./Price";
import {Rating} from "./Rating";
import './GameListElement.css'

import logo from "/src/resources/logo.svg"

export {
    GameListElement
}

function GameListElement() {
    return (
        <div class="m-3">
        <div class="container-md">
        <div className="gamelist">
            <div className="container">
                <div className="row">
                    <div className="col-1">
                        <img className={"legobatman"} src={logo} alt={"Lego batman"}/>
                    </div>
                    <div className="col-1">
                        <h3 class="gamename">LEGO Batman</h3>
                    </div>
                    <div className="col-3">
                        <div className="col align-self-center">
                            <Rating steamRatingPercent={60}/>
                        </div>
                        <div className="col">
                                <Price price={10} retailPrice={20} savings={50} isOnSale={true}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>)
}