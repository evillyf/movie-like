import React, {useState} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, TouchableNativeFeedback } from "react-native";
import COLORS from "../constants/Colors";
import Fonts from "../constants/Fonts"
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import {getPoster} from "../services/MovieService";

/* https://icons.expo.fyi/AntDesign/heart  - para pegar o import e render de ícones */
const MovieCard = ({title, poster, language, voteAvarage, voteCount}) => {
    const [liked, setLiked] = useState(false)


    return (
        <TouchableOpacity>
            <ImageBackground 
                style={styles.container} 
                source={{uri: getPoster(poster) }}>
                <TouchableNativeFeedback onPress={() => setLiked(!liked)}>
                    <Ionicons 
                        name={liked ? "heart" : "heart-outline"}
                        size={25} 
                        color={liked ? COLORS.HEART : COLORS.WHITE}
                        style={{position: "absolute", bottom:10, left: 10}}
                        />

                </TouchableNativeFeedback>
            </ImageBackground>
            
            <View>
                <Text style={styles.movieTitle} numberOfLines={3}>{title}</Text>
                <View style={styles.movieSubTitleContainer}>
                    <Text style={styles.movieSubTitle}>{language}</Text>
                    <View style={styles.rowAndCenter}>
                        <Ionicons 
                        name="heart" 
                        size={17} 
                        color={COLORS.HEART}
                        style={{ marginRight: 5}}
                        
                        />
                        <Text style={styles.movieSubTitle}>{voteCount}</Text>
                    </View>
                </View>
            </View>
            
        </TouchableOpacity> 

    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.GRAY,
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
        width: 230,
    },



    movieSubTitleContainer:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    movieSubTitle:{
        fontSize: 12,
        fontFamily: Fonts.REGULAR,
        color: COLORS.BLACK,
    },


    rowAndCenter:{
        flexDirection: "row",
        alignItems: "center"
    },

});

export default MovieCard;