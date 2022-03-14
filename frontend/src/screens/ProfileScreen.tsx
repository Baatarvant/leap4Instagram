import React from "react";
import { FlatList, View } from "react-native";

export const ProfileScreen = () => {
    return (
        <View>
            <FlatList
                data={[0, 0, 0, 0, 0, 0, 0]}
                renderItem={() => <View />}
                keyExtractor={(_item, index) => index.toString()}
            />
        </View>
    )
}