import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ExploreScreen, HomeScreen, MarketScreen, ProfileScreen, ReelsScreen } from '../../screens';
import { Logo } from "../../assets/icons";

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
    return <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{
            headerLeft: props => <Logo {...props} />
        }} />
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Reels" component={ReelsScreen} />
        <Tab.Screen name="Market" component={MarketScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
}