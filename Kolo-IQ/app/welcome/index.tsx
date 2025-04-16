import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Dimensions, ListRenderItemInfo } from 'react-native';

const { width } = Dimensions.get('window');
const cardSize = (width - 50) / 3; // Adjusted for proper spacing calculation

interface CardItem {
  id: number;
  image: string;
  title: string;
}

const CardGrid: React.FC = () => {
  // Sample data array
  const cardData: CardItem[] = [
    { id: 1, image: 'https://picsum.photos/200/300', title: 'Card 1' },
    { id: 2, image: 'https://picsum.photos/201/300', title: 'Card 2' },
    { id: 3, image: 'https://picsum.photos/202/300', title: 'Card 3' },
    { id: 4, image: 'https://picsum.photos/203/300', title: 'Card 4' },
    { id: 5, image: 'https://picsum.photos/204/300', title: 'Card 5' },
    { id: 6, image: 'https://picsum.photos/205/300', title: 'Card 6' },
  ];

  const renderCard = ({ item }: ListRenderItemInfo<CardItem>) => (
    <View style={styles.card}>
      <Image 
        source={{ uri: item.image }} 
        style={styles.image}
      />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cardData}
        renderItem={renderCard}
        keyExtractor={item => item.id.toString()}
        numColumns={3}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  grid: {
    justifyContent: 'center',
  },
  card: {
    width: cardSize,
    height: cardSize + 40,
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    padding: 8,
  },
  image: {
    width: '100%',
    height: cardSize - 20,
    borderRadius: 4,
    resizeMode: 'cover',
  },
  title: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 12,
    fontWeight: '500',
  },
});

export default CardGrid;