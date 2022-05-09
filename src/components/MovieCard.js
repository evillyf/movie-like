import React, {useState} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, TouchableNativeFeedback } from "react-native";
import COLORS from "../constants/Colors";
import Fonts from "../constants/Fonts"
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import {getPoster, getLanguage} from "../services/MovieService";

/* https://icons.expo.fyi/AntDesign/heart  - para pegar o import e render de ícones */
const MovieCard = ({title, poster, language, voteAvarage, voteCount, size}) => {
    const [liked, setLiked] = useState(false)


    return (
        <TouchableOpacity activeOpacity={0.8}>
            <ImageBackground 
                style={{...styles.container, width: 230 * size, height: 340 * size} }
                imageStyle={{ borderRadius: 12 }}
                source={{uri: getPoster(poster) }}>
                <TouchableNativeFeedback onPress={() => setLiked(!liked)}>
                    <Ionicons 
                        name={liked ? "heart" : "heart-outline"}
                        size={25 * size} 
                        color={liked ? COLORS.HEART : COLORS.WHITE}
                        style={{position: "absolute", bottom:10, left: 10}}
                        />

                </TouchableNativeFeedback>
            </ImageBackground>
            
            <View>
                <Text style={{...styles.movieTitle, width: 230 * size}} numberOfLines={3}>{title}</Text>
                <View style={styles.movieSubTitleContainer}>
                    <Text style={styles.movieSubTitle}>{getLanguage(language).english_name}</Text>
                    <View style={styles.rowAndCenter}>
                        <Ionicons 
                        name="heart" 
                        size={17 * size} 
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

MovieCard.defaultProps = {
    size: 1,
}

export default MovieCard;