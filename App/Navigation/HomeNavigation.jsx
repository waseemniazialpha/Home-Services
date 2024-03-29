import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/HomeScreen/Home';
import BusinessListByCategoryScreen from '../Screens/BusinessListByCategory/BusinessListByCategoryScreen';
import BusinessDetailScreen from '../Screens/BusinessDetailScreens/BusinessDetailScreen';
const Stack = createStackNavigator();
export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='BusinessList' component={BusinessListByCategoryScreen}/>
        <Stack.Screen name='BusinessDetails' component={BusinessDetailScreen}/>
    </Stack.Navigator>
  )
}