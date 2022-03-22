import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, } from 'react-native'
import { ButtonLong, Story } from '..';

export type Props = {
};

export const ProfileHeader: React.FC<Props> = () => {

    return (
        <View style={{ marginHorizontal: 16 }}>
            <View style={styles.container}>
                <View style={styles.center}>
                    <Story uri='https://picsum.photos/60' />
                </View>
                <View style={styles.numberContainer}>
                    <View style={styles.center}>
                        <Text style={styles.bold}>0,000</Text>
                        <Text >Posts</Text>
                    </View>
                    <View style={styles.center}>
                        <Text style={styles.bold}>0,000</Text>
                        <Text >Followers</Text>
                    </View>
                    <View style={styles.center}>
                        <Text style={styles.bold}>0,000</Text>
                        <Text >Following</Text>
                    </View>
                </View>
            </View>
            <View style={styles.bioContainer}>
                <View style={{marginVertical: 8}}>
                    <Text style={[styles.bold, {fontSize: 13, marginBottom: 4}]}>Username</Text>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. </Text>
                </View>
                <ButtonLong />
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bold: {
        fontWeight: '600',
        fontSize: 16
    },
    numberContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '80%'
    },
    bioContainer: {
        display: 'flex',
        alignItems: 'center',
    }
})
