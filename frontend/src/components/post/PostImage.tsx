import React, { useState } from "react";
import { FlatList, StyleSheet, View, Image, Dimensions, TouchableOpacity, Text } from "react-native";
import { CommentIcon, HeartIcon, ShareIcon, SaveIcon } from "../../assets/icons";

const screenWidth = Dimensions.get('window').width;

export const PostImage = () => {
    const [id, setId] = useState(0);
    const data = [0, 0, 0, 0];
    return (
        <View style={styles.container}>
            {data.length > 0 &&
                <View style={styles.numberIndicatorContainer}>
                    <Text style={styles.numberIndicator}>{`${id + 1} / ${data.length}`}</Text>
                </View>
            }
            <FlatList
                bounces={false}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                style={styles.list}
                data={data}
                renderItem={({ item }) => (
                    <Image style={styles.thumbnail} source={{ uri: 'https://picsum.photos/400' }} />
                )}
                keyExtractor={(_item, index) => index.toString()}
                onMomentumScrollEnd={({ nativeEvent: { contentOffset: { x: a } } }) => {
                    setId(Math.round(a / screenWidth));
                }}
            />
            <View style={styles.actionContainer}>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.iconButton}>
                        <HeartIcon />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton}>
                        <CommentIcon />
                    </TouchableOpacity >
                    <TouchableOpacity style={styles.iconButton}>
                        <ShareIcon />
                    </TouchableOpacity>
                </View >
                <View style={styles.indicators}>
                    {[0, 0, 0, 0].map((_item, index) =>
                        <View style={[styles.indicator, { backgroundColor: index === id ? '#1FA1FF' : '#c4c4c4' }]} />
                    )}
                </View>
                <View style={styles.save}>
                    <TouchableOpacity style={styles.iconButton}>
                        <SaveIcon />
                    </TouchableOpacity >
                </View >
            </View >
        </View >
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    list: {
        width: '100%',
    },
    thumbnail: {
        width: screenWidth,
        height: 400
    },
    actionContainer: {
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 4,
    },
    actions: {
        flex: 1,
        flexDirection: 'row'
    },
    iconButton: {
        marginHorizontal: 8,
    },
    indicators: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    indicator: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 4,
    },
    save: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    numberIndicatorContainer: {
        backgroundColor: "black",
        position: 'absolute',
        right: 12,
        top: 12,
        zIndex: 2,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 24,
    },
    numberIndicator: {
        color: '#fff',
        fontSize: 12
    }
});