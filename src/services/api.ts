import { Restaurant } from '../types';

export const mockRestaurants: Restaurant[] = [
    {
        id: '1',
        name: 'Pettah Kitchen',
        rating: 4.8,
        reviewCount: 342,
        distance: 2.5,
        location: {
            latitude: 6.9380,
            longitude: 79.8510,
        },
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
        cuisine: ['American', 'Comfort Food'],
        discount: 'Up to 20% OFF',
    },
    {
        id: '2',
        name: 'Diyatha Cafe',
        rating: 4.6,
        reviewCount: 512,
        distance: 4.2,
        location: {
            latitude: 6.9039,
            longitude: 79.9198,
        },
        image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&q=80&w=800',
        cuisine: ['Japanese', 'Sushi'],
    },
    {
        id: '3',
        name: 'BMICH Buffet',
        rating: 4.3,
        reviewCount: 228,
        distance: 0.8,
        location: {
            latitude: 6.9015,
            longitude: 79.8732,
        },
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800',
        cuisine: ['Italian', 'Pasta', 'Pizza'],
        discount: '15% Off Total Bill',
    },
    {
        id: '4',
        name: 'Lotus Tower Dining',
        rating: 4.7,
        reviewCount: 419,
        distance: 1.5,
        location: {
            latitude: 6.9271,
            longitude: 79.8584,
        },
        image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&q=80&w=800',
        cuisine: ['Thai', 'Asian'],
        discount: 'Up to 30% OFF',
    },
    {
        id: '5',
        name: 'Ward Place Cafe',
        rating: 4.5,
        reviewCount: 184,
        distance: 1.1,
        location: {
            latitude: 6.9147,
            longitude: 79.8665,
        },
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
        cuisine: ['Vegan', 'Healthy'],
    },
    {
        id: '6',
        name: 'Kirulapana Grill',
        rating: 4.2,
        reviewCount: 651,
        distance: 3.3,
        location: {
            latitude: 6.8795,
            longitude: 79.8734,
        },
        image: 'https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&q=80&w=800',
        cuisine: ['American', 'Burgers'],
    },
    {
        id: '7',
        name: 'Galle Face Breeze Cafe',
        rating: 4.9,
        reviewCount: 892,
        distance: 1.8,
        location: {
            latitude: 6.9240,
            longitude: 79.8450,
        },
        image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800',
        cuisine: ['Seafood', 'Cafe'],
    },
    {
        id: '8',
        name: 'Thalawathugoda Treats',
        rating: 4.4,
        reviewCount: 320,
        distance: 7.5,
        location: {
            latitude: 6.8741,
            longitude: 79.9287,
        },
        image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800',
        cuisine: ['Dessert', 'Cafe'],
    },
    {
        id: '9',
        name: 'Peliyagoda Spices',
        rating: 4.6,
        reviewCount: 410,
        distance: 4.2,
        location: {
            latitude: 6.9535,
            longitude: 79.8824,
        },
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800',
        cuisine: ['Indian', 'Spicy'],
        discount: 'Up to 25% OFF',
    },
    {
        id: '10',
        name: 'Nugegoda Night Foods',
        rating: 4.8,
        reviewCount: 950,
        distance: 5.8,
        location: {
            latitude: 6.8649,
            longitude: 79.8997,
        },
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800',
        cuisine: ['Fast Food', 'Street Food'],
        discount: 'Buy 1 Get 1 Free',
    }
];

// Helper to simulate network delay
export const fetchNearbyRestaurants = async (_lat: number, _lng: number): Promise<Restaurant[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            // In a real app I'd filter/calculate distance based on lat/lng
            // For this mock, I just return the static list
            resolve(mockRestaurants);
        }, 1000);
    });
};
