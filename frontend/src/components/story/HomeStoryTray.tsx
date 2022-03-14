import React from "react";
import { FlatList, Image, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

interface Props {
    data: any[];
}

const Story = () => {
    return (
        <View>
            <TouchableOpacity >
                <LinearGradient useAngle angle={45} colors={['#feda75', '#fa7e1e', '#d62976', '#962fbf', '#4f5bd5', '#fd1d1d']} style={styles.gradient}>
                    <View style={styles.avatarContainer}>
                        <Image style={styles.avatar} source={{
                            uri: "https://picsum.photos/60"
                        }} />
                    </View>
                </LinearGradient>
            </TouchableOpacity>
            <Text style={styles.title}>username</Text>
        </View>
    );
}

export const HomeStoryTray = (props: Props) => {
    const { data } = props;

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.tray}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={({ item }) => <Story />}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    tray: {
        padding: 4,
        backgroundColor: '#fff',
    },
    gradient: {
        margin: 4,
        width: 70,
        height: 70,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatarContainer: {
        width: 66,
        height: 66,
        borderRadius: 33,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    title: {
        fontSize: 11,
        textAlign: 'center',
        marginBottom: 4,
    },
    container: {
        backgroundColor: '#fff',
        shadowColor: 'rgb(216,216,216)',
        shadowOpacity: 0.85,
        shadowRadius: 0,
        shadowOffset: { width: 0, height: 1 / 3 },
    }
})