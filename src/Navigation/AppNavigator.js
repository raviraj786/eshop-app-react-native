import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SideDrawer from './SideDrawer';
import ProductDetail from '../MainSrc/ProductDetail';



const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return <Stack.Navigator  
  screenOptions={{
    headerShown: false
  }}
  >
  <Stack.Screen name="SideDrawer" component={SideDrawer} />
  <Stack.Screen name="Product" component={ProductDetail} />
  
</Stack.Navigator>
}