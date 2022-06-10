import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect, useState } from "react";
import { Dimensions, Image, StyleSheet, Text, View, Linking, Share } from "react-native";
import { ScrollView, TouchableOpacity, FlatList } from "react-native-gesture-handler";
import themeContext from "../config/themeContext";
import Fonts from "../constants/Fonts";
import Colors from "../constants/Colors";
import { getMovieById, getPoster, getVideo, getLanguage } from "../services/MovieService"
import ItemSeparator from "../components/ItemSeparator";
import CastCard from "../components/CastCard";
import MovieCard from "../components/MovieCard";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, Ionicons } from '@expo/vector-icons';
import { APPEND_TO_RESPONSE as AR } from "../constants/Urls";
import COLORS from "../constants/Colors";



const { height, width } = Dimensions.get('screen')
const setHeight = (h) => (height / 100) * h
const setWidth = (w) => (width / 100) * w

const MovieScreen = ({ route, navigation }) => {


    const theme = useContext(themeContext);
    const { movieId } = route.params;
    const [movie, setMovie] = useState({});
    const [isCastSelected, setIsCastSelected] = useState(true);

    useEffect(() => {
        getMovieById(movieId, `${AR.VIDEOS},${AR.CREDITS},${AR.RECOMMENDATIONS},${AR.SIMILAR}`).then(response => setMovie(response?.data));
    }, []);
    return (
        <ScrollView>
            <StatusBar style="light" />
            <LinearGradient
                colors={["rgba(0, 0, 0, 0.5)", "rgba(217, 217, 217, 0)"]}
                start={[0, 0.3]}
                style={styles.LinearGradient}

            />
            <View style={styles.moviePosterImageContainer}>
                <Image style={styles.moviePosterImage} resizeMode="cover" source={{ uri: getPoster(movie?.backdrop_path) }} />
            </View>

            <View style={styles.headerContainer}>

                <TouchableOpacity activeOpacity={.5} onPress={() => navigation.goBack()}>
                    <Feather name="chevron-left" size={35} color={Colors.WHITE} />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} onPress={() => Share.share({message: `${movie?.title}n\n\ ${movie?.homepage}`})}>
                    <Text style={styles.headerText}>Share</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.playButton}>
                <TouchableOpacity onPress={() => Linking.openURL(getVideo(movie.videos.results[0].key))}>
                    <Ionicons name="play-circle-outline" size={70} color={Colors.WHITE} />
                </TouchableOpacity>
            </View>

            <ItemSeparator height={setHeight(37)} />

            <View style={styles.movieTitleContainer}>
                <Text style={styles.movieTitle}>{movie?.original_title}</Text>
                <View style={styles.row}>
                    <Ionicons name="heart" size={22} color={Colors.HEART} />
                    <Text style={{...styles.ratingText,color: theme.color}}>{movie?.vote_average}</Text>
                </View>
            </View>

            <Text style={styles.genreText}>{movie?.genres?.map((genre) => genre?.name)?.join(", ")} | {movie?.runtime} Min</Text>
            <Text style={styles.genreText}>{getLanguage(movie?.original_language)?.english_name}</Text>

            <View style={styles.OverviewContainer}>
                <Text style={styles.OverviewTitle}>Sinopse</Text>
                <Text style={styles.OverviewText}>{movie?.overview}</Text>
            </View>

            <View>
                <Text style={{...styles.castTitle, color: theme.color, paddingTop: 19}}>Elenco</Text>

                <View style={styles.castSubMenuContainer}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => setIsCastSelected(true)}>
                        <Text style={{...styles.castSubMenuText, color: isCastSelected ? Colors.BLACK : Colors.LIGHT_GRAY, color: theme.color}}>Elenco</Text>
                    </TouchableOpacity>


                    <TouchableOpacity activeOpacity={0.5} onPress={() => setIsCastSelected(false)}>
                        <Text style={{...styles.castSubMenuText, color: isCastSelected ? Colors.WHITE : Colors.BLACK, color: theme.color}}>Equipe de filmagem</Text>
                    </TouchableOpacity>

                </View>



                <FlatList style={{ marginVertical: 5 }}
                    data={isCastSelected ? movie?.credits?.cast : movie?.credits?.crew}
                    keyExtractor={(item) => item?.credit_id}
                    horizontal
                    showHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => <ItemSeparator width={20} />}
                    ListHeaderComponent={() => <ItemSeparator width={20} />}
                    ListFooterComponent={() => <ItemSeparator width={20} />}
                    renderItem={({ item }) =>
                        <CastCard
                            originalName={item?.name}
                            characterName={isCastSelected ? item?.character : item?.job}
                            image={item?.profile_path}

                        />}

                />


            </View>
            <Text style={{...styles.extraListTitle, color: theme.color, paddingTop: 19}}>Recomendações</Text>
            <View>
            <FlatList 
                data={movie?.recommendations?.results}
                keyExtractor={(item) => item?.id?.toString()}
                horizontal
                showHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <ItemSeparator width={20} />}
                ListHeaderComponent={() => <ItemSeparator width={20} />}
                ListFooterComponent={() => <ItemSeparator width={20} />}
                renderItem={({ item }) =>
                    <MovieCard 
                    title={item.title} 
                    language={item.original_language} 
                    voteAvarage={item.vote_avarage}
                    voteCount={item.vote_count}
                    poster={item.poster_path}
                    size={0.7}
                    onPress ={() =>navigation.navigate("movie", {movieId: item.id})}
                    />}
            />
            </View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BASIC_BACKGROUND
    },
    moviePosterImageContainer: {
        height: setHeight(35),
        width: setWidth(145),
        alignItems: "center",
        position: "absolute",
        left: setWidth((100 - 145) / 2),
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
    LinearGradient: {
        height: setHeight(6),
        width: setWidth(100),
        top: 0,
        position: "absolute",
        elevation: 9,
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        position: "absolute",
        right: 0,
        left: 0,
        top: 50,
        elevation: 20,
    },
    headerText: {
        color: Colors.WHITE,
        fontFamily: Fonts.BOLD,
    },
    playButton: {
        position: "absolute",
        top: 110,
        left: setWidth(50) - 70 / 2,
        elevation: 10,

    },
    movieTitleContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },
    movieTitle: {
        color: Colors.BLACK,
        fontFamily: Fonts.EXTRA_BOLD,
        fontSize: 18,
        width: setWidth(60),

    },
    ratingText: {
        marginLeft: 5,
        color: Colors.BLACK,
        fontFamily: Fonts.EXTRA_BOLD,
        fontSize: 15,
    },
    row: {
        flexDirection: "row",
        alignItems: "center"
    },
    genreText: {
        color: Colors.LIGHT_GRAY,
        paddingHorizontal: 20,
        paddingTop: 5,
        fontFamily: Fonts.BOLD,
        fontSize: 13,
    },
    OverviewContainer: {
        backgroundColor: Colors.EXTRA_LIGHT_GRAY,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10,
    },
    OverviewTitle: {
        fontSize: 18,
        fontFamily: "Ultra",
        color: COLORS.BLACK,
    },
    OverviewText: {
        color: Colors.LIGHT_GRAY,
        paddingVertical: 5,
        fontFamily: Fonts.BOLD,
        fontSize: 13,
        textAlign: "justify"
    },
    castTitle: {
        marginLeft: 20,
        fontFamily: "Ultra",
        color: COLORS.BLACK,
        fontSize: 18,
    },
    castSubMenuContainer: {
        marginLeft: 20,
        flexDirection: "row",
        marginVertical: 5,
    },
    castSubMenuText: {
        marginRight: 10,
        color: Colors.BLACK,
        fontFamily: Fonts.BOLD,
        fontSize: 13,
    },
    extraListTitle:{
        marginLeft:20,
        fontFamily: "Ultra",
        color: COLORS.BLACK,
        fontSize:18,
        marginVertical: 8,
    },
});

export default MovieScreen;