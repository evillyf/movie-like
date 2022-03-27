import { StatusBar} from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView} from "react-native";
import Colors from "../constants/Colors";


  /* definindo a barra de notificação - cores no arquivo Colors. styles pode ser dark, light ect */
const HomeScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>    
            <StatusBar style="auto" translucent={false} backgroundColor={Colors.BASIC_BACKGROUND}/> 
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}> EM CARTAZ</Text>
                <Text style={styles.headerSubTitle}> VER TODOS</Text>
            </View>
        </ScrollView>
        
    );
};

/* STYLE */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.EXTRA_LIGHT_GRAY,  /* definindo a cor de fundo */
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    
    headerTitle: {
        fontSize: 28,

    },
    headerSubTitle: {
        fontSize: 13,
        color: Colors.ACTIVE,

    }

});

export default HomeScreen;