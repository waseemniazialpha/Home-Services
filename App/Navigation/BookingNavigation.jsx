import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import BusinessDetailScreen from '../Screens/BusinessDetailScreens/BusinessDetailScreen';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';
const Stack = createStackNavigator();
export default function BookingNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='booking' component={BookingScreen}/>
        <Stack.Screen name='BusinessDetails' component={BusinessDetailScreen}/>
    </Stack.Navigator>
  )
}