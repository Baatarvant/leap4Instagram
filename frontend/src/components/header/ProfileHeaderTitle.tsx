import React from "react";
import { HeaderTitleProps } from "@react-navigation/elements";
import { Text, StyleSheet, Pressable } from "react-native";
import { ChevronDownIcon } from "../../assets/icons";

interface Props extends HeaderTitleProps {
    username: string;
}

export const ProfileHeaderTitle = (props: Props) => {
    const { username } = props;
    return (
        <Pressable style={styles.container}>
            <Text style={styles.title}>
                {username}
            </Text>
            <ChevronDownIcon width={16} height={16} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'

    },
    title: {
        marginRight: 4,
        fontWeight: '700',
        fontSize: 22
    }
})