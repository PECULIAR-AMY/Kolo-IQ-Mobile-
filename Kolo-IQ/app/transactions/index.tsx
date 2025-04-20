import React, { useState, useMemo } from 'react';
import { View, FlatList, Text, StyleSheet, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import SearchBar from '../searchbar';

interface Transaction {
  id: string;
  description: string;
  amount: number;
  date: string;
  type: 'credit' | 'debit';
  category: 'shopping' | 'food' | 'grocery' | 'health' | 'taxi' | 'travel';
}

type TimeFrame = 'daily' | 'weekly' | 'monthly' | 'yearly';

// Proper type for chart data according to react-native-chart-kit
interface ChartData {
  labels: string[];
  datasets: {
    data: number[];
  }[];
}

const TransactionScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [timeFrame, setTimeFrame] = useState<TimeFrame>('monthly');

  const [transactions] = useState<Transaction[]>([
    {
      id: '1',
      description: 'Grocery Shopping',
      amount: -120.75,
      date: '2023-08-15',
      type: 'debit',
      category: 'grocery'
    },
    {
      id: '2',
      description: 'Restaurant Visit',
      amount: -45.50,
      date: '2023-08-12',
      type: 'debit',
      category: 'food'
    },
    {
      id: '3',
      description: 'Taxi Ride',
      amount: -25.30,
      date: '2023-08-12',
      type: 'debit',
      category: 'taxi'
    },
    {
        id: '4',
        description: 'Health',
        amount: -25.30,
        date: '2023-08-12',
        type: 'debit',
        category: 'taxi'
    },
    
    {
        id: '5',
        description: 'Health',
        amount: -25.30,
        date: '2023-08-12',
        type: 'debit',
        category: 'taxi'
    },

    {
        id: '6',
        description: 'Food',
        amount: -25.30,
        date: '2023-08-12',
        type: 'debit',
        category: 'taxi'
    },


  ]);

  const filterTransactionsByTimeFrame = (date: string): boolean => {
    const transactionDate = new Date(date);
    const now = new Date();
    const timeDiff = now.getTime() - transactionDate.getTime();
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    switch(timeFrame) {
      case 'daily': return diffDays <= 1;
      case 'weekly': return diffDays <= 7;
      case 'monthly': return transactionDate.getMonth() === now.getMonth();
      case 'yearly': return transactionDate.getFullYear() === now.getFullYear();
      default: return true;
    }
  };

  const chartData: ChartData = useMemo(() => {
    const categories = ['shopping', 'food', 'grocery', 'health', 'taxi', 'travel'];
    
    const data = categories.map(category => 
      transactions
        .filter(t => 
          t.category === category && 
          t.type === 'debit' &&
          filterTransactionsByTimeFrame(t.date)
        )
        .reduce((sum, t) => sum + Math.abs(t.amount), 0)
    );

    return {
      labels: categories.map(c => c.charAt(0).toUpperCase() + c.slice(1)),
      datasets: [{ data }]
    };
  }, [transactions, timeFrame]);

  const filteredTransactions = useMemo(() => 
    searchTerm 
      ? transactions.filter(t =>
          t.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          t.date.includes(searchTerm) ||
          t.amount.toString().includes(searchTerm)
        )
      : transactions,
  [transactions, searchTerm]);

  const renderTransactionItem = ({ item }: { item: Transaction }) => (
    <View style={styles.transactionItem}>
      <View style={styles.transactionInfo}>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <Text style={[styles.amount, item.type === 'credit' ? styles.credit : styles.debit]}>
        {item.type === 'credit' ? '+' : '-'}${Math.abs(item.amount).toFixed(2)}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <SearchBar
        onSearch={setSearchTerm}
        placeholder="Super AI search"
        containerStyle={styles.searchBarContainer}
        inputStyle={styles.searchInput}
        iconColor="#4A90E2"
      />

      <View style={styles.chartContainer}>
        <BarChart
          data={chartData}
          width={Dimensions.get('window').width - 32}
          height={220}
          yAxisLabel="$"
          yAxisSuffix=""
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: { borderRadius: 16 },
            barPercentage: 0.5,
            propsForLabels: { fontSize: 12 },
            propsForBackgroundLines: { strokeWidth: 0 },
          }}
          verticalLabelRotation={0}
          fromZero
          showBarTops={false}
          style={styles.chart}
        />

        <View style={styles.timeFrameContainer}>
          {(['daily', 'weekly', 'monthly', 'yearly'] as TimeFrame[]).map((frame) => (
            <Text
              key={frame}
              style={[
                styles.timeFrameButton,
                timeFrame === frame && styles.selectedTimeFrame
              ]}
              onPress={() => setTimeFrame(frame)}>
              {frame.charAt(0).toUpperCase() + frame.slice(1)}
            </Text>
          ))}
        </View>
      </View>

      <FlatList
        data={filteredTransactions}
        renderItem={renderTransactionItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={styles.emptyText}>No transactions found</Text>}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  chartContainer: {
    margin: 16,
    borderRadius: 16,
    backgroundColor: '#FFF',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  timeFrameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
  },
  timeFrameButton: {
    padding: 8,
    borderRadius: 8,
    color: '#666',
    fontSize: 14,
  },
  selectedTimeFrame: {
    backgroundColor: '#4A90E2',
    color: 'white',
    fontWeight: 'bold',
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
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  transactionInfo: {
    flex: 1,
    marginRight: 16,
  },
  description: {
    fontSize: 16,
    color: '#1C1C1E',
    marginBottom: 4,
  },
  date: {
    fontSize: 14,
    color: '#8E8E93',
  },
  amount: {
    fontSize: 16,
    fontWeight: '500',
  },
  credit: {
    color: '#34C759',
  },
  debit: {
    color: '#FF3B30',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 32,
    color: '#8E8E93',
  },
  listContent: {
    paddingBottom: 16,
  },
});

export default TransactionScreen;