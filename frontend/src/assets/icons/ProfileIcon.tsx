import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { IconProps } from './type';

export const ProfileIcon = (props: IconProps) => {
    const { width = 24, height = 24, color = "#000", focused = false } = props;
    return (
        <View style={{ width: width, height: height, ...styles.container, borderColor: focused ? color : 'rgb(216,216,216)', borderWidth: focused ? 2 : 1, }}>
            <Image style={styles.avatar} source={{ uri: "https://picsum.photos/40" }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        width: 20,
        height: 20,
        borderRadius: 10
    }
})