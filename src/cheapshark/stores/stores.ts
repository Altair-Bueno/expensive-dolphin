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

