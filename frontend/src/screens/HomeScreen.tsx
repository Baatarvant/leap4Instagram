import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
<<<<<<< HEAD
import { HomeStoryTray, PostImage, PostHeader } from "../components";
=======
import { HomeStoryTray, Post } from "../components";
>>>>>>> a3aa32e (navigation)

export const HomeScreen = () => {
    return <FlatList
        style={styles.container}
        ListHeaderComponent={<HomeStoryTray data={[0, 0, 0, 0, 0, 0, 0, 0]} />}
        showsVerticalScrollIndicator={false}
        data={[0, 0, 0, 0, 0, 0, 0, 0, 0]}
<<<<<<< HEAD
        renderItem={({ item }) => (
            <View style={styles.item}>
                <PostHeader />
                <PostImage />
=======
        renderItem={({ item, index }) => (
            <View key={index.toString()} style={styles.item}>
                <Post />
>>>>>>> a3aa32e (navigation)
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
