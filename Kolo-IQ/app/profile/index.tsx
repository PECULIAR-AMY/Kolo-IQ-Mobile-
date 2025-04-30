import React from 'react'
import {useRouter} from 'expo-router'
import { View, StyleSheet, Text, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { BarChart } from 'react-native-chart-kit'
import SearchBar from '../searchbar'

const screenWidth = Dimensions.get('window').width

const Profile: React.FC = () => {
    const router = useRouter();
  const handleSearch = (query: string) => {
    console.log('User searched:', query)
  }

  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 50],
      },
    ],
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.profileSection}>
          <Image
            source={{ uri: 'https://via.placeholder.com/40' }}
            style={styles.profileImage}
          />
          <Text style={styles.userName}>Zainab</Text>
        </View>
        <View style={styles.iconSection}>
          <Icon name="bell-outline" size={24} color="#333" style={styles.icon} />
          <Icon name="cone" size={24} color="#333" />
        </View>
      </View>

      <View style={styles.search}>
        <SearchBar  
          placeholder="AI search" 
          onSearch={handleSearch}
        />
      </View>

      {/* Bar Chart Section */}
      <View style={styles.chartCard}>
        <View style={styles.timeFilters}>
          {['Daily', 'Weekly', 'Monthly', 'Yearly'].map((label, index) => (
            <Text
              key={index}
              style={[
                styles.timeText,
                label === 'Weekly' && styles.underlinedText,
              ]}
            >
              {label}
            </Text>
          ))}
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
  yAxisSuffix=""
  chartConfig={{
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 102, 204, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(85, 85, 85, ${opacity})`,
  }}
  style={styles.chart}
/>


              {/* Flexed Card  */}
      <View style={styles.cardRow}>
        <View style={styles.card}>
          <View style={styles.iconBox}>
            <Icon name="account" size={24} color="#333" />
          </View>
          <Text style={styles.cardText}>Profile Views</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.iconBox}>
            <Icon name="heart-outline" size={24} color="#333" />
          </View>
          <Text style={styles.cardText}>Likes</Text>
        </View>
      </View>
  
   <Text>Balance</Text>
   <Text> $34056</Text>

         {/* Horizontal Info Cards */}
         <View style={styles.infoCardWrapper}>
        <View style={styles.infoCard}>
          <View style={styles.infoLeft}>
            <Icon name="message-outline" size={24} color="#333" style={styles.infoIcon} />
            <Text style={styles.infoLabel}>New</Text>
          </View>
          <Text style={styles.infoValue}>$7657</Text>
        </View>

        <View style={styles.infoCard}>
          <View style={styles.infoLeft}>
            <Icon name="account-multiple-outline" size={24} color="#333" style={styles.infoIcon} />
            <Text style={styles.infoLabel}>New</Text>
          </View>
          <Text style={styles.infoValue}>$2356</Text>
        </View>
      </View>

            {/* Icon Row Card with Center + Button */}
            <View style={styles.iconRowCard}>
        <Icon name="camera-outline" size={26} color="#fff" style={styles.iconItem} />
        <Icon name="email-outline" size={26} color="#fff" style={styles.iconItem} />
         
         <TouchableOpacity onPress={() => router.push('/balancecard')}>  
        <View style={styles.plusIconContainer}>
          <Icon name="plus" size={26} color="#fff" />
        </View>
         </TouchableOpacity>

        <Icon name="calendar-month-outline" size={26} color="#fff" style={styles.iconItem} />
        <Icon name="bookmark-outline" size={26} color="#fff" style={styles.iconItem} />
      </View>


      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  iconSection: {
    flexDirection: 'row',
    gap: 12,
  },
  icon: {
    marginRight: 10,
  },
  search: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  chartCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  timeFilters: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  timeText: {
    fontSize: 14,
    color: '#555',
  },
  underlinedText: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  barChart: {
    borderRadius: 10,
  },

  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    gap: 30,
  },
  card: {
    flex: 1,
    backgroundColor: 'grey',
    borderRadius: 10,
    padding: 12,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 10
  },
  iconBox: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 8,
    marginBottom: 6,
  },
  cardText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },

  infoCardWrapper: {
    marginTop: 20,
    gap: 15,
  },
  infoCard: {
    backgroundColor: '#f2f2f2',
    padding: 12,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoIcon: {
    marginRight: 8,
  },
  infoLabel: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  infoValue: {
    fontSize: 14,
    color: '#444',
    fontWeight: '600',
  },
  
  iconRowCard: {
    backgroundColor: '#007bff',
    borderRadius: 12,
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 25,
  },
  iconItem: {
    padding: 8,
  },
  plusIconContainer: {
    backgroundColor: '#0056b3',
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  chart: {
    marginTop: 8,
    borderRadius: 10,
  },


})

export default Profile
