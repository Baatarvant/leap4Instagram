import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { ExitIcon } from "../../assets/icons";

export const GalleryHeaderLeft = (props: {
    tintColor?: string;
    pressColor?: string;
    pressOpacity?: number;
}) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => { navigation.goBack() }}>
            <ExitIcon />
        </TouchableOpacity>
    )
}
