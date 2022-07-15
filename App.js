import React from 'react'
// import { Easing } from 'react-native';

import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
//import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MainLayout, CourseListing } from './src/screens';

const Stack = createSharedElementStackNavigator();
const options={
  gestureEnabled: false,
  // transitionSpec: {
  //   open: {
  //   Animation: 'timing',
  //   config: {duration: 400, easing: Easing.inOut(Easing.case)}
  //   },
  //   close: {
  //     Animation: 'timing',
  //     config: {duration: 400, easing: Easing.inOut(Easing.case)}
  //     }
  // },
  cardStyleInterpolator: ({current: {progress}})=>{
    return{
      cardStyle:{
        opacity:progress
      }
    }
  }

}

export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{useNativeDriver: true,headerShown: false}} 
      initialRouteName={'Dashboard'}
      detachInactiveScreens={false} >

        <Stack.Screen name="Dashboard" component={MainLayout}/>
        <Stack.Screen name="CourseListing" component={CourseListing}
        options={()=> options}
        />

      </Stack.Navigator>
      <StatusBar style="auto"/>
    </NavigationContainer>
  
    
    
  );
}


