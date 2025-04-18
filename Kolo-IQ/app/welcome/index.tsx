import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Dimensions, ListRenderItemInfo } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');
const cardSize = (width - 150) / 2;

interface CardItem {
  id: number;
  icon: string;
  title: string;
  subtitle: string;
}

const CardGrid: React.FC = () => {
    const cardData: CardItem[] = [
        { id: 1, icon: 'apps', title:'profile', subtitle:'Login, authenticate'},
        { id: 2, icon: 'dots-vertical', title:'Appearance', subtitle:'widgets,themes' },
        { id: 3, icon: 'cog-outline', title:'General', subtitle:'Currency, clear data and more'},
        { id: 4, icon: 'account-cog', title:'Settings', subtitle:'Account settings,alerts and notifications'},
        { id: 5, icon: 'database-export', title:'Data', subtitle:'Data management,export and import fortune'},
        { id: 6, icon: 'lock-outline', title:'Privacy', subtitle:'Password management, privacy performance'},
      ];

  const renderCard = ({ item }: ListRenderItemInfo<CardItem>) => (
    <View style={styles.card}>
      <Icon 
        name={item.icon} 
        size={40} 
        color="#6200ee" 
        style={styles.icon}
      />
      <Text style={styles.text}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cardData}
        renderItem={renderCard}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.grid}
      />

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomBar}>
        <Icon name="home" size={26} color="white" />
        <Icon name="chart-bar" size={26} color="white" />
        <Icon name="wallet" size={26} color="white" />
        <Icon name="cog" size={26} color="white" />
      </View>

      {/* Centered Plus Button */}
      <View style={styles.plusButton}>
        <Icon name="plus" size={32} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
  },
  grid: {
    justifyContent: 'center',
    paddingBottom: 100, // Add space for bottom navigation
  },
  card: {
    marginHorizontal: 20,
    width: cardSize + 20,
    height: cardSize + 30,
    backgroundColor: 'black',
    margin: 5,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    padding: 4,
  },
  icon: {
    margin: 10,
    marginBottom: 15,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 4,
  },
  text: {
    color: 'white',
    fontSize: 16,
    marginBottom: 4,
  },
  subtitle: {
    color: 'gray',
    fontSize: 12,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#1a1a1a',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  plusButton: {
    position: 'absolute',
    bottom: 30,
    left: '50%',
    backgroundColor: '#6200ee',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ translateX: -30 }],
    elevation: 5,
    zIndex: 1,
  },
});

export default CardGrid;