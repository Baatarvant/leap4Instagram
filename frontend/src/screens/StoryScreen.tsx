import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, Image, ImageBackground, Animated, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation";

interface Props {
    navigation: NativeStackNavigationProp<RootStackParamList, 'ShowStory'>;
    data: any[];
    username?: string;
}
export const StoryScreen = (props:Props) => {
    const animated = useState(new Animated.Value(0))[0];
    const data = [1,1,1,1,1]
    
    const StatusBar = () => {
        return(
        )
        /*
        Animated.timing(animated,{
            toValue: 100,
            duration: 5000,
            useNativeDriver: false
        }).start()
        */
    }
    
    return(
        <SafeAreaView style={{width:'100%', height:'85%', backgroundColor:'black',top:60}}>
                <ImageBackground style={{width:'100%', height:'100%'}} source={{ uri: `https://picsum.photos/400` }}>
                    <View style={{flexDirection:'row'}}>
                    </View>
                </ImageBackground>
        </SafeAreaView> 
    )
    
}