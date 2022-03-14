import React from 'react'

import { View, Text, StyleSheet, Image, Button, TouchableWithoutFeedback, Alert } from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: 49,
        backgroundColor: '#FFF',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    left: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    username: {
        fontSize: 12,
        fontWeight: '700'
    },
    sponsored: {
        fontSize: 11
    },
    button: {
        fontSize: 24,
        paddingBottom: 12,
        paddingRight: 14
    },
    profilePic: {
        width: 30,
        height: 30,
        borderRadius: 50,
        margin: 8
    }
})

export type Props = {
    uri: string;
    username: string;
    sponsored?: boolean
};

export const UserHeader: React.FC<Props> = ({ uri, username, sponsored = false }) => {

    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <View>
                    <Image style={styles.profilePic} source={{
                        uri: uri,
                    }} />
                </View>
                <TouchableWithoutFeedback onPress={() => Alert.alert('You clicked username!')}>
                    <View>
                        <Text style={styles.username}>
                            {username}
                        </Text>
                        {sponsored ?
                            <Text style={styles.sponsored}>
                                Sponsored
                            </Text>
                            : <></>
                        }
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <TouchableWithoutFeedback onPress={() => Alert.alert('You clicked 3 dots!')}>
                <View >
                    <Text style={styles.button}>...</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}