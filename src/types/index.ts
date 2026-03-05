export interface Location {
    latitude: number;
    longitude: number;
}

export interface Coordinates {
    latitude: number;
    longitude: number;
}

export interface Restaurant {
    id: string;
    name: string;
    rating: number;
    reviewCount: number;
    distance: number;
    location: Coordinates;
    image: string;
    cuisine: string[];
    discount?: string;
}

export interface MenuItem {
    id: string;
    name: string;
    price: number;
}
