import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import BusinessDetailScreen from '../Screens/BusinessDetailScreens/BusinessDetailScreen';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';
import Profile from '../Screens/ProfileScreen/Profile';
import Home from '../Screens/HomeScreen/Home';
const Stack = createStackNavigator();
export default function ProfileNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Profile' component={Profile}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='booking' component={BookingScreen}/>
        <Stack.Screen name='BusinessDetails' component={BusinessDetailScreen}/>
    </Stack.Navigator>
  )
}