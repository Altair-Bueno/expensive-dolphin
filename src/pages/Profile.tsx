import { DealList } from "../components/DealList";
import {ExpensiveGame} from "../components/game/ExpensiveGame";

export {
    Profile
}

const deals = [
    {
        internalName: "INSOUNDMIND",
        title: "In Sound Mind",
        metacriticLink: "/game/pc/in-sound-mind",
        dealID: "CM%2BsA15QSj55Nv%2BxkmlnQipdO6sDSshsIPZdcpAug6k%3D",
        storeID: "25",
        gameID: "229914",
        salePrice: 4.99,
        normalPrice: 34.99,
        isOnSale: "1",
        savings: 100.0,
        metacriticScore: "75",
        steamRatingText: "Overwhelmingly Positive",
        steamRatingPercent: 95,
        steamRatingCount: "807",
        steamAppID: "1119980",
        releaseDate: 1632787200,
        lastChange: 1647533917,
        dealRating: "10.0",
        thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/1119980/capsule_sm_120.jpg?t=1637687292",
    }
]

function Profile() {
    return (
        <>
            <ExpensiveGame title={deals[0].title} dealID={deals[0].dealID} gameID={deals[0].gameID} salePrice={deals[0].salePrice} normalPrice={deals[0].normalPrice} savings={deals[0].savings} steamRatingPercent={deals[0].steamRatingPercent} thumb={deals[0].thumb}/>
        </>   
    );
}