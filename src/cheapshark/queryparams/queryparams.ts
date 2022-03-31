export type DealParams = {
    queryKey: [
        storeID?: string,
        pageNumber?: number,
        pageSize?: number,
        sortBy?: string,
        desc?: boolean,
        lowerPrice?: number,
        upperPrice?: number,
        metacritic?: number,
        steamRating?: number,
        steamAppID?: string,
        title?: string,       
        exact?: boolean, // Flag to allow only exact string match for title parameter
        AAA?: boolean, // Flag to include only deals with retail price > $29
        steamworks?: boolean, // Flag to include only deals that redeem on Steam (best guess, depends on store support)
        onSale?: boolean, // Flag to include only games that are currently on sale
        output?: string // Option to output deals in RSS format (overrides page number/size to 0/100)
    ]
};

export type DealLookUpParams = {
    queryKey: [
        id: string // An Encoded Deal ID (from cheapshark)
    ]
}

export type ListOfGamesParams = {
    queryKey: [
        title: string, // Search for a game by title, case insensitive (required when not specifying steamAppID)
        steamAppID?: number, // Instead of using title, you can search for a game by Steam’s AppID - e.g. http://store.steampowered.com/app/35140/
        limit?: number, // The maximum number of games to return, up to 60
        exact?: boolean, // Flag to allow only exact string match for title parameter
    ]
}

export type GameLookUpParams = {
    queryKey: [
        id: string // An existing gameID
    ]
}

export type MultipleGameLookUpParams = {
    queryKey: [
        ids: string // A comma seperated list of GameID's - e.g. "126,127,128"
    ]
}