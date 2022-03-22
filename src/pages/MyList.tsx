import { PriceTable } from "../components/game/PriceTable";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const deals = [
    {
        internalName: "INSOUNDMIND",
        title: "In Sound Mind",
        metacriticLink: "/game/pc/in-sound-mind",
        dealID: "CM%2BsA15QSj55Nv%2BxkmlnQipdO6sDSshsIPZdcpAug6k%3D",
        storeID: "25",
        gameID: "229914",
        salePrice: "0.00",
        normalPrice: "34.99",
        isOnSale: "1",
        savings: "100.000000",
        metacriticScore: "75",
        steamRatingText: "Overwhelmingly Positive",
        steamRatingPercent: "95",
        steamRatingCount: "807",
        steamAppID: "1119980",
        releaseDate: 1632787200,
        lastChange: 1647533917,
        dealRating: "10.0",
        thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/1119980/capsule_sm_120.jpg?t=1637687292",
    },
    {
        internalName: "GRIDLEGENDS",
        title: "GRID Legends",
        metacriticLink: "/game/pc/grid-legends",
        dealID: "yC9Q6jtit9QHFoTb6dwZ0jE4Wld6s%2BGeq2YbKN3uyw4%3D",
        storeID: "8",
        gameID: "238022",
        salePrice: "39.99",
        normalPrice: "59.99",
        isOnSale: "1",
        savings: "33.338890",
        metacriticScore: "74",
        steamRatingText: "Mostly Positive",
        steamRatingPercent: "76",
        steamRatingCount: "234",
        steamAppID: "1307710",
        releaseDate: 1645747200,
        lastChange: 1647539816,
        dealRating: "10.0",
        thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/1307710/capsule_sm_120.jpg?t=1646752436",
    },
    {
        internalName: "XCOM2COLLECTION",
        title: "XCOM 2 Collection",
        metacriticLink: null,
        dealID: "RC78%2ByYnVxKddxjVdQ2JKpZgLOXq2Y2i0YWFxWZunMQ%3D",
        storeID: "32",
        gameID: "177716",
        salePrice: "6.44",
        normalPrice: "99.99",
        isOnSale: "1",
        savings: "93.559356",
        metacriticScore: "0",
        steamRatingText: null,
        steamRatingPercent: "0",
        steamRatingCount: "0",
        steamAppID: null,
        releaseDate: 0,
        lastChange: 1647480109,
        dealRating: "10.0",
        thumb: "https://gamersgatep.imgix.net/a/4/2/3e624ed2a18d7d04afc30547cdd5dbb86795624a.jpg?auto=&w=",
    },
    {
        internalName: "XCOM2COLLECTION",
        title: "XCOM 2 Collection",
        metacriticLink: null,
        dealID: "PU7N25j5EmwOb4abwolriQh3wBlgV%2BLkTEeVRewEJUk%3D",
        storeID: "29",
        gameID: "177716",
        salePrice: "7.00",
        normalPrice: "99.99",
        isOnSale: "1",
        savings: "92.999300",
        metacriticScore: "0",
        steamRatingText: null,
        steamRatingPercent: "0",
        steamRatingCount: "0",
        steamAppID: null,
        releaseDate: 0,
        lastChange: 1647512992,
        dealRating: "10.0",
        thumb: "https://gamersgatep.imgix.net/a/4/2/3e624ed2a18d7d04afc30547cdd5dbb86795624a.jpg?auto=&w=",
    },
    {
        internalName: "ANTHEMLEGIONOFDAWNEDITION",
        title: "Anthem Legion of Dawn Edition",
        metacriticLink: null,
        dealID: "cd3Zp2SDxs4SB9lgtFrArPZt%2F%2FeeXYA5cW0XHAiDTsE%3D",
        storeID: "8",
        gameID: "188170",
        salePrice: "6.99",
        normalPrice: "69.99",
        isOnSale: "1",
        savings: "90.012859",
        metacriticScore: "0",
        steamRatingText: null,
        steamRatingPercent: "0",
        steamRatingCount: "0",
        steamAppID: null,
        releaseDate: 0,
        lastChange: 1647539773,
        dealRating: "10.0",
        thumb: "https://originassets.akamaized.net/origin-com-store-final-assets-prod/180831/142.0x200.0/1069752_MB_142x200_en_US_^_2018-06-03-12-41-24_8dc4a01c489c6a1fa18f100892bdceba9ed85a80.jpg",
    },
];

