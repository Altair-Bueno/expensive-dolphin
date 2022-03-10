export type {
    GameLookup
}

interface GameLookup {
    "info": Info,
    "cheapestPriceEver": CheapPrice | null,
    "deals": Deal [],
}

interface CheapPrice{
    "price": string,
    "date": number
}

interface Deal {
    "storeID": string,
    "dealID": string,
    "price": string,
    "retailPrice": string,
    "savings": string
}

interface Info {
    "title": string,
    "steamAppID": string,
    "thumb": string
}
