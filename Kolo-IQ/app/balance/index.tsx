import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useRouter} from 'expo-router'



const Balance: React.FC = () => {
    const router= useRouter();
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <View style={styles.container}>
           <View style={styles.singleCard}>
                <Icon name="cart" size={24} color="#4A90E2" />
                <View style={styles.textGroup}>
                    <Text style={styles.cardTitle}>$5000</Text>
                    <Text style={styles.cardDescription}>AshBank USD</Text>
                </View>
                <Icon name="pen" size={24} color="#4A90E2" />
            </View>

            {/* Vertical Card List */}
            <View style={styles.card}>
                {[
                    { icon: 'car', title: 'Taxi', desc: 'Uber ride', amount: '$12.99' },
                    { icon: 'silverware-fork-knife', title: 'Food', desc: 'Lunch at cafe', amount: '$8.50' },
                    { icon: 'bank-transfer', title: 'Transfer', desc: 'Bank to wallet', amount: '$100.00' },
                    { icon: 'tag', title: 'Prices', desc: 'Grocery shopping', amount: '$54.20' },
                ].map((item, index) => (
                    <React.Fragment key={index}>
                        <View style={styles.cardItem}>
                            <Icon name={item.icon} size={24} color="#4A90E2" />
                            <View style={styles.textGroup}>
                                <Text style={styles.cardTitle}>{item.title}</Text>
                                <Text style={styles.cardDescription}>{item.desc}</Text>
                            </View>
                            <Text style={styles.amountText}>{item.amount}</Text>
                        </View>
                        {index < 3 && <View style={styles.hSeparator} />}
                    </React.Fragment>
                ))}
            </View>

            {/* Additional Card 1 - Shopping */}
            <View style={styles.singleCard}>
                <Icon name="cart" size={24} color="#4A90E2" />
                <View style={styles.textGroup}>
                    <Text style={styles.cardTitle}>Shopping</Text>
                    <Text style={styles.cardDescription}>Bought clothes online</Text>
                </View>
                <Text style={styles.amountText}>$76.40</Text>
            </View>

            {/* Additional Card 2 - Taxi */}
            <TouchableOpacity onPress={() =>router.push('/sheduledpayment')}>
            <View style={styles.singleCard}>
                <Icon name="car" size={24} color="#4A90E2" />
                <View style={styles.textGroup}>
                    <Text style={styles.cardTitle}>Taxi</Text>
                    <Text style={styles.cardDescription}>Airport pickup</Text>
                </View>
                <Text style={styles.amountText}>$25.00</Text>
            </View>
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
        height: 100
    },
});

export default Balance;
