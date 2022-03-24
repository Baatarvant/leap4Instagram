import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScrollView, StyleSheet, View, Image, TextInput, SafeAreaView, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../navigation";
import { RouteProp } from "@react-navigation/native";
import { ArrowRightIcon } from "../assets/icons";


interface Props {
    navigation: NativeStackNavigationProp<RootStackParamList, 'CreatePost'>;
    route: RouteProp<RootStackParamList, 'CreatePost'>;
}

export const CreatePostScreen = (props: Props) => {
    const { navigation, route } = props;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <ArrowRightIcon />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.container}>
                <View style={styles.innerContainer}>
                    <Image style={styles.image} source={{ uri: route.params.images[0].node.image.uri }} />
                    <TextInput style={styles.input} multiline placeholder="Write a caption ..." />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
    },
    image: {
        width: 48,
        height: 48,
        marginRight: 12,
    },
    input: {
        flex: 1,
        fontSize: 12
    }

})