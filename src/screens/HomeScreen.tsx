import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RestaurantCard } from '../components/RestaurantCard';
import { Restaurant } from '../types';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useRestaurants } from '../hooks/useRestaurants';

export const HomeScreen = () => {
    const { restaurants, location, loading } = useRestaurants();
    const [sortBy, setSortBy] = useState<'distance' | 'rating'>('distance');
    const mapRef = React.useRef<MapView>(null);

    const sortedRestaurants = [...restaurants].sort((a, b) => {
        if (sortBy === 'distance') {
            return a.distance - b.distance;
        }
        return b.rating - a.rating; // Descending for rating
    });

    const handleRestaurantSelect = (restaurant: Restaurant) => {
        if (mapRef.current) {
            mapRef.current.animateToRegion({
                latitude: restaurant.location.latitude,
                longitude: restaurant.location.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }, 1000);
        }
    };

    if (loading) {
        return (
            <View style={styles.centerContainer}>
                <ActivityIndicator size="large" color="#ff6200" />
                <Text style={styles.loadingText}>Finding nearby restaurants...</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Nearby Restaurants</Text>
                <Text style={styles.subtitle}>
                    {location ? `Based on your current location` : 'Location unavailable'}
                </Text>
            </View>

            {location && (
                <MapView
                    ref={mapRef}
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    initialRegion={{
                        latitude: location.latitude,
                        longitude: location.longitude,
                        latitudeDelta: 0.05,
                        longitudeDelta: 0.05,
                    }}
                    showsUserLocation={true}
                >
                    {sortedRestaurants.map((restaurant) => (
                        <Marker
                            key={restaurant.id}
                            coordinate={{
                                latitude: restaurant.location.latitude,
                                longitude: restaurant.location.longitude,
                            }}
                        >
                            <View style={styles.customMarker}>
                                <View style={styles.markerBadge}>
                                    <Text style={styles.markerText}>{restaurant.name}</Text>
                                </View>
                                <View style={styles.markerPin} />
                            </View>
                        </Marker>
                    ))}
                </MapView>
            )}

            <View style={styles.filterContainer}>
                <TouchableOpacity
                    style={[styles.filterButton, sortBy === 'distance' && styles.filterButtonActive]}
                    onPress={() => setSortBy('distance')}
                >
                    <Text style={[styles.filterText, sortBy === 'distance' && styles.filterTextActive]}>
                        Sort by Distance
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.filterButton, sortBy === 'rating' && styles.filterButtonActive]}
                    onPress={() => setSortBy('rating')}
                >
                    <Text style={[styles.filterText, sortBy === 'rating' && styles.filterTextActive]}>
                        Sort by Rating
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={sortedRestaurants}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity activeOpacity={0.8} onPress={() => handleRestaurantSelect(item)}>
                        <RestaurantCard restaurant={item} />
                    </TouchableOpacity>
                )}
                contentContainerStyle={styles.listContainer}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    loadingText: {
        marginTop: 12,
        fontSize: 16,
        color: '#666',
    },
    header: {
        padding: 16,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ebebeb',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
    map: {
        width: '100%',
        height: 250,
    },
    filterContainer: {
        flexDirection: 'row',
        padding: 16,
        gap: 12,
    },
    filterButton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
    },
    filterButtonActive: {
        backgroundColor: '#ff6200',
        borderColor: '#ff6200',
    },
    filterText: {
        color: '#666',
        fontWeight: '600',
    },
    filterTextActive: {
        color: '#fff',
    },
    listContainer: {
        paddingBottom: 24,
    },
    customMarker: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    markerBadge: {
        backgroundColor: '#fff',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 4,
    },
    markerText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#ff6200',
    },
    markerPin: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#ff6200',
        borderWidth: 2,
        borderColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});
