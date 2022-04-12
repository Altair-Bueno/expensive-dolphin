export const dealsURL = 'https://www.cheapshark.com/api/1.0/deals'

export enum SortByOptions {
    DealRating = "Deal Rating",
    Title = "Title",
    Savings = "Savings",
    Price = "Price",
    Metacritic = "Metacritic",
    Reviews = "Reviews",
    Release = "Release",
    Store = "Store",
    Recent = "recent"
}

export interface ListOfDealsParam {
    storeID?: number[],
    pageNumber?:number,
    pageSize?:number,
    sortBy?: SortByOptions,
    desc?:boolean ,
    lowerPrice?: number,
    upperPrice?:number,
    metacritic?:number,
    steamRating?:number,
    steamAppID?:string,
    title?:string,
    exact?:boolean ,
    AAA?:boolean,
    steamworks?:boolean,
    onSale?:boolean,
    output?:string
}

export interface DealLookupParam {
    id:string
}

