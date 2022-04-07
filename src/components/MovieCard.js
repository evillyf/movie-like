import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import COLORS from "../constants/Colors";
import Fonts from "../constants/Fonts";
import { AntDesign } from '@expo/vector-icons';

/* https://icons.expo.fyi/AntDesign/heart  - para pegar o import e render de ícones */
const MovieCard = () => {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Text>Filme</Text>
            </View>
            <View>
                <Text style={styles.movieTitle}>O Batman</Text>
                <View style={styles.movieSubTitleContainer}>
                    <Text style={styles.movieSubTitle}>Português | (BR)</Text>
                    <View style={styles.rowAndCenter}>
                        <AntDesign 
                        name="heart" 
                        size={17} 
                        color={COLORS.HEART}
                        style={{ marginRight: 5}}
                        
                        />
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
    movieTitle:{
        fontFamily: Fonts.EXTRA_BOLD,
        color: COLORS.GRAY,
        paddingVertical: 2,
        marginTop: 5,
    },



    movieSubTitleContainer:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    movieSubTitle:{},
    rowAndCenter:{
        flexDirection: "row",
        alignItems: "center"
    },

});

export default MovieCard;