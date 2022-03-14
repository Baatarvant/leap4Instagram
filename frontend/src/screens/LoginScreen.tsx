import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View, Text, TouchableOpacity, Button } from "react-native";
import { Logo } from "../assets/icons";
import { useAuth } from "../providers";

export const LoginScreen = () => {
    const auth = useAuth();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.logo}>
                    <Logo width={156} height={45} />
                </View>
                <TextInput style={styles.input} placeholder="Phone number, username or email" placeholderTextColor="#999999" />
                <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#999999" />
                <TouchableOpacity style={styles.forgotPassword}>
                    <Text style={styles.textButton}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={auth?.login} style={styles.button}>
                    <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottom}>
                <Text style={styles.text}>Don't have an account? </Text>
                <TouchableOpacity >
                    <Text style={styles.textButton}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        backgroundColor: '#fff',
        shadowColor: 'rgb(216,216,216)',
        shadowOpacity: 0.85,
        shadowRadius: 0,
        shadowOffset: { width: 0, height: 1 / 3 },
    },
    bottom: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        borderWidth: 1,
        paddingHorizontal: 16,
        paddingVertical: 12,
        width: '100%',
        marginVertical: 8,
        borderRadius: 4,
        borderColor: 'rgb(216,216,216)',
        backgroundColor: '#fafafa'
    },
    logo: {
        marginBottom: 48
    },
    forgotPassword: {
        width: '100%',
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        color: '#1FA1FF',
    },
    text: {
        color: '#999999'
    },
    textButton: {
        color: '#1FA1FF'
    },
    button: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#1FA1FF',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 4,
        marginTop: 36
    },
    buttonText: {
        color: '#fff'
    }
});
