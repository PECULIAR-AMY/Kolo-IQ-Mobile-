import React from 'react';
import { Text, View, StyleSheet, Image  } from 'react-native';
import ImageLogo from '../assets/images/Simple Minimalist Creative Studio Logo.png'
const HomeScreen: React.FC= () => {
  return (
    <View style={styles.container}>
      <Image source={ImageLogo} />
      <Text>Budget Smarter.</Text>
    </View>
  );
};

// No need for `as ViewStyle` — TypeScript infers this automatically.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;