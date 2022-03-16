import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Modal, Text, Pressable } from "react-native";
import { AddIcon, GridIcon, HeartIcon, MessengerIcon, ReelsIcon } from "../../assets/icons";
import { RootStackParamList } from "../../navigation";

const addButtons = [
    { title: 'Post', icon: <GridIcon /> },
    { title: 'Story', icon: <ReelsIcon /> },
    { title: 'Reel', icon: <ReelsIcon /> },
    { title: 'Live', icon: <ReelsIcon /> }
];

export const HomeHeaderRight = (props: {
    tintColor?: string;
    pressColor?: string;
    pressOpacity?: number;
}) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Gallery'>>();
    const [displayAddDropdown, setDisplayAddDropdown] = useState(false);
    const openAddDropdown = () => {
        setDisplayAddDropdown(true)
    }
    const closeAddDropdown = () => {
        setDisplayAddDropdown(false)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={openAddDropdown} style={styles.iconButton}>
                <AddIcon />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
                <HeartIcon />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
                <MessengerIcon />
            </TouchableOpacity>
            <Modal
                animationType="fade"
                transparent={true}
                visible={displayAddDropdown}
                onRequestClose={closeAddDropdown}
            >
                <View style={styles.modalContainer}>
                    <Pressable onPress={closeAddDropdown} style={styles.backdrop} />
                    <View style={styles.modalView}>
                        {addButtons.map((item, index) =>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('Gallery');
                                    closeAddDropdown()
                                }}
                                style={[styles.button, { borderBottomWidth: index < 3 ? 1 : undefined }]}
                            >
                                <Text>{item.title}</Text>
                                {item.icon}
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </Modal >
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 4,
    },
    iconButton: {
        marginHorizontal: 8
    },
    modalContainer: {
        flex: 1,
    },
    modalView: {
        position: 'absolute',
        top: 91,
        right: 16,
        backgroundColor: "white",
        borderRadius: 4,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    button: {
        width: 120,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderBottomColor: 'rgba(0,0,0,0.1)'
    },
    backdrop: {
        flex: 1
    }
})