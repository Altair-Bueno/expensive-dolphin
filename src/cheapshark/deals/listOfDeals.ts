export interface Deal {
  internalName?: string;
  title: string;
  metacriticLink?: null | string;
  dealID: string;
  storeID: string;
  gameID: string;
  salePrice: string;
  normalPrice: string;
  isOnSale?: string;
  savings: string;
  metacriticScore?: string;
  steamRatingText?: string;
  steamRatingPercent: string;
  steamRatingCount?: string;
  steamAppID?: string;
  releaseDate?: number;
  lastChange?: number;
  dealRating?: string;
  thumb: string;
  lowestEver?: any|null
}
