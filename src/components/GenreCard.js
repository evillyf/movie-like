import React from "react";
import {View, Text, StyleSheet, Dimensions } from "react-native";
import COLORS from "../constants/Colors";



const { width } = Dimensions.get("screen");

const setWidth = (w) => (width / 100) *w;

/* menu de navegação dos filmes */
const GenreCard = () => {
    return (
        <View style={styles.container}>
            <Text>Ação</Text>
        </View>
    );
};



/* STYLES */
const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: COLORS.WHITE,
        paddingVertical: 8,
        elevation: 3,
        marginVertical: 2,
        width: setWidth(20),
    },
});

export default GenreCard;