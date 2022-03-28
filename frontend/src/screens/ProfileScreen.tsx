import React from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import { ProfileHeader, HomeStoryTray } from "../components";


export const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.item}>

                <ProfileHeader />
            </View>
            <FlatList
                keyExtractor={(_item, index) => index.toString()}
                ListHeaderComponent={<HomeStoryTray highlights='highlights' data={[0, 0, 0, 0, 0, 0, 0, 0]} />}
            />
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    item: {
        // marginHorizontal: 4,
        width: '100%',
    },
});
