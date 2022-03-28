import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Dimensions } from "react-native";
import COLORS from "../constants/Colors";



const { width } = Dimensions.get("screen");

const setWidth = (w) => (width / 100) *w;

/* menu de navegação dos filmes */
const GenreCard = ({genreName, active, onPress}) => {
    return (
        <TouchableOpacity style={{...styles.container, backgroundColor: active ? COLORS.ACTIVE : COLORS.WHITE}} activeOpacity={0.5}
        onPress={() => onPress(genreName)}
        >
            <Text style={{...styles.genreText, color: active ? COLORS.WHITE : COLORS.BLACK}}>{genreName}</Text>
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