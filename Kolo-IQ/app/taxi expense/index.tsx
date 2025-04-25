import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ScrollView,
} from 'react-native';
import SearchBar from '../searchbar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';
import { BarChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const TransactionHistory: React.FC = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState('');

    // Convert pieData into format suitable for BarChart
    const barData = {
        labels: ['Jan-Feb', 'Mar-Apr', 'May-Jul'],
        datasets: [
            {
                data: [50, 30, 20],
            },
        ],
    };

    return (
        <ScrollView style={styles.container}>
            <SearchBar
                onSearch={setSearchTerm}
                placeholder="Super AI search"
                containerStyle={styles.searchBarContainer}
                inputStyle={styles.searchInput}
                iconColor="#4A90E2"
            />

            {/* Bar Chart Section */}
            <View style={styles.pieContainer}>
                <Text style={styles.pieTitle}>Expenses (Jan - July)</Text>
                <BarChart
                    data={barData}
                    width={screenWidth - 32}
                    height={220}
                    chartConfig={{
                        backgroundColor: '#fff',
                        backgroundGradientFrom: '#fff',
                        backgroundGradientTo: '#fff',
                        decimalPlaces: 0,
                        color: (opacity = 1) => `rgba(74, 144, 226, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        style: {
                            borderRadius: 16,
                        },
                        propsForBackgroundLines: {
                            strokeDasharray: '', // solid lines
                        },
                    }}
                    style={{ borderRadius: 10 }}
                    fromZero
                    showValuesOnTopOfBars
                />
            </View>

            {/* Cards (same as before) */}
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

            <View style={styles.singleCard}>
                <Icon name="cart" size={24} color="#4A90E2" />
                <View style={styles.textGroup}>
                    <Text style={styles.cardTitle}>Shopping</Text>
                    <Text style={styles.cardDescription}>Bought clothes online</Text>
                </View>
                <Text style={styles.amountText}>$76.40</Text>
            </View>

            <TouchableOpacity onPress={() => router.push('./add payments')}>
                <View style={styles.singleCard}>
                    <Icon name="car" size={24} color="#4A90E2" />
                    <View style={styles.textGroup}>
                        <Text style={styles.cardTitle}>Taxi</Text>
                        <Text style={styles.cardDescription}>Airport pickup</Text>
                    </View>
                    <Text style={styles.amountText}>$25.00</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
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
    pieContainer: {
        marginTop: 20,
        alignItems: 'center',
        backgroundColor: '#F9F9F9',
        padding: 10,
        borderRadius: 10,
    },
    pieTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 10,
        color: '#333',
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
    },
});

export default TransactionHistory;
