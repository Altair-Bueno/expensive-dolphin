export const dealsBaseAPIURL = "https://www.cheapshark.com/api/1.0/deals";
export const storesBaseAPIURL = "https://www.cheapshark.com/api/1.0/stores";
export const dealLookUpBaseAPIURL = "https://www.cheapshark.com/api/1.0/deals?id=";
export const gameLookUpBaseAPIURL = "https://www.cheapshark.com/api/1.0/games?id=";

export const baseimgsURL = "https://www.cheapshark.com";
export const baseapiURL = "https://www.cheapshark.com/api/1.0";
export const redirectDeal = "https://www.cheapshark.com/redirect?dealID=";

export function openInNewTab(url: string) {
    window.open(url, "_blank")?.focus();
  }