export const gamesURL = 'https://www.cheapshark.com/api/1.0/games'

export interface ListOfGamesParam {
    title:string,
    streamAppId?:number,
    limit?:number,
    exact?:number,
}

export interface GameLookupParam {
    id:number
}

export interface MultipleGameLookupParam {
    ids:string
}