import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../searchbar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TransactionHistory: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <View style={styles.container}>
            <SearchBar
                onSearch={setSearchTerm}
                placeholder="Super AI search"
                containerStyle={styles.searchBarContainer}
                inputStyle={styles.searchInput}
                iconColor="#4A90E2"
            />

            <View style={styles.all}>
                <Text>All</Text>
                <Text>Spending</Text>
                <Text>Income</Text>
            </View>

            {/* Vertical Card with Icons */}
            <View style={styles.card}>
                <View style={styles.cardItem}>
                    <Icon name="car" size={24} color="#4A90E2" />
                    <Text style={styles.cardText}>Taxi</Text>
                </View>
                <View style={styles.hSeparator} />

                <View style={styles.cardItem}>
                    <Icon name="silverware-fork-knife" size={24} color="#4A90E2" />
                    <Text style={styles.cardText}>Food</Text>
                </View>
                <View style={styles.hSeparator} />

                <View style={styles.cardItem}>
                    <Icon name="bank-transfer" size={24} color="#4A90E2" />
                    <Text style={styles.cardText}>Transfer</Text>
                </View>
                <View style={styles.hSeparator} />

                <View style={styles.cardItem}>
                    <Icon name="tag" size={24} color="#4A90E2" />
                    <Text style={styles.cardText}>Prices</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 16,
    },
    searchBarContainer: {
        backgroundColor: '#F5F5F7',
        borderRadius: 10,
    },
    searchInput: {
        fontSize: 16,
        color: '#1C1C1E',
    },
    all: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    card: {
        flexDirection: 'column',
        backgroundColor: '#F0F0F0',
        borderRadius: 10,
        marginTop: 20,
        padding: 10,
    },
    cardItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    cardText: {
        marginLeft: 10,
        fontSize: 14,
        color: '#333',
    },
    hSeparator: {
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 5,
    },
});

export default TransactionHistory;
