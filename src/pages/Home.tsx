import { ListOfDeals } from "../cheapshark/deals/listOfDeals";
import {DealList} from "../components/DealList";

export {
    Home
}

const deals = [] as any as ListOfDeals[];

function Home() {
    return (
        <div className={"d-flex justify-content-center m-3"}>
            <DealList elements={deals}/>
        </div>
    );
}