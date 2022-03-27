import { StatusBar} from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";



const HomeScreen = () => {
    return (
        <View style={StyleSheet.container}>
            <StatusBar style="auto" />
            <Text>Home Screen</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default HomeScreen;