import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabNavigator } from '../tab';

const RootStack = createNativeStackNavigator();

export const RootStackNavigator = () => {
  return <RootStack.Navigator screenOptions={{ headerShown: false }}>
    <RootStack.Screen name="Main" component={BottomTabNavigator} />
  </RootStack.Navigator>
}