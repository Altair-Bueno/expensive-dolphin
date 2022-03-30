export interface GameInfo {
    storeID: string;
    gameID: string;
    name: string;
    steamAppID: string;
    salePrice: string;
    retailPrice: string;
    steamRatingText: string;
    steamRatingPercent: string;
    steamRatingCount: string;
    metacriticScore: string;
    metacriticLink: string;
    releaseDate: number;
    publisher: string;
    steamworks: string;
    thumb: string;
}

export interface CheaperStore {
    dealID: string;
    storeID: string;
    salePrice: string;
    retailPrice: string;
}

export interface CheapestPrice {
    price: string;
    date: number;
}

export interface DealLookup {
    gameInfo: GameInfo;
    cheaperStores: CheaperStore[];
    cheapestPrice: CheapestPrice;
}

