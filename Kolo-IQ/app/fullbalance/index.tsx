import React from 'react'
import { View, StyleSheet, Text} from 'react-native'

const FullBalance: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>2408.45</Text>

      <View style={styles.card}>

      </View>
    </View>
  )
}



const styles= StyleSheet.create({
container:{
    flex: 1,
    padding: 20
},
 card: {
    flexDirection: 'row',
        backgroundColor: '#F0F0F0',
        borderRadius: 10,
        marginTop: 20,
        padding: 10,
 }

})

export default FullBalance;
