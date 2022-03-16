import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { HomeStoryTray, PostImage, PostHeader } from "../components";

export const HomeScreen = () => {
    return <FlatList
        style={styles.container}
        ListHeaderComponent={<HomeStoryTray data={[0, 0, 0, 0, 0, 0, 0, 0]} />}
        showsVerticalScrollIndicator={false}
        data={[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        renderItem={({ item }) => (
            <View style={styles.item}>
                <PostHeader />
                <PostImage />
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
