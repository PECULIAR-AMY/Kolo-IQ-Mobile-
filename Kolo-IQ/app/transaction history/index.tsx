import React, { useState } from 'react'; // Added useState import
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../searchbar';

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


            <View style = {styles.all}>
                <Text>All</Text>
                <Text>Spending</Text>
                <Text>Income</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    searchBarContainer: {
        margin: 16,
        backgroundColor: '#F5F5F7',
        borderRadius: 10,
    },
    searchInput: {
        fontSize: 16,
        color: '#1C1C1E',
    },

    all: {
        flexDirection:'row',
        justifyContent: 'space-between'
    }
});

export default TransactionHistory;