import React, { useState } from "react";
import { FlatList, StyleSheet, View, Image, Dimensions, TouchableOpacity } from "react-native";

const screenWidth = Dimensions.get('window').width;

export const ExploreImage = () => {
    const [id, setId] = useState(0);
    return (
        <View >
            <Image style={styles.thumbnail} source={{ uri: 'https://picsum.photos/400' }} />
        </View>
    )
};

const styles = StyleSheet.create({
    thumbnail: {
        width: screenWidth / 3,
        height: screenWidth / 3,
    }
});