import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Restaurant } from '../types';
import { MenuModal } from './MenuModal';

interface RestaurantCardProps {
    restaurant: Restaurant;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <View style={styles.card}>
            <Image source={{ uri: restaurant.image }} style={styles.image} />
            {restaurant.discount && (
                <View style={styles.discountBadge}>
                    <Text style={styles.discountText}>✨ {restaurant.discount}</Text>
                </View>
            )}
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
                    <Text style={styles.distanceText}>{restaurant.distance.toFixed(1)} km</Text>
                </View>

                <View style={styles.actionRow}>
                    <TouchableOpacity style={[styles.actionButton, styles.secondaryButton]}>
                        <Text style={[styles.actionButtonText, styles.secondaryButtonText]}>📍 Directions</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.actionButton, styles.primaryButton]} onPress={() => setMenuVisible(true)}>
                        <Text style={[styles.actionButtonText, styles.primaryButtonText]}>🍽️ Menu</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <MenuModal
                visible={menuVisible}
                onClose={() => setMenuVisible(false)}
                restaurantName={restaurant.name}
            />
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
    discountBadge: {
        position: 'absolute',
        top: 12,
        left: 12,
        backgroundColor: '#ff4757',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    discountText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12,
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
    actionRow: {
        flexDirection: 'row',
        marginTop: 12,
        gap: 12,
    },
    actionButton: {
        flex: 1,
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#e8e8e8',
        alignItems: 'center',
    },
    secondaryButton: {
        backgroundColor: '#fff0e5',
        borderColor: '#ffebdb',
    },
    primaryButton: {
        backgroundColor: '#ff6200',
        borderColor: '#ff6200',
    },
    actionButtonText: {
        fontSize: 13,
        fontWeight: '600',
        color: '#444',
    },
    secondaryButtonText: {
        color: '#ff6200',
    },
    primaryButtonText: {
        color: '#fff',
    },
});
