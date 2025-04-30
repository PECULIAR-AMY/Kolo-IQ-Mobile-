import React from 'react';
import { useRouter } from 'expo-router';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const BalancedCard: React.FC = () => {
  const router = useRouter();

  const handlePress = () => {
    console.log('Button pressed');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Balanced Card</Text>
      <Text style={styles.label}>Balance</Text>
      <Text style={styles.balance}>$90,890</Text>

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Already Added</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Currency</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Statistics</Text>
        <View style={styles.divider} />
        <View style={styles.cardRow}>
          {[
            { label: 'USD', value: '98' },
            { label: 'EUR', value: '89' },
            { label: 'GBP', value: '93' },
          ].map(({ label, value }) => (
            <View style={styles.cardItemContainer} key={label}>
              <Text style={styles.cardItem}>{label}</Text>
              <Text style={styles.cardSubtext}>{value}</Text>
            </View>
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Statistics</Text>

        <View style={styles.timeFilters}>
          {['Daily', 'Weekly', 'Monthly', 'Yearly'].map((label) => (
            <TouchableOpacity
              key={label}
              onPress={() => router.push('./statistics')}
            >
              <Text
                style={[
                  styles.filterText,
                  label === 'Weekly' && styles.activeFilter,
                ]}
              >
                {label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <BarChart
  data={{
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [{ data: [40, 60, 30, 80, 50] }],
  }}
  width={screenWidth - 40}
  height={220}
  yAxisLabel="$"
  yAxisSuffix=""  // <-- ADD THIS
  chartConfig={{
    backgroundColor: '#fff',
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 102, 204, ${opacity})`,
    labelColor: () => '#555',
  }}
  style={styles.chart}
/>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9fbfd',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#003366',
  },
  label: {
    fontSize: 16,
    color: '#444',
    marginBottom: 4,
  },
  balance: {
    fontSize: 28,
    fontWeight: '600',
    color: '#0066cc',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#6c757d',
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 16,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 12,
    color: '#333',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    marginTop: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#222',
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginBottom: 16,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  cardItemContainer: {
    alignItems: 'center',
  },
  cardItem: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0077b6',
  },
  cardSubtext: {
    fontSize: 13,
    color: '#888',
    marginTop: 4,
  },
  timeFilters: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
    marginTop: 8,
  },
  filterText: {
    fontSize: 14,
    color: '#555',
  },
  activeFilter: {
    textDecorationLine: 'underline',
    color: '#0066cc',
    fontWeight: '600',
  },
  chart: {
    marginTop: 8,
    borderRadius: 10,
  },
});

export default BalancedCard;
