import React from 'react';
import {useRouter } from 'expo-router';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';




const screenWidth = Dimensions.get('window').width;

const FullBalance: React.FC = () => {
     const router = useRouter();
  const pieData = [
    {
      name: 'Food',
      percentage: 40,
      color: '#4A90E2',
      legendFontColor: '#333',
      legendFontSize: 12,
    },
    {
      name: 'Transport',
      percentage: 30,
      color: '#50E3C2',
      legendFontColor: '#333',
      legendFontSize: 12,
    },
    {
      name: 'Shopping',
      percentage: 20,
      color: '#F5A623',
      legendFontColor: '#333',
      legendFontSize: 12,
    },
    {
      name: 'Others',
      percentage: 10,
      color: '#D0021B',
      legendFontColor: '#333',
      legendFontSize: 12,
    },
  ];

  // Dummy list of icons
  const iconsList = [
    'food', 'car', 'cart', 'bank', 'cash',
    'credit-card', 'gift', 'home', 'wallet',
    'shopping', 'bus', 'airplane', 'train',
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.balanceText}>$2408.45</Text>

      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Well done! 🎉</Text>
          <Text style={styles.cardSubtitle}>Your spending reduced by 2% last month</Text>
          <Text style={styles.viewDetails}>View details →</Text>
        </View>

        <View style={styles.chartWrapper}>
          <PieChart
            data={pieData}
            width={screenWidth * 0.4}
            height={150}
            chartConfig={{
              backgroundColor: '#FFFFFF',
              backgroundGradientFrom: '#FFFFFF',
              backgroundGradientTo: '#FFFFFF',
              color: (opacity = 1) => `rgba(74, 144, 226, ${opacity})`,
            }}
            accessor="percentage"
            backgroundColor="transparent"
            paddingLeft="15"
            center={[10, 0]}
            hasLegend={false}
          />
        </View>
      </View>

      {/* Mini Cards Section */}
      <View style={styles.miniCardContainer}>
        <View style={styles.miniCard}>
          <View style={styles.iconWrapper}>
            <Icon name="wallet" size={24} color="#4A90E2" />
          </View>
          <Text style={styles.miniCardTitle}>Wallet</Text>
          <Text style={styles.miniCardSubtitle}>$1024.00</Text>
        </View>

        <View style={styles.miniCard}>
          <View style={styles.iconWrapper}>
            <Icon name="bank" size={24} color="#4A90E2" />
          </View>
          <Text style={styles.miniCardTitle}>Bank</Text>
          <Text style={styles.miniCardSubtitle}>$1384.45</Text>
        </View>

        <View style={styles.miniCard}>
          <View style={styles.iconWrapper}>
            <Icon name="credit-card" size={24} color="#4A90E2" />
          </View>
          <Text style={styles.miniCardTitle}>Card</Text>
          <Text style={styles.miniCardSubtitle}>$500.00</Text>
        </View>
      </View>

      {/* New Card with 13 Icons */}
      <View style={styles.iconCard}>
        <View style={styles.iconRow}>
          {iconsList.slice(0, 5).map((iconName, index) => (
            <View key={index} style={styles.iconItem}>
              <Icon name={iconName} size={24} color="#4A90E2" />
            </View>
          ))}
        </View>

        <Text style={styles.transactionText}>History</Text>
        <View style={styles.separator} />

        <View style={styles.iconRow}>
          {iconsList.slice(5, 9).map((iconName, index) => (
            <View key={index} style={styles.iconItem}>
              <Icon name={iconName} size={24} color="white" />
            </View>
          ))}
        </View>

        <View style={styles.iconRow}>
          {iconsList.slice(9).map((iconName, index) => (
            <View key={index} style={styles.iconItem}>
              <Icon name={iconName} size={24} color="#4A90E2" />
            </View>
          ))}
        </View>
      </View>

      {/* Small Card: Transaction History and See All */}
      <View style={styles.transactionCard}>
        <View style={styles.transactionHeader}>
          <Text style={styles.transactionTitle}>Transaction History</Text>
          <Text style={styles.seeAll}>See All</Text>
        </View>

        {/* Small Card with 4 icons and elevated plus icon */}
        <View style={styles.smallIconCard}>
          {/* Icons at bottom */}
          <View style={styles.iconRowSmall}>
            <Icon name="cart" size={28} color="#4A90E2" />
            <Icon name="bank" size={28} color="#4A90E2" />
            <Icon name="wallet" size={28} color="#4A90E2" />
            <Icon name="credit-card" size={28} color="#4A90E2" />
          </View>

          {/* Plus icon elevated */}
          <TouchableOpacity onPress={() => router.push('./profile')}>
          <View style={styles.plusIconWrapper}>
            <Icon name="plus-circle" size={50} color="#4A90E2" />
          </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  balanceText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1C1C1E',
    textAlign: 'left',
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: '#F9F9F9',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  card: {
    flex: 1,
    paddingRight: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 5,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  viewDetails: {
    fontSize: 14,
    color: '#4A90E2',
    fontWeight: '600',
  },
  chartWrapper: {
    width: '40%',
    alignItems: 'center',
  },
  miniCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  miniCard: {
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 10,
    flex: 1,
    marginHorizontal: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  iconWrapper: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 50,
    marginBottom: 8,
  },
  miniCardTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  miniCardSubtitle: {
    fontSize: 12,
    color: '#777',
    marginTop: 2,
  },
  iconCard: {
    backgroundColor: 'black',
    borderRadius: 16,
    padding: 16,
    marginTop: 20,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  iconItem: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 4,
  },
  separator: {
    height: 1,
    backgroundColor: '#DDD',
    marginVertical: 10,
  },
  transactionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
    textAlign: 'left',
  },
  transactionCard: {
    backgroundColor: '#F9F9F9',
    borderRadius: 16,
    padding: 16,
    marginTop: 20,
  },
  transactionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  transactionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1C1C1E',
  },
  seeAll: {
    fontSize: 14,
    color: '#4A90E2',
    fontWeight: '600',
  },
  smallIconCard: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 20,
    marginTop: 10,
    position: 'relative',
    alignItems: 'center',
  },
  iconRowSmall: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  plusIconWrapper: {
    position: 'absolute',
    top: -25,
    backgroundColor: '#FFF',
    borderRadius: 50,
    padding: 2,
  },
});

export default FullBalance;
