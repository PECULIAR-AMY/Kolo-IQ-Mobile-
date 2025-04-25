import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SearchBar from '../searchbar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useRouter} from 'expo-router'



const ScheduledPayment: React.FC = () => {
    const router= useRouter();
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

            {/* Additional Card 1 - Shopping */}
            <View style={styles.singleCard}>
                <Icon name="tablet" size={24} color="#4A90E2" />
                <View style={styles.textGroup}>
                    <Text style={styles.cardTitle}>Netflix subscription</Text>
                    <Text style={styles.cardDescription}>Bought clothes online</Text>
                </View>
                <Text style={styles.amountText}>$76.40</Text>
            </View>

            <View style={styles.singleCard}>
                <Icon name="home" size={24} color="#4A90E2" />
                <View style={styles.textGroup}>
                    <Text style={styles.cardTitle}>Home Service</Text>
                    <Text style={styles.cardDescription}>Bought clothes online</Text>
                </View>
                <Text style={styles.amountText}>$76.40</Text>
            </View>

            <View style={styles.singleCard}>
                <Icon name="pen" size={24} color="#4A90E2" />
                <View style={styles.textGroup}>
                    <Text style={styles.cardTitle}>Car Insurance</Text>
                    <Text style={styles.cardDescription}>Bought clothes online</Text>
                </View>
            </View>

            <View style={styles.singleCard}>
                <Icon name="car" size={24} color="#4A90E2" />
                <View style={styles.textGroup}>
                    <Text style={styles.cardTitle}>Gym membership</Text>
                    <Text style={styles.cardDescription}>Bought clothes online</Text>
                </View>
                <Text style={styles.amountText}>$76.40</Text>
            </View>

            {/* Additional Card 2 - Taxi */}
            <TouchableOpacity onPress={() =>router.push('/homeservicefee')}>
            <View style={styles.singleCard}>
                <Icon name="car" size={24} color="#4A90E2" />
                <View style={styles.textGroup}>
                    <Text style={styles.cardTitle}>Taxi</Text>
                    <Text style={styles.cardDescription}>Airport pickup</Text>
                </View>
                <Text style={styles.amountText}>$25.00</Text>
            </View>
            </TouchableOpacity>


            <TouchableOpacity style={styles.dottedCard}>
                <View style={styles.dottedButton}>
                    <Icon name="plus" size={20} color="#4A90E2" />
                </View>
                <Text style={styles.addNewText}>Add new</Text>
            </TouchableOpacity>
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
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    textGroup: {
        flex: 1,
        marginLeft: 10,
    },
    cardTitle: {
        fontSize: 14,
        color: '#333',
        fontWeight: 'bold',
    },
    cardDescription: {
        fontSize: 12,
        color: '#777',
        marginTop: 2,
    },
    amountText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1C1C1E',
    },
    hSeparator: {
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 5,
    },
    singleCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F0F0F0',
        borderRadius: 10,
        padding: 12,
        marginTop: 12,
        height: 70
    },

    dottedCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderWidth: 2,
        borderStyle: 'dotted',
        borderColor: 'black',
        borderRadius: 10,
        padding: 16,
        marginTop: 20,
    },
    dottedButton: {
        width: 32,
        height: 32,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#4A90E2',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        borderStyle: 'dotted',
    },
    addNewText: {
        fontSize: 16,
        color: '#4A90E2',
        fontWeight: '500',
    },

});

export default ScheduledPayment;
