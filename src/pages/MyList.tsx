import {PriceTable} from "../components/game/PriceTable"
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const deals = [
    {
      "internalName": "INSOUNDMIND",
      "title": "In Sound Mind",
      "metacriticLink": "/game/pc/in-sound-mind",
      "dealID": "CM%2BsA15QSj55Nv%2BxkmlnQipdO6sDSshsIPZdcpAug6k%3D",
      "storeID": "25",
      "gameID": "229914",
      "salePrice": "0.00",
      "normalPrice": "34.99",
      "isOnSale": "1",
      "savings": "100.000000",
      "metacriticScore": "75",
      "steamRatingText": "Overwhelmingly Positive",
      "steamRatingPercent": "95",
      "steamRatingCount": "807",
      "steamAppID": "1119980",
      "releaseDate": 1632787200,
      "lastChange": 1647533917,
      "dealRating": "10.0",
      "thumb": "https://cdn.cloudflare.steamstatic.com/steam/apps/1119980/capsule_sm_120.jpg?t=1637687292"
    },
    {
      "internalName": "GRIDLEGENDS",
      "title": "GRID Legends",
      "metacriticLink": "/game/pc/grid-legends",
      "dealID": "yC9Q6jtit9QHFoTb6dwZ0jE4Wld6s%2BGeq2YbKN3uyw4%3D",
      "storeID": "8",
      "gameID": "238022",
      "salePrice": "39.99",
      "normalPrice": "59.99",
      "isOnSale": "1",
      "savings": "33.338890",
      "metacriticScore": "74",
      "steamRatingText": "Mostly Positive",
      "steamRatingPercent": "76",
      "steamRatingCount": "234",
      "steamAppID": "1307710",
      "releaseDate": 1645747200,
      "lastChange": 1647539816,
      "dealRating": "10.0",
      "thumb": "https://cdn.cloudflare.steamstatic.com/steam/apps/1307710/capsule_sm_120.jpg?t=1646752436"
    },
    {
      "internalName": "XCOM2COLLECTION",
      "title": "XCOM 2 Collection",
      "metacriticLink": null,
      "dealID": "RC78%2ByYnVxKddxjVdQ2JKpZgLOXq2Y2i0YWFxWZunMQ%3D",
      "storeID": "32",
      "gameID": "177716",
      "salePrice": "6.44",
      "normalPrice": "99.99",
      "isOnSale": "1",
      "savings": "93.559356",
      "metacriticScore": "0",
      "steamRatingText": null,
      "steamRatingPercent": "0",
      "steamRatingCount": "0",
      "steamAppID": null,
      "releaseDate": 0,
      "lastChange": 1647480109,
      "dealRating": "10.0",
      "thumb": "https://gamersgatep.imgix.net/a/4/2/3e624ed2a18d7d04afc30547cdd5dbb86795624a.jpg?auto=&w="
    },
    {
      "internalName": "XCOM2COLLECTION",
      "title": "XCOM 2 Collection",
      "metacriticLink": null,
      "dealID": "PU7N25j5EmwOb4abwolriQh3wBlgV%2BLkTEeVRewEJUk%3D",
      "storeID": "29",
      "gameID": "177716",
      "salePrice": "7.00",
      "normalPrice": "99.99",
      "isOnSale": "1",
      "savings": "92.999300",
      "metacriticScore": "0",
      "steamRatingText": null,
      "steamRatingPercent": "0",
      "steamRatingCount": "0",
      "steamAppID": null,
      "releaseDate": 0,
      "lastChange": 1647512992,
      "dealRating": "10.0",
      "thumb": "https://gamersgatep.imgix.net/a/4/2/3e624ed2a18d7d04afc30547cdd5dbb86795624a.jpg?auto=&w="
    },
    {
      "internalName": "ANTHEMLEGIONOFDAWNEDITION",
      "title": "Anthem Legion of Dawn Edition",
      "metacriticLink": null,
      "dealID": "cd3Zp2SDxs4SB9lgtFrArPZt%2F%2FeeXYA5cW0XHAiDTsE%3D",
      "storeID": "8",
      "gameID": "188170",
      "salePrice": "6.99",
      "normalPrice": "69.99",
      "isOnSale": "1",
      "savings": "90.012859",
      "metacriticScore": "0",
      "steamRatingText": null,
      "steamRatingPercent": "0",
      "steamRatingCount": "0",
      "steamAppID": null,
      "releaseDate": 0,
      "lastChange": 1647539773,
      "dealRating": "10.0",
      "thumb": "https://originassets.akamaized.net/origin-com-store-final-assets-prod/180831/142.0x200.0/1069752_MB_142x200_en_US_^_2018-06-03-12-41-24_8dc4a01c489c6a1fa18f100892bdceba9ed85a80.jpg"
    }
]

export {
    MyList
}

function MyList() {
    
    return (
    <>
        <h1>My List placeholder</h1>
        <PriceTable tablemodel={deals}/>
        
    </>
    
    );

}