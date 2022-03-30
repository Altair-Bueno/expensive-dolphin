export interface Info {
    title: string;
    steamAppID: string;
    thumb: string;
}

export interface CheapestPriceEver {
    price: string;
    date: number;
}

export interface Deal {
    storeID: string;
    dealID: string;
    price: string;
    retailPrice: string;
    savings: string;
}

export interface GameLookup {
    info: Info;
    cheapestPriceEver: CheapestPriceEver;
    deals: Deal[];
}

