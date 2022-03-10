import {Price} from "./Price";
import {Rating} from "./Rating";

export {
    GameListElement
}


function GameListElement() {
    return <div>
        <h1>Placeholder</h1>
        <Rating steamRatingPercent={76} steamRatingCount={1000}/>
        <Price isOnSale={true} price={10} retailPrice={20} savings={50}/>
    </div>
}