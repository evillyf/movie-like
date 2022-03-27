import { StatusBar} from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView} from "react-native";



const HomeScreen = () => {
    return (
        <ScrollView style={StyleSheet.container}>    
            <StatusBar style="auto" translucent={false}/>
            <Text>Home Screen</Text>
        </ScrollView>
        
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default HomeScreen;