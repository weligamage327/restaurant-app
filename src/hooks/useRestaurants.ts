import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { Restaurant, Location } from '../types';
import { requestLocationPermission, getCurrentLocation } from '../utils/location';
import { fetchNearbyRestaurants } from '../services/api';

export const useRestaurants = () => {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    const [loading, setLoading] = useState(true);
    const [location, setLocation] = useState<Location | null>(null);

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

    return { restaurants, loading, location, refetch: initApp };
};
