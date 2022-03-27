import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Dimensions } from "react-native";
import COLORS from "../constants/Colors";



const { width } = Dimensions.get("screen");

const setWidth = (w) => (width / 100) *w;

/* menu de navegação dos filmes */
const GenreCard = ({genreName}) => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.5}>
            <Text style={styles.genreText}>{genreName}</Text>
        </TouchableOpacity>
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
    genreText: {
        fontSize: 13,
        color: COLORS.ACTIVE,
    }
});

export default GenreCard;