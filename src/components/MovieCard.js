import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import COLORS from "../constants/Colors";
import { AntDesign } from '@expo/vector-icons';

/* https://icons.expo.fyi/AntDesign/heart  - para pegar o import e render de ícones */
const MovieCard = () => {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Text>Filme</Text>
            </View>
            <View>
                <Text>O Batman</Text>
                <View style={styles.movieSubTitleContainer}>
                    <Text>Português | (BR)</Text>
                    <View style={styles.rowAndCenter}>
                        <AntDesign name="heart" size={24} color="red" />
                        <Text>90%</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity> 

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
    movieTitle:{},
    movieSubTitleContainer:{
        flexDirection: "row",
        alignItems: "center"
    },

    movieSubTitle:{},
    rowAndCenter:{
        flexDirection: "row",
        alignItems: "center"
    },

});

export default MovieCard;