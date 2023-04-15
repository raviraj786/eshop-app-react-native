import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";


import AuthNavigator from "./src/Navigation/AuthNavigator";
import AppNavigator from "./src/Navigation/AppNavigator";



function Mainscreen() {
  return (
    <NavigationContainer>
      {/* <AuthNavigator /> */}
      <AppNavigator/>
    </NavigationContainer>
  );
}

export default Mainscreen;
