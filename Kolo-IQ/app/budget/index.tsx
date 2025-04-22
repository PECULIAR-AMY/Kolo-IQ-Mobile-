import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const BudgetScreen: React.FC = () => {
  const chartWidth = Dimensions.get('window').width - 32;
  const chartHeight = 220;

  const pieChartData = [
    {
      name: 'Food',
      population: 2150,
      color: '#FF6384',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Transport',
      population: 2800,
      color: '#36A2EB',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Shopping',
      population: 1000,
      color: '#FFCE56',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text>Active</Text>
        <Text>Closed</Text>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        {/* Budget Section Header */}
        <View style={styles.budgetHeader}>
          <Text>Monthly Budget</Text>
          <Text>See All</Text>
        </View>

        {/* Spending Overview */}
        <View style={styles.spendingContainer}>
          {/* Spending Text */}
          <View style={styles.spendingText}>
            <Text style={styles.text}>Monthly Spending Limit</Text>
            <Text>Spend: $3,050 / $5,000</Text>
          </View>

          {/* Pie Chart */}
          <View style={styles.chartWrapper}>
            <PieChart
              data={pieChartData}
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  budgetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  spendingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  spendingText: {
    flex: 1,
    marginRight: 20,
  },
  chartWrapper: {
    width: Dimensions.get('window').width - 32,
    height: 220,
    backgroundColor: '#f0f0f0',
    borderRadius: 16,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default BudgetScreen;
