import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { useRouter } from 'expo-router';

const BudgetScreen: React.FC = () => {
    const router = useRouter();
  const screenWidth = Dimensions.get('window').width;
  const chartWidth = screenWidth * 0.4;
  const chartHeight = 160;

  const personalBudgetData = [
    { name: 'Food', population: 2150, color: '#FF6384', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Transport', population: 1800, color: '#36A2EB', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Entertainment', population: 800, color: '#4BC0C0', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  ];

  const familyBudgetData = [
    { name: 'Utilities', population: 3200, color: '#9966FF', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Education', population: 2100, color: '#FF9F40', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Groceries', population: 1500, color: '#FFCD56', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  ];

  const Card = ({ 
    data, 
    currentSpend, 
    totalLimit 
  }: { 
    data: any[]; 
    currentSpend: number; 
    totalLimit: number 
  }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>Monthly Budget</Text>
        <Text style={styles.cardLink}>See All</Text>
      </View>

      <View style={styles.joined}>
        <View style={styles.spendingText}>
          <Text style={styles.text}>Monthly Spending Limit</Text>
          <Text>Spend: ${currentSpend.toLocaleString()} / ${totalLimit.toLocaleString()}</Text>
        </View>

        <View style={styles.chartWrapper}>
          <PieChart
            data={data}
            width={chartWidth}
            height={chartHeight}
            chartConfig={{
              backgroundColor: '#ffffff',
              backgroundGradientFrom: '#ffffff',
              backgroundGradientTo: '#ffffff',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: () => '#000000',
            }}
            accessor="population"
            backgroundColor="transparent"
            absolute
            paddingLeft="15"
          />
        </View>
      </View>

      <View style={styles.buttonRow}>
        <View style={styles.buttonItem}>
          <TouchableOpacity style={[styles.statusButton, { backgroundColor: '#FDFD96' }]} />
          <Text style={styles.buttonLabel}>Within</Text>
        </View>
        <View style={styles.buttonItem}>
          <TouchableOpacity style={[styles.statusButton, { backgroundColor: '#FFA500' }]} />
          <Text style={styles.buttonLabel}>Risk</Text>
        </View>
        <View style={styles.buttonItem}>
          <TouchableOpacity style={[styles.statusButton, { backgroundColor: '#77DD77' }]} />
          <Text style={styles.buttonLabel}>Overspending</Text>
        </View>
      </View>
    </View>
  );

  const DottedCard = () => (
    <TouchableOpacity style={styles.dottedCard} onPress={() => router.push('./transaction history')}>
      <View style={styles.addButton}>
        <Text style={styles.plusText}>+</Text>
      </View>
      <Text style={styles.addBudgetText}>Add Budget</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Top Tabs */}
      <View style={styles.header}>
        <Text>Active</Text>
        <Text>Closed</Text>
      </View>

      {/* Two Budget Cards with Different Data */}
      <Card 
        data={personalBudgetData} 
        currentSpend={4750} 
        totalLimit={6000} 
      />
      <Card 
        data={familyBudgetData} 
        currentSpend={6800} 
        totalLimit={8000} 
      />
      
      {/* Add Budget Card */}
      <DottedCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  cardLink: {
    color: '#007bff',
  },
  joined: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  spendingText: {
    flex: 1,
    marginRight: 10,
  },
  chartWrapper: {
    width: Dimensions.get('window').width * 0.4,
    height: 160,
    borderRadius: 16,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  buttonItem: {
    alignItems: 'center',
  },
  statusButton: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    minWidth: 40,
  },
  buttonLabel: {
    marginTop: 4,
    fontSize: 14,
    textAlign: 'center',
  },
  dottedCard: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#d3d3d3',
    borderStyle: 'dashed',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 160,
  },
  addButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#d3d3d3',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  plusText: {
    fontSize: 24,
    color: '#808080',
  },
  addBudgetText: {
    color: '#808080',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default BudgetScreen;