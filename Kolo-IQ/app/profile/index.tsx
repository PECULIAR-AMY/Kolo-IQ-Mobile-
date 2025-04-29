import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import SearchBar from '../searchbar'

const Profile: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log('User searched:', query)
    
  }

  return (
    <View style={styles.container}>
      <SearchBar 
        placeholder="AI search" 
        onSearch={handleSearch}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  }
})

export default Profile
