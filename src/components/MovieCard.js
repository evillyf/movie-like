import React, {useState, useContext} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, TouchableNativeFeedback } from "react-native";
import COLORS from "../constants/Colors";
import Fonts from "../constants/Fonts"
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import {getPoster, getLanguage} from "../services/MovieService";
import themeContext from "../config/themeContext";



/* https://icons.expo.fyi/AntDesign/heart  - para pegar o import e render de ícones */
const MovieCard = ({title, poster, language, voteAvarage, voteCount, size, heartLess, onPress}) => {
    const [liked, setLiked] = useState(false);
    const[voteCountValue, setVoteCountValue] = useState(voteCount);


    const theme = useContext(themeContext);
    const [mode, setMode] = useState(false);

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <ImageBackground 
                style={{...styles.container, width: 230 * size, height: 340 * size} }
                imageStyle={{ borderRadius: 12 }}
                source={{uri: getPoster(poster) }}>
                    
                {!heartLess ? (
                    <TouchableNativeFeedback 
                        onPress={() => {
                            setLiked(!liked);
                            setVoteCountValue(
                                liked ? voteCountValue - 1 : voteCountValue + 1
                            );
                    
                        }}
                    >
                    <Ionicons 
                        name={liked ? "heart" : "heart-outline"}
                        size={25 * size} 
                        color={liked ? COLORS.HEART : COLORS.WHITE}
                        style={{position: "absolute", bottom:10, left: 10}}
                        />

                </TouchableNativeFeedback>
                ) : null}
            </ImageBackground>
            
            <View>
                <Text style={{...styles.movieTitle, width: 230 * size}} numberOfLines={3}>{title}</Text>
                <View style={styles.movieSubTitleContainer}>
                    <Text style={{...styles.movieSubTitle,  color: theme.color}}>{getLanguage(language).english_name}</Text>
                    <View style={styles.rowAndCenter}>
                        <Ionicons 
                        name="heart" 
                        size={17 * size} 
                        color={COLORS.HEART}
                        style={{ marginRight: 5}}
                        
                        />
                        <Text style={{...styles.movieSubTitle, color: theme.color}}>{voteCountValue}</Text>
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
        color: "black",
    },


    rowAndCenter:{
        flexDirection: "row",
        alignItems: "center"
    },

});

MovieCard.defaultProps = {
    size: 1,
    heartLess: true,
}

export default MovieCard;