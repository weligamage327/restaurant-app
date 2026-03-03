import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Restaurant } from '../types';

interface RestaurantCardProps {
    restaurant: Restaurant;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: restaurant.image }} style={styles.image} />
            <View style={styles.infoContainer}>
                <View style={styles.headerRow}>
                    <Text style={styles.name} numberOfLines={1}>
                        {restaurant.name}
                    </Text>
                    <View style={styles.ratingContainer}>
                        <Text style={styles.starText}>★</Text>
                        <Text style={styles.ratingText}>{restaurant.rating.toFixed(1)}</Text>
                        <Text style={styles.reviewCount}>({restaurant.reviewCount})</Text>
                    </View>
                </View>
                <View style={styles.detailsRow}>
                    <Text style={styles.cuisineText}>{restaurant.cuisine.join(', ')}</Text>
                    <Text style={styles.distanceText}>{restaurant.distance.toFixed(1)} mi</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        marginVertical: 8,
        marginHorizontal: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    image: {
        width: '100%',
        height: 150,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    infoContainer: {
        padding: 12,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1,
        color: '#333',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    starText: {
        color: '#FFD700',
        fontSize: 16,
        marginRight: 2,
    },
    ratingText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
    },
    reviewCount: {
        fontSize: 12,
        color: '#666',
        marginLeft: 4,
    },
    detailsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cuisineText: {
        fontSize: 14,
        color: '#666',
    },
    distanceText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#ff6200',
    },
});
