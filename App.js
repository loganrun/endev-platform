import React from 'react'
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainLayout } from './src/screens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={'Dashboard'}>

        <Stack.Screen name="Dashboard" component={MainLayout}/>

      </Stack.Navigator>
      <StatusBar style="auto"/>
    </NavigationContainer>
    
    
  );
}


