import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { HomeStoryTray, Post } from "../components";

export const HomeScreen = () => {
    return <FlatList
        style={styles.container}
        ListHeaderComponent={<HomeStoryTray data={[0, 0, 0, 0, 0, 0, 0, 0]} />}
        showsVerticalScrollIndicator={false}
        data={[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        renderItem={({ item, index }) => (
            <View key={index.toString()} style={styles.item}>
                <Post />
            </View>
        )}
        keyExtractor={(_item, index) => index.toString()}
    />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    item: {
        marginVertical: 4,
        width: '100%',
    },
});
