import React from "react";
import { HeaderTitleProps } from "@react-navigation/elements";
import { View } from "react-native";
import { Logo } from "../../assets/icons";

export const HomeHeaderTitle = (props: HeaderTitleProps) => {
    return (
        <View>
            <Logo />
        </View>
    )
}