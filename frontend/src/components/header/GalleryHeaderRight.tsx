import React from "react";
import { TouchableOpacity } from "react-native";
import { ArrowRightIcon } from "../../assets/icons";

export const GalleryHeaderRight = (props: {
    tintColor?: string;
    pressColor?: string;
    pressOpacity?: number;
}) => {
    return (
        <TouchableOpacity>
            <ArrowRightIcon />
        </TouchableOpacity>
    )
}
