import { PriceTable } from "../components/game/PriceTable";
import { fetchDeals, getStores } from "../components/Query"
import { deals, stores } from "../cheapshark/exampledata";



export { MyList };

function MyList() {
    return (
        <>
            <h1>My List placeholder</h1>
            <div className="col-md-10 offset-md-1">
                <PriceTable storeModel={stores} tablemodel={deals} />
            </div>
        </>
    );
}
