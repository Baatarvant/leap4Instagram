import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { PostDescription } from "./PostDescription";
import { PostImage } from "./PostImage";
import { PostHeader } from "./PostHeader";

interface Props {
    numOfLikes?: number;
}

export const Post = (props: Props) => {
    const { numOfLikes = 100 } = props;
    return (
        <View>
            <PostHeader />
            <PostImage />
            <Text style={styles.numberOfLikes}>
                {numOfLikes} likes
            </Text>
            <PostDescription />
        </View>
    )
}

const styles = StyleSheet.create({
    numberOfLikes: {
        paddingHorizontal: 12,
        fontWeight: 'bold'
    }
})