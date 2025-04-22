import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const BudgetScreen = () => {
  const chartWidth = Dimensions.get('window').width - 32;
  const chartHeight = 220;

  const data = [
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
  ];

  return (
    <View style={styles.container}>
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
          labelColor: () => `#000000`,
        }}
        // REQUIRED PROPS TO FIX THE ERROR
        paddingLeft={15} 
        paddingRight={15}
        paddingTop={15}
        paddingBottom={15}
        accessor="population"
        backgroundColor="transparent"
        absolute
        hasLegend
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default BudgetScreen;