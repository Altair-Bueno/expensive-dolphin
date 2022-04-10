export const storesInfoURL = 'https://www.cheapshark.com/api/1.0/stores';
export const storeImageURL = 'https://www.cheapshark.com/'

export interface Images {
    banner: string;
    icon: string;
    logo: string;
}

export interface Store {
    storeID: string;
    storeName: string;
    isActive: number;
    images: Images;
}

