import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTabNavigator } from "../tab";
import { CommentScreen } from "../../screens";

const RootStack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  Main: undefined;
  Comment: undefined;
};

export const RootStackNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Main" component={BottomTabNavigator} />
      <RootStack.Group>
        <RootStack.Screen name="Comment" component={CommentScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};
