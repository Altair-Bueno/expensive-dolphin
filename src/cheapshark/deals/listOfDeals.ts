export interface ListOfDeals {
  internalName: string;
  title: string;
  metacriticLink: string;
  dealID: string;
  storeID: string;
  gameID: string;
  salePrice: string;
  normalPrice: string;
  isOnSale: string;
  savings: string;
  metacriticScore: string;
  steamRatingText: string;
  steamRatingPercent: string;
  steamRatingCount: string;
  steamAppID: string;
  releaseDate: number;
  lastChange: number;
  dealRating: string;
  thumb: string;
}

export interface ListOfDealsReduced {
  title: string;
  dealID: string;
  gameID: string;
  salePrice: string;
  normalPrice: string;
  savings: string;
  steamRatingPercent: string;
  thumb: string;
}
