import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { DownArrowIcon } from "../../assets/icons";

export const ButtonFollow = () => {

    const [isFollowed, setIsFollowed] = useState(false)

    return (
        <View style={styles.container}>
            {isFollowed ? (
                <TouchableOpacity
                    style={[styles.editButton, styles.followButton]}
                    onPress={() => setIsFollowed(!isFollowed)}>
                    <Text style={[styles.innerText, styles.followingText]}>
                        Follow
                    </Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity
                    style={styles.editButton}
                    onPress={() => setIsFollowed(!isFollowed)}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <Text style={styles.innerText}>
                            Following
                        </Text>
                        <DownArrowIcon />
                    </View>
                </TouchableOpacity>
            )}
            <TouchableOpacity
                style={styles.editButton}>
                <Text style={styles.innerText}>
                    Message
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.editButton}>
                <Text style={styles.innerText}>
                    Email
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.editButton, styles.downArrow]}>
                <DownArrowIcon />
            </TouchableOpacity>
        </View>

    )
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    editButton: {
        borderWidth: 0.7,
        borderColor: '#CBCBCB',
        borderRadius: 3,
        width: '28%',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
    },
    downArrow: {
        width: 30
    },
    followButton: {
        backgroundColor: '#1FA1FF',
    },
    innerText: {
        fontSize: 13,
        fontWeight: '600',
        color: '#000'
    },
    followingText: {
        color: '#fff'
    },
});

