import { StatusBar} from "expo-status-bar";
import React, {useContext} from "react";
import { StyleSheet, Text, View } from "react-native";
import themeContext from "../config/themeContext";


const MovieScreen = () => {

    const theme = useContext(themeContext);

    return (
        <View style={{...styles.container, backgroundColor: theme.backgroundColor}}>
            <StatusBar style="auto" />
            <Text style={{...styles.text, color: theme.color}}>Movie Screen</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default MovieScreen;