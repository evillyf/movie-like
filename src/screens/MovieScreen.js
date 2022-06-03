import { StatusBar} from "expo-status-bar";
import React, {useContext, useEffect, useState} from "react";
import { Dimensions, Image, StyleSheet, Text, View, Linking} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import themeContext from "../config/themeContext";
import Fonts from "../constants/Fonts";
import Colors from "../constants/Colors";
import {getMovieById, getPoster, getVideo} from "../services/MovieService"
import ItemSeparator from "../components/ItemSeparator";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, Ionicons } from '@expo/vector-icons';
import { APPEND_TO_RESPONSE as AR } from "../constants/Urls";

const {height, width} = Dimensions.get('screen')
const setHeight = (h) => (height/100) * h
const setWidth = (w) => (width/100) * w

const MovieScreen = ({route, navigation}) => {


    const theme = useContext(themeContext);
    const {movieId} = route.params;
    const [movie,setMovie] = useState({});
    
    useEffect(() => {
        getMovieById(movieId,`${AR.VIDEOS}`).then(response => setMovie(response.data));
    }, []);
    return (
            <ScrollView>
                <StatusBar style="light"/>
                <LinearGradient
                    colors={["rgba(0, 0, 0, 0.5)","rgba(217, 217, 217, 0)"]}
                    start={[0, 0.3]}
                    style={styles.LinearGradient}

                />
                <View style={styles.moviePosterImageContainer}>
                    <Image style={styles.moviePosterImage} resizeMode="cover"source={{uri: getPoster(movie.backdrop_path)}}/>
                </View>

                <View style={styles.headerContainer}>
                    <TouchableOpacity activeOpacity={.5} onPress={() => navigation.goBack()}>
                        <Feather name="chevron-left" size={35} color= {Colors.WHITE}/>
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Share</Text>
                </View>
                <View style={styles.playButton}>
                    <TouchableOpacity onPress={() =>Linking.openURL(getVideo(movie.videos.results[0].key))}>
                        <Ionicons name="play-circle-outline" size={70} color={Colors.WHITE}/>
                    </TouchableOpacity>
                </View>
                
                <ItemSeparator height={setHeight(37)}/>
                <Text>{movie.title}</Text>    
            </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BASIC_BACKGROUND
    },
    moviePosterImageContainer:{
        height: setHeight(35),
        width: setWidth(145),
        alignItems: "center",
        position: "absolute",
        left: setWidth((100-145) / 2),
        top: 0,
        borderBottomLeftRadius: 300,
        borderBottomRightRadius: 300,
        elevation: 8,
    },
    moviePosterImage: {
        borderBottomRightRadius: 300,
        borderBottomLeftRadius: 300,
        height: setHeight(35),
        width: setWidth(145)

    },
    LinearGradient:{
        height: setHeight(6),
        width: setWidth(100),
        top: 0,
        position: "absolute",
        elevation: 9,
    },
    headerContainer:{
        flexDirection:"row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        position: "absolute",
        right: 0,
        left:0,
        top:50,
        elevation: 20,
    },
    headerText:{
        color: Colors.WHITE,
        fontFamily: Fonts.BOLD,
    },
    playButton:{
        position: "absolute",
        top: 110,
        left: setWidth(50) -70/2,
        elevation: 10,
        
    }
});

export default MovieScreen;