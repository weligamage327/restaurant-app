import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    ActivityIndicator,
    TouchableOpacity,
    SafeAreaView,
    Alert
} from 'react-native';
import { requestLocationPermission, getCurrentLocation } from '../utils/location';
import { fetchNearbyRestaurants } from '../services/api';
import { RestaurantCard } from '../components/RestaurantCard';
import { Restaurant, Location } from '../types';

export const HomeScreen = () => {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    const [loading, setLoading] = useState(true);
    const [location, setLocation] = useState<Location | null>(null);
    const [sortBy, setSortBy] = useState<'distance' | 'rating'>('distance');

    useEffect(() => {
        initApp();
    }, []);

    const initApp = async () => {
        setLoading(true);
        const hasPermission = await requestLocationPermission();

        if (!hasPermission) {
            Alert.alert('Permission Denied', 'Location permission is required to find nearby restaurants.');
            setLoading(false);
            return;
        }

        try {
            const loc = await getCurrentLocation();
            setLocation(loc);
            // Fetch restaurants using user's location
            const data = await fetchNearbyRestaurants(loc.latitude, loc.longitude);
            setRestaurants(data);
        } catch (_error) {
            Alert.alert('Error', 'Could not fetch your location or nearby restaurants.');
        } finally {
            setLoading(false);
        }
    };

    const sortedRestaurants = [...restaurants].sort((a, b) => {
        if (sortBy === 'distance') {
            return a.distance - b.distance;
        }
        return b.rating - a.rating; // Descending for rating
    });

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
                renderItem={({ item }) => <RestaurantCard restaurant={item} />}
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
});
