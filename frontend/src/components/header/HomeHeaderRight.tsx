import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { AddIcon, HeartIcon, MessengerIcon } from "../../assets/icons";

export const HomeHeaderRight = (props: {
    tintColor?: string;
    pressColor?: string;
    pressOpacity?: number;
}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <AddIcon />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <HeartIcon />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <MessengerIcon />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 4
    },
    button: {
        marginHorizontal: 8
    }
})