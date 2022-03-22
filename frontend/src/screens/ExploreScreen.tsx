import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { ExploreImage } from "../components";

export const ExploreScreen = () => {

    const seperator = () => {
        return (
            <View style={styles.seperator} />
        )
    }

    return <FlatList
        style={styles.container}
        showsVerticalScrollIndicator={false}
        horizontal={false}
        data={[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
        numColumns={3}
        renderItem={({ item, index }) => (
            <View style={[(index % 3 == 2) ? { marginRight: 0 } : { marginRight: 1 }]}>
                <ExploreImage />
            </View>
        )}
        keyExtractor={(_item, index) => index.toString() + 'explore'}
        ItemSeparatorComponent={seperator}
    />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    seperator: {
        width: '100%',
        height: 1,
        backgroundColor: '#fff  '
    }
});