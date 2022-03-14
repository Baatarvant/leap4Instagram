import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { useAuth } from "../providers";

export const LoginScreen = () => {
    const auth = useAuth();
    return (
        <SafeAreaView>
            <TouchableOpacity onPress={() => {
                auth?.login()
            }}>
                <Text>
                    login
                </Text>
            </TouchableOpacity>
        </SafeAreaView >
    )
}