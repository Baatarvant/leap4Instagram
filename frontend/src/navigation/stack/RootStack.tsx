import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabNavigator } from '../tab';
import { GalleryScreen } from "../../screens";
import { GalleryHeaderRight, GalleryHeaderLeft } from "../../components";


export type RootStackParamList = {
  Main: undefined,
  Gallery: undefined
}

const RootStack = createNativeStackNavigator<RootStackParamList>();


export const RootStackNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen options={{ headerShown: false }} name="Main" component={BottomTabNavigator} />
      <RootStack.Group>
        <RootStack.Screen
          options={{
            headerRight: (props) => <GalleryHeaderRight {...props} />,
            headerLeft: (props) => <GalleryHeaderLeft {...props} />,
            headerTitleStyle: { fontWeight: 'bold' },
          }}
          name="Gallery"
          component={GalleryScreen}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  )
}