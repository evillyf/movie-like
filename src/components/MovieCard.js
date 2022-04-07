import React from "react";
import { View, Text, StyleSheet } from "react-native";
import COLORS from "../constants/Colors";

const MovieCard = () => {
    return (
        <View style={styles.container}>
            <Text>Filme</Text>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.ACTIVE,
        height: 340,
        width: 230,
        borderRadius: 12,
        elevation: 5,
        marginVertical: 2,
    },
});

export default MovieCard;