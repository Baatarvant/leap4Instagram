import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ExploreScreen, HomeScreen, MarketScreen, ProfileScreen, ReelsScreen } from '../../screens';
import { HomeHeaderRight, HomeHeaderTitle, ProfileHeaderRight, ProfileHeaderTitle } from "../../components";
import { HomeIcon, MarketIcon, ProfileIcon, ReelsIcon, SearchIcon } from "../../assets/icons";
import { TouchableOpacity, View } from "react-native";

const Tab = createBottomTabNavigator();




export const BottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerTitleAlign: 'left',
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#000',
            tabBarInactiveTintColor: '#000',
            tabBarButton: props => <TouchableOpacity{...props} />
        }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                // headerShadowVisible: false,
                tabBarIcon: HomeIcon,
                headerTitle: (props) => <HomeHeaderTitle {...props} />,
                headerRight: (props) => <HomeHeaderRight {...props} />
            }} />
            <Tab.Screen name="Explore" component={ExploreScreen} options={{
                headerShown: false,
                tabBarIcon: SearchIcon,
            }} />
            <Tab.Screen name="Reels" component={ReelsScreen} options={{
                headerShown: false,
                tabBarIcon: ReelsIcon,
                tabBarActiveBackgroundColor: '#000'
            }} />
            <Tab.Screen name="Market" component={MarketScreen} options={{
                tabBarIcon: MarketIcon,
                headerTitle: "Shop",
                headerRight: (props) => <ProfileHeaderRight {...props} />
            }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                tabBarIcon: ProfileIcon,
                headerTitle: (props) => <ProfileHeaderTitle username="username" {...props} />,
                headerRight: (props) => <ProfileHeaderRight {...props} />
            }} />
        </Tab.Navigator >
    )
}