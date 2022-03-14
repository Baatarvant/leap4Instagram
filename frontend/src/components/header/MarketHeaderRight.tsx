import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { AddIcon, BurgerIcon } from "../../assets/icons";

export const MarketHeaderRight = (props: {
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
                <BurgerIcon />
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