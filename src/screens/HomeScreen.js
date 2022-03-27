import { StatusBar} from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView} from "react-native";
import Colors from "../constants/Colors";


  /* definindo a barra de notificação - cores no arquivo Colors. styles pode ser dark, light ect */
const HomeScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>    
            <StatusBar style="auto" translucent={false} backgroundColor={Colors.BASIC_BACKGROUND}/> 
            <Text>Home Screen</Text>
        </ScrollView>
        
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.YELLOW,
    },
});

export default HomeScreen;