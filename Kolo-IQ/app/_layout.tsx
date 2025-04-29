import { Stack } from "expo-router";
import React from 'react';

const RootLayout: React.FC = () => {
  return (
    <Stack 
      screenOptions={{
        headerStyle: {
          backgroundColor: 'blue'
        },
        headerTintColor: 'white',
        headerTitleStyle:{
          fontSize: 20,
          fontWeight:'bold'
        },
        contentStyle:{
          paddingHorizontal:10,
          paddingTop:10,
          backgroundColor: 'ffffff'
        }
      }}>

        <Stack.Screen name='index' options={{title:'Home'}}/>
        <Stack.Screen name='signup' options={{headerTitle:'Signup'}}/>

      </Stack>
  );
}

export default RootLayout;