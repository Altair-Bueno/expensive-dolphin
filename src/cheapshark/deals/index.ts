export const dealsURL = 'https://www.cheapshark.com/api/1.0/deals'

export interface ListOfDealsParam {
    storeID?: string
    pageNumber?:number,
    pageSize?:number,
    sortBy?: string,
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

