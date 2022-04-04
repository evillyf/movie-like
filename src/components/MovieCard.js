import React from "react";
import { View, Text, StyleSheet } from "rect-native";
import COLORS from "../constants/Colors";

const MovieCard = () => {
    return (
        <View style={StyleSheet.container}>
            <Text>Filme</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    constainer: {
        backgroundColor: COLORS.ACTIVE,
    },
});

export default MovieCard;