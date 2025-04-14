// app/index.tsx
import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const HomeScreen: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/images/Simple Minimalist Creative Studio Logo.png')} 
        style={styles.image}
      />
      <Text style={styles.budget}>Budget Smarter.</Text>
      <Text style={styles.kolo}>
        Kolo-IQ is your go-to app to keep you financially stable and intelligent, 
        helping you take charge of your finances with great suggestions along the way.
      </Text>
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => router.push("/signup/index")} // ✅ make sure app/login.tsx exists
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.buttonOutline} 
        onPress={() => router.push("/signup/index")}
      >
        <Text style={styles.buttonOutlineText}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  image: {
    height: 200,
    width: 200,
    marginBottom: 40,
    resizeMode: 'contain',
  },
  budget: {
    marginBottom: 20,
    color: '#1E90FF',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  kolo: {
    marginBottom: 40,
    color: '#333',
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#1E90FF',
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonOutline: {
    backgroundColor: '#fff',
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#1E90FF',
  },
  buttonOutlineText: {
    color: '#1E90FF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
