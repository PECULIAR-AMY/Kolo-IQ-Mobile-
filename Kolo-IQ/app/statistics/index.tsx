import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import { BarChart } from 'react-native-chart-kit'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SearchBar from '../searchbar'

const screenWidth = Dimensions.get('window').width

const Statistics: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log('Searching for:', query)
  }

  const weeklyChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  }

  const coloredChartData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        data: [30, 70, 50, 90],
        colors: [
          (opacity = 1) => `rgba(255, 99, 132, ${opacity})`,
          (opacity = 1) => `rgba(54, 162, 235, ${opacity})`,
          (opacity = 1) => `rgba(255, 206, 86, ${opacity})`,
          (opacity = 1) => `rgba(75, 192, 192, ${opacity})`,
        ],
      },
    ],
  }

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.search}>
        <SearchBar
          placeholder="Search with AI..."
          onSearch={handleSearch}
        />
      </View>

      {/* Weekly Chart Card */}
      <View style={styles.card}>
        <View style={styles.tabs}>
          <Text style={styles.tab}>Daily</Text>
          <Text style={[styles.tab, styles.activeTab]}>Weekly</Text>
          <Text style={styles.tab}>Monthly</Text>
          <Text style={styles.tab}>Yearly</Text>
        </View>

        <BarChart
  data={{
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [{ data: [40, 60, 30, 80, 50] }],
  }}
  width={screenWidth - 60}
  height={220}
  fromZero={true}
  yAxisLabel=""
  yAxisSuffix="" // 👈 Required props even if empty
  chartConfig={{
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 102, 204, ${opacity})`,
    labelColor: () => '#555',
  }}
  style={{
    marginTop: 8,
    borderRadius: 10,
  }}
/>

      </View>

      {/* Icon Card 1 */}
      <View style={styles.iconCard}>
        <Ionicons name="wallet-outline" size={28} color="#0066cc" />
        <View style={styles.iconCardTextContainer}>
          <Text style={styles.iconCardTitle}>Wallet Summary</Text>
          <Text style={styles.iconCardSubtitle}>Total balance info</Text>
        </View>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="chevron-forward" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Icon Card 2 */}
      <View style={styles.iconCard}>
        <Ionicons name="stats-chart-outline" size={28} color="#28a745" />
        <View style={styles.iconCardTextContainer}>
          <Text style={styles.iconCardTitle}>Performance</Text>
          <Text style={styles.iconCardSubtitle}>Weekly report insights</Text>
        </View>
        <TouchableOpacity style={[styles.iconButton, { backgroundColor: '#28a745' }]}>
          <Ionicons name="chevron-forward" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Colored Bar Chart Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Quarterly Overview</Text>
        <BarChart
  data={{
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        data: [40, 60, 30, 80, 50],
        colors: [
          () => '#0044cc',
          () => '#0055ee',
          () => '#0066ff',
          () => '#0077dd',
          () => '#0088bb'
        ]
      },
    ],
  }}
  width={screenWidth - 60}
  height={220}
  fromZero={true}
  withInnerLines={false}
  showBarTops={false}
  flatColor={true}
  verticalLabelRotation={0}
  yAxisLabel=""
  yAxisSuffix="%" // or "$", or whatever makes sense in your chart
  chartConfig={{
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 102, 204, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  }}
  style={styles.chart}
/>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 10,
    backgroundColor: '#f0f4f8',
  },
  search: {
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
  },
  tab: {
    fontSize: 14,
    color: '#333',
  },
  activeTab: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    color: '#003366',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  iconCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
  },
  iconCardTextContainer: {
    flex: 1,
    marginLeft: 12,
  },
  iconCardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  iconCardSubtitle: {
    fontSize: 13,
    color: '#777',
    marginTop: 2,
  },
  iconButton: {
    backgroundColor: '#0066cc',
    padding: 8,
    borderRadius: 20,
  },

  chart: {
    marginTop: 8,
    borderRadius: 10,
  },
})

export default Statistics
