import { Restaurant } from '../types';

export const mockRestaurants: Restaurant[] = [
    {
        id: '1',
        name: 'The Rustic Kitchen',
        rating: 4.8,
        reviewCount: 342,
        distance: 0.5,
        location: {
            latitude: 40.7128,
            longitude: -74.0060,
        },
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
        cuisine: ['American', 'Comfort Food'],
    },
    {
        id: '2',
        name: 'Sakura Sushi',
        rating: 4.6,
        reviewCount: 512,
        distance: 1.2,
        location: {
            latitude: 40.7138,
            longitude: -74.0080,
        },
        image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&q=80&w=800',
        cuisine: ['Japanese', 'Sushi'],
    },
    {
        id: '3',
        name: 'La Piazza',
        rating: 4.3,
        reviewCount: 228,
        distance: 0.8,
        location: {
            latitude: 40.7118,
            longitude: -74.0040,
        },
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800',
        cuisine: ['Italian', 'Pasta', 'Pizza'],
    },
    {
        id: '4',
        name: 'Spicy Thai',
        rating: 4.7,
        reviewCount: 419,
        distance: 1.5,
        location: {
            latitude: 40.7148,
            longitude: -74.0090,
        },
        image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&q=80&w=800',
        cuisine: ['Thai', 'Asian'],
    },
    {
        id: '5',
        name: 'The Green Bowl',
        rating: 4.5,
        reviewCount: 184,
        distance: 2.1,
        location: {
            latitude: 40.7158,
            longitude: -74.0100,
        },
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
        cuisine: ['Vegan', 'Healthy'],
    },
    {
        id: '6',
        name: 'Burger & Co',
        rating: 4.2,
        reviewCount: 651,
        distance: 0.3,
        location: {
            latitude: 40.7108,
            longitude: -74.0020,
        },
        image: 'https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&q=80&w=800',
        cuisine: ['American', 'Burgers'],
    }
];

// Helper to simulate network delay
export const fetchNearbyRestaurants = async (_lat: number, _lng: number): Promise<Restaurant[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            // In a real app we'd filter/calculate distance based on lat/lng
            // For this mock, we just return the static list
            resolve(mockRestaurants);
        }, 1000);
    });
};