const stores = [
    {
        storeID: "1",
        storeName: "Steam",
        isActive: 1,
        images: {
            banner: "/img/stores/banners/0.png",
            logo: "/img/stores/logos/0.png",
            icon: "/img/stores/icons/0.png",
        },
    },
    {
        storeID: "2",
        storeName: "GamersGate",
        isActive: 1,
        images: {
            banner: "/img/stores/banners/1.png",
            logo: "/img/stores/logos/1.png",
            icon: "/img/stores/icons/1.png",
        },
    },
    {
        storeID: "3",
        storeName: "GreenManGaming",
        isActive: 1,
        images: {
            banner: "/img/stores/banners/2.png",
            logo: "/img/stores/logos/2.png",
            icon: "/img/stores/icons/2.png",
        },
    },
    {
        storeID: "4",
        storeName: "Amazon",
        isActive: 0,
        images: {
            banner: "/img/stores/banners/3.png",
            logo: "/img/stores/logos/3.png",
            icon: "/img/stores/icons/3.png",
        },
    },
    {
        storeID: "5",
        storeName: "GameStop",
        isActive: 0,
        images: {
            banner: "/img/stores/banners/4.png",
            logo: "/img/stores/logos/4.png",
            icon: "/img/stores/icons/4.png",
        },
    },
    {
        storeID: "6",
        storeName: "Direct2Drive",
        isActive: 1,
        images: {
            banner: "/img/stores/banners/5.png",
            logo: "/img/stores/logos/5.png",
            icon: "/img/stores/icons/5.png",
        },
    },
    {
        storeID: "7",
        storeName: "GOG",
        isActive: 1,
        images: {
            banner: "/img/stores/banners/6.png",
            logo: "/img/stores/logos/6.png",
            icon: "/img/stores/icons/6.png",
        },
    },
    {
        storeID: "8",
        storeName: "Origin",
        isActive: 1,
        images: {
            banner: "/img/stores/banners/7.png",
            logo: "/img/stores/logos/7.png",
            icon: "/img/stores/icons/7.png",
        },
    },
    {
        storeID: "9",
        storeName: "Get Games",
        isActive: 0,
        images: {
            banner: "/img/stores/banners/8.png",
            logo: "/img/stores/logos/8.png",
            icon: "/img/stores/icons/8.png",
        },
    },
    {
        storeID: "10",
        storeName: "Shiny Loot",
        isActive: 0,
        images: {
            banner: "/img/stores/banners/9.png",
            logo: "/img/stores/logos/9.png",
            icon: "/img/stores/icons/9.png",
        },
    },
    {
        storeID: "11",
        storeName: "Humble Store",
        isActive: 1,
        images: {
            banner: "/img/stores/banners/10.png",
            logo: "/img/stores/logos/10.png",
            icon: "/img/stores/icons/10.png",
        },
    },
    {
        storeID: "12",
        storeName: "Desura",
        isActive: 0,
        images: {
            banner: "/img/stores/banners/11.png",
            logo: "/img/stores/logos/11.png",
            icon: "/img/stores/icons/11.png",
        },
    },
    {
        storeID: "13",
        storeName: "Uplay",
        isActive: 1,
        images: {
            banner: "/img/stores/banners/12.png",
            logo: "/img/stores/logos/12.png",
            icon: "/img/stores/icons/12.png",
        },
    },
    {
        storeID: "14",
        storeName: "IndieGameStand",
        isActive: 0,
        images: {
            banner: "/img/stores/banners/13.png",
            logo: "/img/stores/logos/13.png",
            icon: "/img/stores/icons/13.png",
        },
    },
    {
        storeID: "15",
        storeName: "Fanatical",
        isActive: 1,
        images: {
            banner: "/img/stores/banners/14.png",
            logo: "/img/stores/logos/14.png",
            icon: "/img/stores/icons/14.png",
        },
    },
    {
        storeID: "16",
        storeName: "Gamesrocket",
        isActive: 0,
        images: {
            banner: "/img/stores/banners/15.png",
            logo: "/img/stores/logos/15.png",
            icon: "/img/stores/icons/15.png",
        },
    },
    {
        storeID: "17",
        storeName: "Games Republic",
        isActive: 0,
        images: {
            banner: "/img/stores/banners/16.png",
            logo: "/img/stores/logos/16.png",
            icon: "/img/stores/icons/16.png",
        },
    },
    {
        storeID: "18",
        storeName: "SilaGames",
        isActive: 0,
        images: {
            banner: "/img/stores/banners/17.png",
            logo: "/img/stores/logos/17.png",
            icon: "/img/stores/icons/17.png",
        },
    },
    {
        storeID: "19",
        storeName: "Playfield",
        isActive: 0,
        images: {
            banner: "/img/stores/banners/18.png",
            logo: "/img/stores/logos/18.png",
            icon: "/img/stores/icons/18.png",
        },
    },
    {
        storeID: "20",
        storeName: "ImperialGames",
        isActive: 0,
        images: {
            banner: "/img/stores/banners/19.png",
            logo: "/img/stores/logos/19.png",
            icon: "/img/stores/icons/19.png",
        },
    },
    {
        storeID: "21",
        storeName: "WinGameStore",
        isActive: 1,
        images: {
            banner: "/img/stores/banners/20.png",
            logo: "/img/stores/logos/20.png",
            icon: "/img/stores/icons/20.png",
        },
    },
    {
        storeID: "22",
        storeName: "FunStockDigital",
        isActive: 0,
        images: {
            banner: "/img/stores/banners/21.png",
            logo: "/img/stores/logos/21.png",
            icon: "/img/stores/icons/21.png",
        },
    },
    {
        storeID: "23",
        storeName: "GameBillet",
        isActive: 1,
        images: {
            banner: "/img/stores/banners/22.png",
            logo: "/img/stores/logos/22.png",
            icon: "/img/stores/icons/22.png",
        },
    },
    {
        storeID: "24",
        storeName: "Voidu",
        isActive: 1,
        images: {
            banner: "/img/stores/banners/23.png",
            logo: "/img/stores/logos/23.png",
            icon: "/img/stores/icons/23.png",
        },
    },
    {
        storeID: "25",
        storeName: "Epic Games Store",
        isActive: 1,
        images: {
            banner: "/img/stores/banners/24.png",
            logo: "/img/stores/logos/24.png",
            icon: "/img/stores/icons/24.png",
        },
    },
    {
        storeID: "26",
        storeName: "Razer Game Store",
        isActive: 0,
        images: {
            banner: "/img/stores/banners/25.png",
            logo: "/img/stores/logos/25.png",
            icon: "/img/stores/icons/25.png",
        },
    },
    {
        storeID: "27",
        storeName: "Gamesplanet",
        isActive: 1,
        images: {
            banner: "/img/stores/banners/26.png",
            logo: "/img/stores/logos/26.png",
            icon: "/img/stores/icons/26.png",
        },
    },
    {
        storeID: "28",
        storeName: "Gamesload",
        isActive: 1,
        images: {
            banner: "/img/stores/banners/27.png",
            logo: "/img/stores/logos/27.png",
            icon: "/img/stores/icons/27.png",
        },
    },
    {
        storeID: "29",
        storeName: "2Game",
        isActive: 1,
        images: {
            banner: "/img/stores/banners/28.png",
            logo: "/img/stores/logos/28.png",
            icon: "/img/stores/icons/28.png",
        },
    },
    {
        storeID: "30",
        storeName: "IndieGala",
        isActive: 1,
        images: {
            banner: "/img/stores/banners/29.png",
            logo: "/img/stores/logos/29.png",
            icon: "/img/stores/icons/29.png",
        },
    },
    {
        storeID: "31",
        storeName: "Blizzard Shop",
        isActive: 1,
        images: {
            banner: "/img/stores/banners/30.png",
            logo: "/img/stores/logos/30.png",
            icon: "/img/stores/icons/30.png",
        },
    },
    {
        storeID: "32",
        storeName: "AllYouPlay",
        isActive: 1,
        images: {
            banner: "/img/stores/banners/31.png",
            logo: "/img/stores/logos/31.png",
            icon: "/img/stores/icons/31.png",
        },
    },
    {
        storeID: "33",
        storeName: "DLGamer",
        isActive: 1,
        images: {
            banner: "/img/stores/banners/32.png",
            logo: "/img/stores/logos/32.png",
            icon: "/img/stores/icons/32.png",
        },
    },
];

export { MyList };

function MyList() {
    return (
        <>
            <h1>My List placeholder</h1>
            <PriceTable storeModel={stores} tablemodel={deals} />
        </>
    );
}
