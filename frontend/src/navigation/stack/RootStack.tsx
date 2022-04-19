import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabNavigator } from '../tab';
import { GalleryScreen, StoryScreen } from "../../screens";
import { CreatePostScreen } from "../../screens/CreatePostScreen";
import { PhotoIdentifier } from "@react-native-community/cameraroll";

interface CreatePostScreenProps {
  images: PhotoIdentifier[];
}


export type RootStackParamList = {
  Main: undefined,
  Gallery: undefined,
  CreatePost: CreatePostScreenProps,
  ShowStory: undefined;
}

const RootStack = createNativeStackNavigator<RootStackParamList>();


export const RootStackNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen options={{ headerShown: false }} name="Main" component={BottomTabNavigator} />
      <RootStack.Group screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name="Gallery"
          component={GalleryScreen}
        />
        <RootStack.Screen
          name="CreatePost"
          component={CreatePostScreen}
        />
        <RootStack.Screen
          name="ShowStory"
          component={StoryScreen}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  )
}