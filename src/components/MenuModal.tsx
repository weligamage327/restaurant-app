import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { MenuItem } from '../types';

const MOCK_MENU: MenuItem[] = [
    { id: '1', name: "Chef's Special Plate", price: 1850 },
    { id: '2', name: "Signature Burger", price: 1450 },
    { id: '3', name: "Spicy Noodles", price: 1200 },
    { id: '4', name: "Classic Fries", price: 550 },
];

interface MenuModalProps {
    visible: boolean;
    onClose: () => void;
    restaurantName: string;
}

export const MenuModal: React.FC<MenuModalProps> = ({ visible, onClose, restaurantName }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalTitle}>{restaurantName} Menu</Text>
                        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                            <Text style={styles.closeButtonText}>✕</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={styles.menuList} showsVerticalScrollIndicator={false}>
                        {MOCK_MENU.map((item) => (
                            <View key={item.id} style={styles.menuItem}>
                                <Text style={styles.menuItemName}>{item.name}</Text>
                                <Text style={styles.menuItemPrice}>Rs {item.price}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        justifyContent: 'flex-end',
    },
    modalContent: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        padding: 24,
        height: '65%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 10,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
        paddingBottom: 20,
    },
    modalTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
    },
    closeButton: {
        width: 32,
        height: 32,
        backgroundColor: '#f5f5f5',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeButtonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#666',
    },
    menuList: {
        flex: 1,
    },
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#f5f5f5',
    },
    menuItemName: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
    },
    menuItemPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ff6200',
    },
});
