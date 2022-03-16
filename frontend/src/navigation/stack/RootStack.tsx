import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabNavigator } from '../tab';
import { GalleryScreen } from "../../screens";


export type RootStackParamList = {
  Main: undefined,
  Gallery: undefined
}

const RootStack = createNativeStackNavigator<RootStackParamList>();


export const RootStackNavigator = () => {
  return <RootStack.Navigator screenOptions={{ headerShown: false }}>
    <RootStack.Screen name="Main" component={BottomTabNavigator} />
    <RootStack.Group>
      <RootStack.Screen name="Gallery" component={GalleryScreen} />
    </RootStack.Group>
  </RootStack.Navigator>
}