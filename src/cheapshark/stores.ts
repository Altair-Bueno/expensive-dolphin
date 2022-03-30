export interface Images {
    banner: string;
    logo: string;
    icon: string;
}

export interface Store {
    storeID: string;
    storeName: string;
    isActive: number;
    images: Images;
}
