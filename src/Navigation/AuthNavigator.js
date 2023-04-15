import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";




import Loginscreen from '../RegScseens/Loginscreen'
import Signupscreen from '../RegScseens/Signupscreen'
const Stack = createNativeStackNavigator();





export default function AuthNavigator() {
  return <Stack.Navigator>
        <Stack.Screen name="login" component={Loginscreen} />
        <Stack.Screen name="signup" component={Signupscreen} />
    </Stack.Navigator>
  
}