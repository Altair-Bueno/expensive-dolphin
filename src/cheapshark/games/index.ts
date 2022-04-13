export const gamesURL = 'https://www.cheapshark.com/api/1.0/games'

export interface ListOfGamesParam {
    title:string,
    steamAppId?:number,
    limit?:number,
    exact?:number,
}

export interface GameLookupParam {
    id:string
}

export interface MultipleGameLookupParam {
    ids:string
}