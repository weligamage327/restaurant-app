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
    distance: number; // in miles or km
    location: Coordinates;
    image: string;
    cuisine: string[];
}
